import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      img_link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756672011/WhatsApp_Image_2025-09-01_at_01.54.57_3204db63_xfwggq.jpg",
      form_link: "https://forms.gle/rH9Ktmdmiaq1UtaLA",
      map_link: "https://maps.app.goo.gl/uicrQg3tQk8yTDgU9"
    },
  ];

  const pastEvents = [
    {
      id: 1,
      img_link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756673114/Untitled_design1_jbdlml.png",
    },
    {
      id: 1,
      img_link: "https://res.cloudinary.com/dinhdwh2y/image/upload/v1756673332/Untitled_design_ygmsdn.png",
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Competition': 'bg-red-500/20 text-red-400',
      'Workshop': 'bg-blue-500/20 text-blue-400',
      'Lecture': 'bg-green-500/20 text-green-400',
      'Contest': 'bg-purple-500/20 text-purple-400',
      'Exhibition': 'bg-yellow-500/20 text-yellow-400'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400';
  };

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      'Registration Open': 'bg-green-500/20 text-green-400',
      'Coming Soon': 'bg-yellow-500/20 text-yellow-400',
      'Full': 'bg-red-500/20 text-red-400'
    };
    return colors[status] || 'bg-gray-500/20 text-gray-400';
  };

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
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.id}
                className="card-tech space-y-4 hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative  rounded-lg overflow-hidden">
                  <img
                    src={event.img_link}
                    alt={event.img_link}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button
                  className="w-full btn-hero"
                  onClick={() => window.open(event.form_link, "_blank")}
                >
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Past Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={event.id}
                className="card-tech space-y-4 hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative  rounded-lg overflow-hidden">
                  <img
                    src={event.img_link}
                    alt={event.img_link}
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button
                  className="w-full btn-hero"
                >
                  Past Event
                </Button>
              </div>
            ))}
          </div>
        </section>

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