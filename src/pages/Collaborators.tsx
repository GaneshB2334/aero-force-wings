import { Building, Users, Handshake, ExternalLink, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Collaborators = () => {
  const industryPartners = [
    {
      name: 'SkyTech Innovations',
      type: 'Industry Partner',
      description: 'Leading drone manufacturer providing cutting-edge technology and mentorship.',
      collaboration: 'Joint research projects, internship programs, and technical workshops.',
      since: '2022'
    },
    {
      name: 'AgroVision Systems',
      type: 'Startup Partner',
      description: 'Agricultural drone solutions company supporting precision farming initiatives.',
      collaboration: 'Field testing opportunities and real-world project development.',
      since: '2023'
    },
    {
      name: 'DefTech Aerospace',
      type: 'Defense Partner',
      description: 'Defense technology company focusing on autonomous systems and surveillance.',
      collaboration: 'Research collaboration and advanced technology access.',
      since: '2023'
    }
  ];

  const academicPartners = [
    {
      name: 'IIT Bombay',
      department: 'Aerospace Engineering',
      description: 'Research collaboration on autonomous navigation systems.',
      projects: ['Multi-drone coordination', 'AI-based flight control'],
      since: '2021'
    },
    {
      name: 'ISRO',
      department: 'Space Applications Centre',
      description: 'Joint research on satellite-guided drone navigation systems.',
      projects: ['GPS-free navigation', 'Space technology integration'],
      since: '2022'
    },
    {
      name: 'MIT Boston',
      department: 'Computer Science',
      description: 'Exchange program for advanced robotics and AI research.',
      projects: ['Machine learning algorithms', 'Swarm intelligence'],
      since: '2023'
    }
  ];

  const governmentPartners = [
    {
      name: 'Ministry of Electronics & IT',
      program: 'Digital India Initiative',
      description: 'Supporting drone technology development under Digital India mission.',
      support: 'Funding and policy guidance',
      since: '2022'
    },
    {
      name: 'Maharashtra Innovation Society',
      program: 'Student Innovation Program',
      description: 'State government support for innovative student projects.',
      support: 'Grants and infrastructure',
      since: '2021'
    }
  ];

  const partnershipTypes = [
    {
      icon: Building,
      title: 'Industry Partnerships',
      count: industryPartners.length,
      description: 'Collaborations with leading companies in drone technology'
    },
    {
      icon: Users,
      title: 'Academic Alliances',
      count: academicPartners.length,
      description: 'Research partnerships with prestigious institutions'
    },
    {
      icon: Handshake,
      title: 'Government Support',
      count: governmentPartners.length,
      description: 'Official backing from government organizations'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Collaborators</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building strong partnerships with industry leaders, academic institutions, and government organizations
          </p>
        </div>

        {/* Partnership Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {partnershipTypes.map((type, index) => (
            <div 
              key={index}
              className="card-tech text-center group hover-glow"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <type.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">{type.count}+</div>
              <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
              <p className="text-muted-foreground">{type.description}</p>
            </div>
          ))}
        </div>

        {/* Industry Partners */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Industry Partners</h2>
          <div className="space-y-6">
            {industryPartners.map((partner, index) => (
              <div 
                key={index}
                className="card-tech group hover-glow"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{partner.name}</h3>
                    <span className="text-primary font-medium">{partner.type}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Since {partner.since}</span>
                </div>
                
                <p className="text-muted-foreground mb-4">{partner.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Collaboration Areas:</h4>
                  <p className="text-sm text-muted-foreground">{partner.collaboration}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Partners */}
        <section className="py-16 bg-background-secondary rounded-2xl mb-16">
          <div className="px-8">
            <h2 className="text-3xl font-bold mb-8">Academic Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {academicPartners.map((partner, index) => (
                <div 
                  key={index}
                  className="card-tech"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <h3 className="text-lg font-semibold mb-2">{partner.name}</h3>
                  <p className="text-primary text-sm mb-3">{partner.department}</p>
                  <p className="text-muted-foreground text-sm mb-4">{partner.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Active Projects:</h4>
                    <ul className="space-y-1">
                      {partner.projects.map((project, projectIndex) => (
                        <li key={projectIndex} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">Partnership since {partner.since}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Government Support */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Government Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {governmentPartners.map((partner, index) => (
              <div 
                key={index}
                className="card-tech group hover-glow"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{partner.name}</h3>
                    <span className="text-primary font-medium">{partner.program}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Since {partner.since}</span>
                </div>
                
                <p className="text-muted-foreground mb-4">{partner.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-medium">Support Provided:</h4>
                  <p className="text-sm text-muted-foreground">{partner.support}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="text-center">
          <div className="card-tech inline-block max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Interested in collaborating with AeroForce Drone Club? We're always looking for 
              new partnerships that can benefit our students and advance drone technology.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h4 className="font-semibold mb-2">What We Offer:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Talented and motivated students</li>
                  <li>• Research and development capabilities</li>
                  <li>• Access to latest academic research</li>
                  <li>• Innovation and fresh perspectives</li>
                </ul>
              </div>
              
              <div className="text-left">
                <h4 className="font-semibold mb-2">Partnership Types:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Research collaboration</li>
                  <li>• Internship programs</li>
                  <li>• Technology sponsorship</li>
                  <li>• Joint workshops and events</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero">
                <Mail className="mr-2 h-5 w-5" />
                Contact for Partnership
              </Button>
              <Button variant="outline">
                <ExternalLink className="mr-2 h-5 w-5" />
                Download Partnership Brochure
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collaborators;