import { Trophy, Star, Users, TrendingUp, Calendar } from 'lucide-react';

const SuccessStories = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'National Drone Championship 2024',
      subtitle: 'First Place - Autonomous Navigation',
      description: 'Our team secured first place in the national autonomous drone navigation competition.',
      impact: 'Recognition as one of India\'s top college drone teams',
      date: 'March 2024'
    },
    {
      icon: Star,
      title: 'Innovation Award',
      subtitle: 'Best Student Project - IEEE Conference',
      description: 'Our agricultural monitoring drone won the best student project award at IEEE ICRA.',
      impact: 'Published research and industry partnerships',
      date: 'February 2024'
    },
    {
      icon: Users,
      title: 'Industry Collaboration',
      subtitle: 'Partnership with TechCorp Drones',
      description: 'Successful collaboration led to internship opportunities for 15 students.',
      impact: '15 students placed in leading drone companies',
      date: 'January 2024'
    }
  ];

  const studentSuccess = [
    {
      name: 'Rahul Sharma',
      batch: '2024',
      position: 'Drone Engineer at SkyTech Solutions',
      story: 'Started as a beginner in AeroForce, now leading autonomous systems development at a major drone company.',
      image: '👨‍💻'
    },
    {
      name: 'Priya Patel',
      batch: '2023',
      position: 'Research Scientist at AI Robotics Lab',
      story: 'Her research on swarm intelligence, developed during club projects, is now being used in commercial applications.',
      image: '👩‍🔬'
    },
    {
      name: 'Amit Kumar',
      batch: '2023',
      position: 'Founder of AgroDrone Startup',
      story: 'Launched his own agricultural drone startup based on projects developed in AeroForce.',
      image: '👨‍💼'
    },
    {
      name: 'Sneha Reddy',
      batch: '2024',
      position: 'PhD Scholar at IIT Delhi',
      story: 'Pursuing advanced research in drone technology, building on the foundation from AeroForce.',
      image: '👩‍🎓'
    }
  ];

  const milestones = [
    { year: '2019', achievement: 'Club Founded', description: 'AeroForce Drone Club established' },
    { year: '2020', achievement: 'First Competition Win', description: 'Regional drone racing championship' },
    { year: '2021', achievement: '50+ Members', description: 'Reached milestone of 50 active members' },
    { year: '2022', achievement: 'Industry Partnership', description: 'First major industry collaboration' },
    { year: '2023', achievement: 'Research Publication', description: 'Published first research paper' },
    { year: '2024', achievement: 'National Recognition', description: 'Won national-level competition' }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Success Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Celebrating achievements, milestones, and the success of our community
          </p>
        </div>

        {/* Key Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Achievements</h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="card-tech group hover-glow"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start space-x-6">
                  <div className="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <achievement.icon className="h-10 w-10 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-semibold">{achievement.title}</h3>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg text-primary mb-3">{achievement.subtitle}</h4>
                    <p className="text-muted-foreground mb-4">{achievement.description}</p>
                    
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{achievement.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Student Success Stories */}
        <section className="py-16 bg-background-secondary rounded-2xl mb-16">
          <div className="px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Alumni Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {studentSuccess.map((student, index) => (
                <div 
                  key={index}
                  className="card-tech"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{student.image}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{student.name}</h3>
                      <p className="text-primary font-medium mb-2">{student.position}</p>
                      <p className="text-sm text-muted-foreground mb-3">Batch of {student.batch}</p>
                      <p className="text-muted-foreground">{student.story}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  style={{animationDelay: `${index * 0.2}s`}}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card-tech">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold mb-2">{milestone.achievement}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="card-tech inline-block max-w-2xl">
            <h3 className="text-2xl font-semibold mb-4">Be Part of Our Success Story</h3>
            <p className="text-muted-foreground mb-6">
              Join AeroForce and create your own success story. Whether you're interested in research, 
              competitions, or industry collaboration, we provide the platform for your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-hero inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors">
                Join Our Community
              </a>
              <a href="/events" className="btn-secondary inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors">
                View Upcoming Events
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;