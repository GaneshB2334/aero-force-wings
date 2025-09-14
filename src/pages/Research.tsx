import { Target, Zap, Users, Settings, X, Image as ImageIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Research = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState(null);
  const [fullScreenImageOpen, setFullScreenImageOpen] = useState(false);
  const researchAreas = [
    {
      icon: Target,
      title: 'Autonomous Navigation',
      description: 'Developing AI-powered navigation systems for unmanned aerial vehicles in complex environments.'
    },
    {
      icon: Zap,
      title: 'Energy Efficiency',
      description: 'Research on battery optimization and solar-powered drone solutions for extended flight times.'
    },
    {
      icon: Users,
      title: 'Swarm Intelligence',
      description: 'Multi-drone coordination and swarm behavior algorithms for collaborative missions.'
    },
    {
      icon: Settings,
      title: 'Sensor Integration',
      description: 'Advanced sensor fusion techniques for improved perception and data collection capabilities.'
    }
  ];

  const allProjects = [
    {
      year: 'AY 25-26',
      title: 'Agriculture Drone for crop monitoring',
      name: 'Dipak Reddy , Aniket Shrungare , Pratik Mane , Manmath Minke ',
      batch: '2022-2026',
      status: 'current',
      images: [
        'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668708/IMG-20250901-WA0035_nwtrqw.jpg',
        'https://res.cloudinary.com/dinhdwh2y/image/upload/v1757858622/IMG-20250901-WA0022_r1iija.jpg',
        'https://res.cloudinary.com/dinhdwh2y/image/upload/v1757858621/IMG-20250901-WA0033_bjel4h.jpg',
        'https://res.cloudinary.com/dinhdwh2y/image/upload/v1757858620/IMG-20250901-WA0024_nlksb7.jpg',
        'https://res.cloudinary.com/dinhdwh2y/image/upload/v1757858619/IMG-20250901-WA0027_hhrodh.jpg',
        'https://res.cloudinary.com/dinhdwh2y/image/upload/v1757858620/IMG-20250901-WA0028_eg3fgm.jpg',
        'https://res.cloudinary.com/dinhdwh2y/image/upload/v1757858617/IMG-20250901-WA0014_qik32b.jpg',
        
      ].filter(Boolean),
      tags: ['Agriculture', 'Computer Vision', 'Mission Planner', 'Machine Learning']
    },
    {
      year: 'AY 25-26',
      title: 'Precision agriculture solution using computer vision and machine learning for crop monitoring',
      name: 'Abhijeet Hulge , Prashant Pawar , Omkar Mane Deshmukh ',
      batch: '2022-2026',
      status: 'current',
      images: [
        'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756737450/IMG-20250901-WA0132_1_cvevd7.jpg',
        'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756737430/IMG-20250901-WA0122_1_iebrqi.jpg',
        'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756737168/IMG-20250901-WA0107_1_uu0yu9.jpg',
        'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756737450/IMG-20250901-WA0132_1_cvevd7.jpg',
        'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756737499/IMG-20250901-WA0125_1_ipj257.jpg'
      ].filter(Boolean),
      tags: ['Agriculture', 'Computer Vision', 'IoT', 'Mission Planner']
    },
    {
      year: 'AY 24-25',
      title: 'Autopilot Security Patrolling Drone',
      name: 'AYUSH SURAJ GOUD , ANISH DIGAMBAR MUDKANNA , PURVANSHU PRAVIN KALAL',
      status: 'past',
      images: [],
      tags: ['Security', 'Autopilot', 'Surveillance']
    },
    {
      year: 'AY 23-24',
      title: 'Underwater unmanned vehicle',
      name: 'SURYAWANSHI AAKANKSHA SANJAY , SABLE SUDARSHAN SHYAM',
      status: 'past',
      images: [],
      tags: ['Underwater', 'ROV', 'Marine Technology']
    },
    {
      year: 'AY 22-23',
      title: 'TOPOLOGICAL SURVEY USING LIDAR MOTION DRONE',
      name: 'Jawahar Uttam Suryawanshi, Shreyash Umesh Gade , Shivam Deepak Ambekar',
      status: 'past',
      images: ['https://res.cloudinary.com/dinhdwh2y/image/upload/v1756735007/6_hdvccu.png'].filter(Boolean),
      tags: ['LIDAR', 'Survey', 'Mapping', '3D Modeling']
    },
    {
      year: 'AY 21-22',
      title: 'Antidrone System',
      name: 'Raman Dattu Kale, Amit Bapurao Gajbhare , Abhijeet Manohar Khanjode',
      status: 'past',
      images: [],
      tags: ['Defense', 'Counter-UAV', 'Security']
    },
    {
      year: 'AY 21-22',
      title: 'Social Distancing and Mask Monitoring Drone',
      name: 'Kishorkumar Kartikchandra Das, Pawan Chabban Gadekar , Niket Naresh Rathod',
      status: 'past',
      images: [],
      tags: ['Health Monitoring', 'AI Detection', 'Public Safety']
    }
  ];

  const currentProjects = allProjects.filter(project => project.status === 'current');
  const pastProjects = allProjects.filter(project => project.status === 'past');

  const openImageModal = (project) => {
    setSelectedProject(project);
    setImageModalOpen(true);
  };

  const closeImageModal = () => {
    setImageModalOpen(false);
    setSelectedProject(null);
  };

  const openFullScreenImage = (imageSrc) => {
    setFullScreenImage(imageSrc);
    setFullScreenImageOpen(true);
  };

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
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Research</span> Areas
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring cutting-edge drone technologies and pushing the boundaries of innovation
          </p>
        </div>

        {/* Research Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <div
              key={area.title}
              className="card-tech group hover-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Current Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Current</span> Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentProjects.map((project, index) => (
              <div
                key={index}
                className="card-tech group hover-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-6">
                  {/* Project Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {project.year}
                      </span>
                      <span className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-sm">
                        Batch: {project.batch}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      Team: {project.name}
                    </p>
                  </div>

                  {/* Project Images Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {project.images.slice(0, 6).map((image, imgIndex) => (
                      <div key={imgIndex} className="aspect-square rounded-lg overflow-hidden bg-secondary/20">
                        <img
                          src={image}
                          alt={`${project.title} - Image ${imgIndex + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                          onClick={() => openImageModal(project)}
                        />
                      </div>
                    ))}
                    {project.images.length === 0 && (
                      <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center col-span-3">
                        <Target className="h-12 w-12 text-primary/40" />
                      </div>
                    )}
                  </div>

                  {/* Project Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-sm ${
                          tagIndex % 4 === 0 ? 'bg-green-500/10 text-green-500' :
                          tagIndex % 4 === 1 ? 'bg-blue-500/10 text-blue-500' :
                          tagIndex % 4 === 2 ? 'bg-purple-500/10 text-purple-500' :
                          'bg-orange-500/10 text-orange-500'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Projects */}
        <section className="py-16 bg-secondary/5 rounded-2xl">
          <div className="px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-gradient">Past</span> Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastProjects.map((project, index) => (
                <div
                  key={index}
                  className="card-tech group hover-glow cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openImageModal(project)}
                >
                  <div className="space-y-4">
                    {/* Project Image */}
                    {project.images.length > 0 ? (
                      <div className="aspect-video rounded-lg overflow-hidden bg-secondary/20">
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                        <Target className="h-12 w-12 text-primary/40" />
                      </div>
                    )}

                    {/* Project Info */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {project.year}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground font-medium">Team Members:</p>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {project.name}
                        </p>
                      </div>
                      
                      {/* Project Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className={`px-2 py-1 rounded-full text-xs ${
                              tagIndex % 4 === 0 ? 'bg-green-500/10 text-green-500' :
                              tagIndex % 4 === 1 ? 'bg-blue-500/10 text-blue-500' :
                              tagIndex % 4 === 2 ? 'bg-purple-500/10 text-purple-500' :
                              'bg-orange-500/10 text-orange-500'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Status */}
                    <div className="pt-2 border-t border-border/50">
                      <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm">
                        Completed
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {imageModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={closeImageModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{selectedProject.title}</h3>
                <button
                  onClick={closeImageModal}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              {selectedProject.images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedProject.images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg overflow-hidden cursor-pointer group"
                    >
                      <img
                        src={image}
                        alt={`${selectedProject.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onClick={() => openFullScreenImage(image)}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <ImageIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No images available for this project</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Screen Image */}
      <AnimatePresence>
        {fullScreenImageOpen && fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[100] flex items-center justify-center p-4"
            onClick={closeFullScreenImage}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <img
                src={fullScreenImage}
                alt="Full screen view"
                className="w-auto h-auto"
                style={{
                  maxWidth: 'calc(100vw - 2rem)',
                  maxHeight: 'calc(100vh - 2rem)',
                  objectFit: 'contain'
                }}
                onClick={e => e.stopPropagation()}
              />
              <button
                onClick={closeFullScreenImage}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-lg transition-colors text-white"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Research;