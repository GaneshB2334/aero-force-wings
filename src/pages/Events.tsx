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
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1758195111/WhatsApp_Image_2025-08-30_at_13.54.39_a73c8013_yxlnm7.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757874756/IMG_20250912_130637_ux2net.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757875193/20250903_112822_uvwinq.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757874842/IMG20250904175257_1_qcdeyo.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757875458/20250903_112457_1_gmolyl.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876742/20250903_114016_sixugs.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757875468/20250903_112502_1_swutiw.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757875379/20250903_113245_rttdns.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757875156/20250903_154633_1_nu0v68.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876751/20250903_113519_az3py0.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757875318/20250903_114649_oqevgm.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757875292/20250903_153913_m2dbuj.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757875281/20250903_114847_hnv8ok.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876886/WhatsApp_Image_2025-09-11_at_11.51.18_74e010d6_bk2gdo.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757875891/dji_fly_20250903_145318_0_1756891398248_photo_low_quality_1_yawjh8.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757875083/20250903_142751_1_l75ow1.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757875214/20250903_152922_1_encge6.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757875238/20250903_155010_qo3rl8.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757875262/20250903_155139_pctklv.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757875373/20250903_152905_nmzji9.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876834/IMG_20250903_133103_oobqpr.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876850/IMG_20250903_103601_zeqalj.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876886/WhatsApp_Image_2025-09-11_at_11.51.18_97321113_vpvbkz.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876852/IMG_20250903_110231_kvldic.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876798/20250903_142732_1_pree46.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876788/20250904_161730_ui9sek.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876747/20250904_163545_qkf4tm.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876682/20250903_123841_pesewo.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876027/IMG20250903155416_wfdnce.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876008/IMG20250903114700_cbsh3l.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757875963/20250903_152851_z4rpcj.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757875973/Screenshot_2025-09-12_124025_c0w0dg.png",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876865/IMG20250903145751_nqkqmp.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876830/IMG20250903152609_igdkqz.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876819/IMG20250904155959_rvoa9p.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876802/IMG20250904160422_ihyk7q.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876789/IMG_20250904_172712_mwvb9q.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876801/IMG_20250904_172930_xm4kll.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876779/20250904_172229_s0xlt3.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876772/20250904_172112_am3hap.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757878257/20250904_172318_ba5om5.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757867644/DJI_20250904112857_0087_D_ifpbqu.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757867791/DJI_20250904112912_0088_D_mfpwgm.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757867952/DJI_20250904112816_0081_D_uqcdcb.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757868339/DJI_20250904113157_0100_D_rkvk6g.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757873067/DJI_20250904113446_0132_D_p0rlld.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757873177/DJI_20250904130931_0148_D_hhgt8c.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757873214/DJI_20250904164801_0208_D_m2eyp6.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757873246/DJI_20250904113418_0124_D_p2xsrh.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757873247/DJI_20250904155057_0184_D_xmwja5.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876766/20250904_172005_cqudqx.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876751/20250904_171934_zhuowd.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876739/20250904_171956_uabyix.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757876788/dji_fly_20250903_144540_0_1756890940873_photo_low_quality_hx4pwu.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757877983/DJI_20250904113225_0105_D_p0zmph.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1757878001/20250903_114910_epkoi0.jpg",



        
      ]
    },
    {
      id: 2,
      title: "Past Workshop Event",
      date: "30/10/2023", // Past date
      img_link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756673114/Untitled_design1_jbdlml.png",
      description: "Previous drone workshop that was successfully conducted.",
      images: [
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756673114/Untitled_design1_jbdlml.png",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756726637/WhatsApp_Image_2025-09-01_at_17.04.19_5b36b475_pdsexo.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671688/IMG_2472_oy3wmi.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671277/IMG_2217_suolc5.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671279/IMG_2393_iv3god.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756670772/IMG_2014_nmayps.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671259/IMG_2026_qwtpqt.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671265/IMG_2030_y4bki4.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671265/IMG_2114_ckjrja.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671261/IMG_2081_jvhwgj.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671258/IMG_2475_vfoehg.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671259/IMG_2463_lo4kkk.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671259/IMG_2047_mlw7vw.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671267/IMG_2165_pr0dge.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756671267/IMG_2185_uqkqhj.jpg",
        "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756726644/WhatsApp_Image_2025-09-01_at_17.04.19_b4f47667_o62ea8.jpg",

      ]
    },
    {
      id: 3,
      title: "Another Past Event",
      date: "31/07/2023", // Past date
      img_link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756673332/Untitled_design_ygmsdn.png",
      description: "Another successful event from our past activities.",
      images: [
         "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756673332/Untitled_design_ygmsdn.png",
      ] 
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