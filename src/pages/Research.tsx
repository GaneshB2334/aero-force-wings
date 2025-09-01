import { Target, Zap, Users, Settings } from 'lucide-react';

const Research = () => {
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

   const  currentProjects = [
    {
      year:'AY 25-26',
      title:'Agriculture Drone for crop monitoring',
      name: 'Dipak Reddy , Aniket Shrungare , Pratik Mane , Manmath Minke ',
      batch: '2022-2026',
      image: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668708/IMG-20250901-WA0035_nwtrqw.jpg',
      image1: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668699/IMG-20250901-WA0024_fbqiak.jpg',
      image2: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668698/IMG-20250901-WA0022_jomt7t.jpg',
      image3: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668701/IMG-20250901-WA0027_aprtfr.jpg',
      image4: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668695/IMG-20250901-WA0013_bhmxlh.jpg',
      image5: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668703/IMG-20250901-WA0029_gatwok.jpg',
    },{
      year:'AY 25-26',
      title:'Precision agriculture solution using computer vision and machine learning for crop monitoring',
      name: 'Abhijeet Hulge , Prashant Pawar , Omkar Mane Deshmukh ',
      batch: '2022-2026',
      image: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756668704/IMG-20250901-WA0030_qderbb.jpg',
      image1: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756737450/IMG-20250901-WA0132_1_cvevd7.jpg',
      image2: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756737430/IMG-20250901-WA0122_1_iebrqi.jpg',
      image3: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756737168/IMG-20250901-WA0107_1_uu0yu9.jpg',
      image4: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756737450/IMG-20250901-WA0132_1_cvevd7.jpg',
      image5: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756737499/IMG-20250901-WA0125_1_ipj257.jpg',
    },
    
  ];

    const PastProjects = [
     {
      year:'AY 24-25',
      title:'Autopilot Security Patrolling Drone',
      name: 'AYUSH SURAJ GOUD , ANISH DIGAMBAR MUDKANNA , PURVANSHU PRAVIN KALAL',
      image: ''
    },
     {
      year:'AY 23-24',
      title:'Underwater unmanned vehicle',
      name: 'SURYAWANSHI AAKANKSHA SANJAY , SABLE SUDARSHAN SHYAM',
      image: ''
    },
     {
      year:'AY 22-23',
      title:'TOPOLOGICAL SURVEY USING LIDAR MOTION DRONE',
      name: 'Jawahar Uttam Suryawanshi, Shreyash Umesh Gade , Shivam Deepak Ambekar',
      image: 'https://res.cloudinary.com/dinhdwh2y/image/upload/v1756735007/6_hdvccu.png'
    },
     {
      year:'AY 21-22',
      title:'Antidrone System',
      name: 'Raman Dattu Kale, Amit Bapurao Gajbhare , Abhijeet Manohar Khanjode',
      image: ''
    },
     {
      year:'AY 21-22',
      title:'Social Distancing and Mask Monitoring Drone',
      studentnames: 'Kishorkumar Kartikchandra Das, Pawan Chabban Gadekar , Niket Naresh Rathod',
      image: ''
    },
    ]
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
        <section className="py-16 bg-background-secondary rounded-2xl">
          <div className="px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Current Projects</h2>
            <div className="space-y-8">
              <div className="card-tech">
                <h3 className="text-xl font-semibold mb-4">Agriculture Drone</h3>
                <p className="text-muted-foreground mb-4">
                  Agriculture Drone for crop monitoring
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Agriculture</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Emergency Response</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">IoT</span>
                </div>
              </div>

              <div className="card-tech">
                <h3 className="text-xl font-semibold mb-4">Survelliance Drone</h3>
                <p className="text-muted-foreground mb-4">
                  Precision agriculture solution using computer vision and machine learning for crop monitoring.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Agriculture</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Computer Vision</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">ML</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Research;