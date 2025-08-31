import { ArrowRight, Zap, Users, Calendar, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: Target,
      title: 'Innovation Focus',
      description: 'Pushing the boundaries of drone technology and applications'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'A passionate group of students and mentors working together'
    },
    {
      icon: Zap,
      title: 'Hands-on Learning',
      description: 'Practical workshops, competitions, and real-world projects'
    },
    {
      icon: Calendar,
      title: 'Regular Events',
      description: 'Workshops, competitions, and tech talks throughout the year'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dinhdwh2y/image/upload/v1756665128/WhatsApp_Image_2025-08-31_at_23.57.15_dc11e692_nev680.jpg" 
            alt="AeroForce Drone" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-gradient">AeroForce</span>
                <br />
                <span className="text-foreground">Drone Club</span>
                <br />
                <span className=''>GHRCEM, Pune</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                "Engineering the skies"
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/events">
                <Button className="btn-hero group">
                  Explore Our Events
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/people">
                <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-accent rounded-full animate-float opacity-40" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-primary/60 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">What We Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us in exploring the limitless possibilities of drone technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="card-tech group hover-glow"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="space-y-4">
                  <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">About AeroForce</h2>
              <p className="text-lg text-muted-foreground">
                AeroForce Drone Club is a student-driven community at GHRCEM dedicated to advancing 
                drone technology and fostering innovation. We bring together passionate individuals 
                who share a vision of transforming the aerospace industry.
              </p>
              <p className="text-lg text-muted-foreground">
                Through hands-on workshops, competitions, and collaborative projects, we provide 
                students with practical experience in drone design, programming, and applications 
                across various industries.
              </p>
              <Link to="/contact">
                <Button className="btn-hero">
                  Join Our Community
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="card-tech p-8 text-center space-y-4">
                <div className="text-4xl font-bold text-gradient">20+</div>
                <p className="text-muted-foreground">Active Members</p>
              </div>
              <div className="absolute -top-4 -right-4 card-tech p-6 text-center space-y-2">
                <div className="text-3xl font-bold text-gradient">5+</div>
                <p className="text-sm text-muted-foreground">Events Held</p>
              </div>
              <div className="absolute -bottom-4 -left-4 card-tech p-6 text-center space-y-2">
                <div className="text-3xl font-bold text-gradient">5+</div>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;