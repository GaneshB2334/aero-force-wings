import { Badge } from '@/components/ui/badge';
import { Mail, Linkedin, Github } from 'lucide-react';

const People = () => {
  const faculty = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Faculty Coordinator',
      department: 'Electronics & Telecommunication',
      email: 'rajesh.kumar@ghrcem.edu.in',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces',
      bio: 'Leading research in UAV technology and autonomous systems.'
    },
    {
      name: 'Prof. Priya Sharma',
      role: 'Co-Coordinator',
      department: 'Computer Engineering',
      email: 'priya.sharma@ghrcem.edu.in',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=300&h=300&fit=crop&crop=faces',
      bio: 'Expert in drone programming and AI applications.'
    }
  ];

  const students = [
    {
      name: 'Arjun Patel',
      role: 'President',
      year: 'Final Year',
      branch: 'Electronics Engineering',
      email: 'arjun.patel@student.ghrcem.edu.in',
      linkedin: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces',
      skills: ['Drone Design', 'Flight Controller', 'Leadership'],
      projects: 3
    },
    {
      name: 'Sneha Reddy',
      role: 'Vice President',
      year: 'Third Year',
      branch: 'Computer Engineering',
      email: 'sneha.reddy@student.ghrcem.edu.in',
      linkedin: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces',
      skills: ['AI/ML', 'Computer Vision', 'Programming'],
      projects: 5
    },
    {
      name: 'Rohit Singh',
      role: 'Technical Lead',
      year: 'Third Year',
      branch: 'Mechanical Engineering',
      email: 'rohit.singh@student.ghrcem.edu.in',
      linkedin: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces',
      skills: ['CAD Design', 'Manufacturing', '3D Printing'],
      projects: 4
    },
    {
      name: 'Ananya Joshi',
      role: 'Events Coordinator',
      year: 'Second Year',
      branch: 'Electronics Engineering',
      email: 'ananya.joshi@student.ghrcem.edu.in',
      linkedin: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop&crop=faces',
      skills: ['Event Management', 'Communications', 'Marketing'],
      projects: 2
    },
    {
      name: 'Vikram Gupta',
      role: 'Hardware Team Lead',
      year: 'Final Year',
      branch: 'Electronics Engineering',
      email: 'vikram.gupta@student.ghrcem.edu.in',
      linkedin: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=300&fit=crop&crop=faces',
      skills: ['PCB Design', 'Embedded Systems', 'IoT'],
      projects: 6
    },
    {
      name: 'Kavya Mehta',
      role: 'Software Team Lead',
      year: 'Third Year',
      branch: 'Computer Engineering',
      email: 'kavya.mehta@student.ghrcem.edu.in',
      linkedin: '#',
      github: '#',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=faces',
      skills: ['Python', 'ROS', 'Machine Learning'],
      projects: 4
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-5xl font-bold">
            Meet Our <span className="text-gradient">Team</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The passionate individuals driving innovation in drone technology at GHRCEM
          </p>
        </div>

        {/* Faculty Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Faculty Coordinators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faculty.map((member, index) => (
              <div 
                key={member.name}
                className="card-tech text-center space-y-4 hover-glow"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative mx-auto w-32 h-32">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-primary/20"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20"></div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.department}</p>
                  <p className="text-sm text-muted-foreground italic">{member.bio}</p>
                </div>
                <div className="flex justify-center">
                  <a
                    href={`mailto:${member.email}`}
                    className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Students Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Student Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {students.map((member, index) => (
              <div 
                key={member.name}
                className="card-tech space-y-4 hover-glow"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start space-x-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-2 border-primary/20"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold">{member.name}</h3>
                    <p className="text-primary font-medium text-sm">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.year} • {member.branch}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-2">Skills</p>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{member.projects} Projects</span>
                    <div className="flex space-x-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="p-1 hover:text-primary transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                      <a
                        href={member.linkedin}
                        className="p-1 hover:text-blue-400 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={member.github}
                        className="p-1 hover:text-foreground transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join Section */}
        <section className="mt-20 text-center">
          <div className="card-tech max-w-2xl mx-auto p-8 space-y-4">
            <h3 className="text-2xl font-bold">Want to Join Our Team?</h3>
            <p className="text-muted-foreground">
              We're always looking for passionate students interested in drone technology, 
              programming, design, and innovation.
            </p>
            <a href="/contact" className="inline-block">
              <button className="btn-hero">Get In Touch</button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default People;