import { Monitor, Code, Cpu, Cloud, Play, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VirtualLab = () => {
  const tools = [
    {
      icon: Monitor,
      title: 'Drone Simulator',
      description: 'Practice flying and test algorithms in a realistic virtual environment',
      status: 'Available',
      features: ['Physics simulation', 'Weather conditions', 'Multiple environments']
    },
    {
      icon: Code,
      title: 'Code Editor',
      description: 'Online IDE for drone programming with syntax highlighting and debugging',
      status: 'Available',
      features: ['Multi-language support', 'Real-time collaboration', 'Version control']
    },
    {
      icon: Cpu,
      title: 'AI Training Platform',
      description: 'Train and test machine learning models for autonomous navigation',
      status: 'Beta',
      features: ['GPU acceleration', 'Pre-trained models', 'Dataset management']
    },
    {
      icon: Cloud,
      title: 'Flight Data Analytics',
      description: 'Analyze flight logs and performance metrics with advanced visualization',
      status: 'Coming Soon',
      features: ['Real-time monitoring', 'Performance analytics', 'Predictive maintenance']
    }
  ];

  const tutorials = [
    {
      title: 'Getting Started with Drone Programming',
      duration: '45 min',
      level: 'Beginner',
      description: 'Learn the basics of drone control and programming fundamentals'
    },
    {
      title: 'Computer Vision for Drones',
      duration: '90 min',
      level: 'Intermediate',
      description: 'Implement object detection and tracking algorithms'
    },
    {
      title: 'Advanced Flight Control Systems',
      duration: '120 min',
      level: 'Advanced',
      description: 'Master autonomous navigation and mission planning'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Virtual Lab</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access cutting-edge tools and simulators for drone development and learning
          </p>
        </div>

        {/* Quick Access */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card-tech text-center">
            <Monitor className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Launch Simulator</h3>
            <p className="text-muted-foreground mb-6">
              Start practicing with our advanced drone flight simulator
            </p>
            <Button className="btn-hero group">
              <Play className="mr-2 h-5 w-5" />
              Launch Now
            </Button>
          </div>
          
          <div className="card-tech text-center">
            <Code className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Code Editor</h3>
            <p className="text-muted-foreground mb-6">
              Access our online IDE for drone programming and development
            </p>
            <Button className="btn-hero group">
              <Code className="mr-2 h-5 w-5" />
              Open Editor
            </Button>
          </div>
        </div>

        {/* Available Tools */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Available Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <div 
                key={tool.title}
                className="card-tech group hover-glow"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <tool.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    tool.status === 'Available' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : tool.status === 'Beta'
                      ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                      : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400'
                  }`}>
                    {tool.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                
                <ul className="space-y-2">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Tutorials */}
        <section className="py-16 bg-background-secondary rounded-2xl">
          <div className="px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Interactive Tutorials</h2>
            <div className="space-y-6">
              {tutorials.map((tutorial, index) => (
                <div key={index} className="card-tech flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-lg font-semibold">{tutorial.title}</h3>
                      <span className={`px-2 py-1 rounded text-xs ${
                        tutorial.level === 'Beginner' 
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : tutorial.level === 'Intermediate'
                          ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                          : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {tutorial.level}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{tutorial.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">Duration: {tutorial.duration}</p>
                  </div>
                  <Button variant="outline" className="ml-4">
                    Start Tutorial
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Download Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-tech text-center">
              <Download className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">SDK Package</h3>
              <p className="text-sm text-muted-foreground mb-4">Complete development kit for drone programming</p>
              <Button variant="outline" size="sm">Download</Button>
            </div>
            
            <div className="card-tech text-center">
              <Download className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Sample Code</h3>
              <p className="text-sm text-muted-foreground mb-4">Example projects and code snippets</p>
              <Button variant="outline" size="sm">Download</Button>
            </div>
            
            <div className="card-tech text-center">
              <Download className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Documentation</h3>
              <p className="text-sm text-muted-foreground mb-4">Comprehensive guides and API reference</p>
              <Button variant="outline" size="sm">Download</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default VirtualLab;