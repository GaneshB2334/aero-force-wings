import { FileText, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Publications = () => {
  const publications = [
    {
      title: "Autonomous Drone Navigation in Urban Environments",
      authors: "John Doe, Jane Smith, AeroForce Team",
      journal: "IEEE Transactions on Robotics",
      year: "2024",
      type: "Journal",
      abstract: "This paper presents a novel approach to autonomous navigation for drones in complex urban environments using advanced computer vision and machine learning techniques."
    },
    {
      title: "Swarm Intelligence for Multi-Drone Coordination",
      authors: "Sarah Johnson, Mike Wilson, AeroForce Research Group",
      journal: "International Conference on Robotics and Automation",
      year: "2023",
      type: "Conference",
      abstract: "A comprehensive study on implementing swarm intelligence algorithms for coordinated multi-drone missions in various scenarios."
    },
    {
      title: "Energy-Efficient Drone Design for Extended Flight Operations",
      authors: "Alex Chen, Lisa Wang, AeroForce Innovation Lab",
      journal: "Journal of Unmanned Vehicle Systems",
      year: "2023",
      type: "Journal",
      abstract: "Research on optimizing drone energy consumption through aerodynamic improvements and battery management systems."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Publications</span> & Research
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our latest research contributions and academic publications in drone technology
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="card-tech text-center">
            <div className="text-4xl font-bold text-gradient mb-2">15+</div>
            <p className="text-muted-foreground">Published Papers</p>
          </div>
          <div className="card-tech text-center">
            <div className="text-4xl font-bold text-gradient mb-2">8</div>
            <p className="text-muted-foreground">Conference Presentations</p>
          </div>
          <div className="card-tech text-center">
            <div className="text-4xl font-bold text-gradient mb-2">3</div>
            <p className="text-muted-foreground">Patent Applications</p>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Recent Publications</h2>
          {publications.map((publication, index) => (
            <div 
              key={index}
              className="card-tech group hover-glow"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-primary" />
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {publication.type}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{publication.year}</span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {publication.title}
              </h3>
              
              <p className="text-muted-foreground mb-2">{publication.authors}</p>
              <p className="text-sm text-muted-foreground mb-4 italic">{publication.journal}</p>
              
              <p className="text-muted-foreground mb-4">{publication.abstract}</p>
              
              <Button variant="outline" className="group/btn">
                View Publication
                <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;