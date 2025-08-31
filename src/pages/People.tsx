import { Badge } from '@/components/ui/badge';
import { Mail, Linkedin, Github } from 'lucide-react';

const People = () => {
  const faculty = [
    {
      name: 'Dr. Sandeep Hanwate',
      role: 'Faculty Coordinator',
      department: 'Electronics & Telecommunication',
      email: 'sandeep.hanwate@raisoni.net',
      image: 'https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=X9XdNlIAAAAJ&citpid=5',
      bio: 'Leading research in UAV technology and autonomous systems.'
    },
  ];

  const students = [
    {
      name: 'Dipak Reddy',
      role: 'President',
      year: 'Final Year',
      branch: 'Electronics Engineering',
      email: 'dipakreddy2628@gmail.com',
      linkedin: '#',
      github: 'https://github.com/Reddy2628',
      image: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756670188/passphoto_uxeck9.jpg',
      skills: ['Drone Design', 'Flight Controller', 'Leadership'],
      projects: 3
    },
    {
      name: 'Shantanu Deshmukh',
      role: 'Vice President',
      year: 'Second Year',
      branch: 'Electronics Engineering',
      email: '#',
      linkedin: '#',
      github: '#',
      image: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756666160/WhatsApp_Image_2025-08-31_at_23.58.52_84600df6_kxkcgr.jpg',
      skills: ['PCB Design', 'Embedded Systems', 'IoT'],
      projects: 6
    },
    {
      name: 'Aniket Shrungare',
      role: 'Technical Lead',
      year: 'Final Year',
      branch: 'Electronics Engineering',
      email: 'aniketshrungare269@gmail.com',
      linkedin: '#',
      github: '#',
      image: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756666658/WhatsApp_Image_2025-09-01_at_00.24.04_0cdb26cf_xtwtvq.jpg',
      skills: ['AI/ML', 'Computer Vision', 'Programming'],
      projects: 5
    },
    {
      name: 'Pratik Mane',
      role: 'Hardware Lead',
      year: 'Final Year',
      branch: 'Electronics Engineering',
      email: 'pratikmane4343@gmail.com',
      linkedin: '#',
      github: '#',
      image: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756666717/blank-profile-picture-973460_1280_spkkbe.webp',
      skills: ['CAD Design', 'Manufacturing', '3D Printing'],
      projects: 4
    },
    {
      name: 'Manmath Minke',
      role: 'Events Coordinator',
      year: 'Final Year',
      branch: 'Electronics Engineering',
      email: 'manmathminke2004@gmail.com',
      linkedin: '#',
      github: '#',
      image: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756666229/WhatsApp_Image_2025-08-31_at_23.58.29_c8b5ae46_f5hup2.jpg',
      skills: ['Event Management', 'Communications', 'Marketing'],
      projects: 2
    },
    {
      name: 'Rehan Patel',
      role: 'Software Team Lead',
      year: 'Second Year',
      branch: 'Electronics Engineering',
      email: 'rehansheikh.etc@gmail.com',
      linkedin: '#',
      github: '#',
      image: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756666126/WhatsApp_Image_2025-08-31_at_22.48.43_32ae20a0_jbxvgu.jpg',
      skills: ['Python', 'ROS', 'Machine Learning'],
      projects: 4
    }, {
      name: 'Apurva Palamkar',
      role: 'Software Team Lead',
      year: 'Third Year',
      branch: 'Electronics Engineering',
      email: 'apurvapalamkar@gmail.com',
      linkedin: '#',
      github: '#',
      image: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756666395/WhatsApp_Image_2025-08-31_at_08.49.36_5dcd36fb_noh5kv.jpg',
      skills: ['Python', 'ROS', 'Machine Learning'],
      projects: 4
    }, {
      name: 'Shreya Bhoyar',
      role: 'Software Team Lead',
      year: 'Third Year',
      branch: 'Electronics Engineering',
      email: 'shreya.bhoyar.etc@ghrcem.raisoni.net',
      linkedin: '#',
      github: '#',
      image: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756666717/blank-profile-picture-973460_1280_spkkbe.webp',
      skills: ['Python', 'ROS', 'Machine Learning'],
      projects: 4
    }, {
      name: 'Abhijeet Hulge',
      role: 'Club Member',
      year: 'Final Year',
      branch: 'Electronics Engineering',
      email: '#',
      linkedin: '#',
      github: '#',
      image: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756666717/blank-profile-picture-973460_1280_spkkbe.webp',
      skills: ['Python', 'ROS', 'Machine Learning'],
      projects: 4
    }, {
      name: 'Prashant Pawar',
      role: 'Club Member',
      branch: 'Electronics Engineering',
      email: '#',
      linkedin: '#',
      github: '#',
      image: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756666717/blank-profile-picture-973460_1280_spkkbe.webp',
      skills: ['Python', 'ROS', 'Machine Learning'],
      projects: 4
    }, {
      name: 'Omkar Mane',
      role: 'Club Member',
      year: 'Final Year',
      branch: 'Electronics Engineering',
      email: '#',
      linkedin: '#',
      github: '#',
      image: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756666717/blank-profile-picture-973460_1280_spkkbe.webp',
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
          <div className="max-w-lg mx-auto">
            {faculty.map((member, index) => (
              <div
                key={member.name}
                className="card-tech text-center space-y-4 hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                style={{ animationDelay: `${index * 0.1}s` }}
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