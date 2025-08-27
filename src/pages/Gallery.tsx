import { useState } from 'react';
import { Play, Calendar, MapPin } from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'events', name: 'Events' },
    { id: 'projects', name: 'Projects' },
    { id: 'workshops', name: 'Workshops' },
    { id: 'competitions', name: 'Competitions' }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      category: 'events',
      title: 'Annual Drone Festival 2024',
      date: 'March 15, 2024',
      location: 'GHRCEM Campus',
      description: 'Our biggest event of the year featuring drone displays and competitions'
    },
    {
      id: 2,
      type: 'video',
      category: 'projects',
      title: 'Autonomous Delivery Drone Demo',
      date: 'February 20, 2024',
      location: 'Innovation Lab',
      description: 'Demonstration of our latest autonomous delivery drone prototype'
    },
    {
      id: 3,
      type: 'image',
      category: 'workshops',
      title: 'Drone Programming Workshop',
      date: 'January 10, 2024',
      location: 'Computer Lab',
      description: 'Hands-on workshop teaching drone programming fundamentals'
    },
    {
      id: 4,
      type: 'image',
      category: 'competitions',
      title: 'Inter-College Drone Racing',
      date: 'December 5, 2023',
      location: 'Sports Ground',
      description: 'Thrilling drone racing competition with teams from multiple colleges'
    },
    {
      id: 5,
      type: 'video',
      category: 'projects',
      title: 'Search and Rescue Drone',
      date: 'November 15, 2023',
      location: 'Field Testing',
      description: 'Testing our search and rescue drone in simulated emergency scenarios'
    },
    {
      id: 6,
      type: 'image',
      category: 'events',
      title: 'Tech Talk by Industry Expert',
      date: 'October 8, 2023',
      location: 'Auditorium',
      description: 'Insightful session on the future of drone technology in various industries'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing moments from our drone adventures, events, and innovations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background border border-border hover:bg-muted'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="card-tech group hover-glow cursor-pointer"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 overflow-hidden">
                {/* Placeholder for actual images/videos */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.type === 'video' && (
                    <div className="p-4 bg-background/80 rounded-full">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                  )}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">{item.description}</p>
                
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs capitalize">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-tech inline-block">
            <h3 className="text-xl font-semibold mb-2">Share Your Moments</h3>
            <p className="text-muted-foreground mb-4">
              Have photos or videos from our events? We'd love to feature them!
            </p>
            <p className="text-sm text-muted-foreground">
              Send your submissions to <span className="text-primary">gallery@aeroforce.club</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;