import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Drone Racing Championship',
      date: '2024-03-15',
      time: '10:00 AM',
      location: 'GHRCEM Campus Ground',
      description: 'High-speed drone racing competition with custom-built racing drones. Test your piloting skills and compete for exciting prizes.',
      category: 'Competition',
      participants: 50,
      status: 'Registration Open',
      image: 'https://images.unsplash.com/photo-1508614999368-9260051292e5?w=600&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'AI in Drone Technology Workshop',
      date: '2024-03-22',
      time: '2:00 PM',
      location: 'Tech Lab, Block A',
      description: 'Learn how to integrate artificial intelligence with drone systems for autonomous navigation and object detection.',
      category: 'Workshop',
      participants: 30,
      status: 'Registration Open',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Guest Lecture: Future of Commercial Drones',
      date: '2024-04-05',
      time: '11:00 AM',
      location: 'Auditorium',
      description: 'Industry expert shares insights on commercial drone applications and career opportunities in the drone industry.',
      category: 'Lecture',
      participants: 100,
      status: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1558403194-611308249627?w=600&h=300&fit=crop'
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Drone Photography Contest',
      date: '2024-02-14',
      location: 'Various Locations',
      description: 'Students showcased their aerial photography skills capturing stunning shots of Pune city.',
      category: 'Contest',
      participants: 25,
      winner: 'Aditi Sharma - Sunset Over Pune',
      image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'Build Your First Drone Workshop',
      date: '2024-01-20',
      location: 'Engineering Workshop',
      description: 'Hands-on workshop where students built their first quadcopter from scratch.',
      category: 'Workshop',
      participants: 40,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'Drone Tech Expo 2024',
      date: '2024-01-15',
      location: 'Main Campus',
      description: 'Annual exhibition showcasing student drone projects and latest technology developments.',
      category: 'Exhibition',
      participants: 200,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=300&fit=crop'
    }
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
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                    <Badge className={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      {event.participants} participants expected
                    </div>
                  </div>

                  <Button 
                    className="w-full btn-hero"
                    disabled={event.status === 'Coming Soon'}
                  >
                    {event.status === 'Registration Open' ? 'Register Now' : 'Coming Soon'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Past Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div 
                key={event.id}
                className="card-tech hover-glow"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-32 md:h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3 space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-bold pr-4">{event.title}</h3>
                      <Badge className={getCategoryColor(event.category)}>
                        {event.category}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-sm">{event.description}</p>
                    
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        {event.participants} participants
                      </div>
                      {event.winner && (
                        <div className="mt-2 p-2 bg-primary/10 rounded-lg">
                          <p className="text-xs text-primary font-medium">Winner: {event.winner}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
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