import { Calendar, Clock, MapPin, Users, ArrowRight, X, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [fullScreenImageOpen, setFullScreenImageOpen] = useState(false);

  const events = [
    {
      id: 1,
      title: "Drone Workshop 2025",
      date: "04/09/2025", // DD/MM/YYYY
      img_link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756672011/WhatsApp_Image_2025-09-01_at_01.54.57_3204db63_xfwggq.jpg",
      form_link: "https://forms.gle/rH9Ktmdmiaq1UtaLA",
      map_link: "https://maps.app.goo.gl/uicrQg3tQk8yTDgU9",
      description: "Learn the fundamentals of drone technology and hands-on flying experience.",
      images: [
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756672011/WhatsApp_Image_2025-09-01_at_01.54.57_3204db63_xfwggq.jpg",
        ""
      ]
    },
    {
      id: 2,
      title: "Past Workshop Event",
      date: "15/08/2024", // Past date
      img_link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756673114/Untitled_design1_jbdlml.png",
      description: "Previous drone workshop that was successfully conducted.",
      images: [
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756673114/Untitled_design1_jbdlml.png",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756673332/Untitled_design_ygmsdn.png"
      ]
    },
    {
      id: 3,
      title: "Another Past Event",
      date: "10/07/2024", // Past date
      img_link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756673332/Untitled_design_ygmsdn.png",
      description: "Another successful event from our past activities.",
      images: [] // No images array
    },
  ];

  // Function to check if event is upcoming
  const isUpcoming = (dateString) => {
    const [day, month, year] = dateString.split('/').map(Number);
    const eventDate = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return eventDate >= today;
  };

  // Filter events
  const upcomingEvents = events.filter(event => isUpcoming(event.date));
  const pastEvents = events.filter(event => !isUpcoming(event.date));

  // Format date for display
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  // Open image modal
  const openImageModal = (event) => {
    setSelectedEvent(event);
    setImageModalOpen(true);
  };

  // Close image modal
  const closeImageModal = () => {
    setSelectedEvent(null);
    setImageModalOpen(false);
  };

  // Open full screen image
  const openFullScreenImage = (imageUrl) => {
    setFullScreenImage(imageUrl);
    setFullScreenImageOpen(true);
  };

  // Close full screen image
  const closeFullScreenImage = () => {
    setFullScreenImage(null);
    setFullScreenImageOpen(false);
  };

  // Prevent body scroll when modals are open
  useEffect(() => {
    if (imageModalOpen || fullScreenImageOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [imageModalOpen, fullScreenImageOpen]);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold">
            Club <span className="text-gradient">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for exciting workshops, competitions, and learning experiences in drone technology
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Calendar className="mr-3 h-8 w-8 text-primary" />
            Upcoming Events ({upcomingEvents.length})
          </h2>
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="card-tech space-y-4 hover-glow cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openImageModal(event)}
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src={event.img_link}
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                      {event.images?.length || 0} images
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {formatDate(event.date)}
                    </div>
                    {event.description && (
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {event.description}
                      </p>
                    )}
                  </div>

                  {event.form_link && (
                    <Button
                      className="w-full btn-hero"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(event.form_link, "_blank");
                      }}
                    >
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="card-tech p-8 text-center">
              <Calendar className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-muted-foreground">No Upcoming Events</h3>
              <p className="text-muted-foreground">Stay tuned for exciting events coming soon!</p>
            </div>
          )}
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Past Events ({pastEvents.length})</h2>
          {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <div
                  key={event.id}
                  className="card-tech space-y-4 hover-glow cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openImageModal(event)}
                >
                  <div className="relative aspect-video rounded-lg overflow-hidden">
                    <img
                      src={event.img_link}
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
                      {event.images?.length || 0} images
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {formatDate(event.date)}
                    </div>
                    {event.description && (
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {event.description}
                      </p>
                    )}
                  </div>

                  <Button
                    className="w-full"
                    variant="outline"
                    disabled
                  >
                    Past Event
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="card-tech p-8 text-center">
              <Clock className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-muted-foreground">No Past Events</h3>
              <p className="text-muted-foreground">Past events will appear here.</p>
            </div>
          )}
        </section>

        {/* Image Modal */}
        <AnimatePresence>
          {imageModalOpen && selectedEvent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-screen w-screen bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={closeImageModal}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-background rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div>
                    <h3 className="text-xl font-semibold">{selectedEvent.title}</h3>
                    <p className="text-sm text-muted-foreground">{formatDate(selectedEvent.date)}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={closeImageModal}
                    className="p-2"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Modal Content */}
                <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
                  {selectedEvent.images && selectedEvent.images.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedEvent.images.map((image, index) => (
                        <div 
                          key={index} 
                          className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
                          onClick={() => openFullScreenImage(image)}
                        >
                          <img
                            src={image}
                            alt={`${selectedEvent.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 group-hover:brightness-110"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-2">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <ImageIcon className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold text-muted-foreground mb-2">No Images Added</h3>
                      <p className="text-muted-foreground">Images for this event haven't been uploaded yet.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Full Screen Image Modal */}
        <AnimatePresence>
          {fullScreenImageOpen && fullScreenImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-screen w-screen bg-black/95 z-[60] flex items-center justify-center"
              onClick={closeFullScreenImage}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={closeFullScreenImage}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white border-none"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Full Screen Image Container */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="w-full h-full flex items-center justify-center p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={fullScreenImage}
                  alt="Full screen view"
                  className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
                  style={{
                    maxWidth: 'calc(100vw - 2rem)',
                    maxHeight: 'calc(100vh - 2rem)',
                  }}
                />
              </motion.div>

              {/* Instructions */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/70 text-sm bg-black/50 px-4 py-2 rounded-full">
                Click anywhere to close
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <section className="mt-20 text-center">
          <div className="card-tech max-w-2xl mx-auto p-8 space-y-4">
            <h3 className="text-2xl font-bold">Stay Updated</h3>
            <p className="text-muted-foreground">
              Don't miss out on our upcoming events! Follow us on social media or contact us
              to get notified about new workshops, competitions, and tech talks.
            </p>
            <a href="/contact" className="inline-block">
              <button className="btn-hero">Contact Us</button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;