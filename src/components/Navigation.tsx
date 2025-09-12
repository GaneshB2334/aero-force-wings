import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'People', path: '/people' },
    { name: 'Research', path: '/research' },
    { name: 'Publications', path: '/publications' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(()=>{
    const body = document.body;
    if (isOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
    return () => {
      body.style.overflow = 'auto';
    };
  },[isOpen])

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="">
              <img 
                className='h-32 w-32 md:h-40 md:w-40 translate-y-[25%] border border-muted-foreground rounded-full p-5 object-cover bg-transparent dark:invert transition-all duration-300' 
                src="https://res.cloudinary.com/dfuwsfjjc/image/upload/v1757702111/IMG_20250901_023930_638_3_vcj1vi.png" 
                alt="AeroForce Drone Club Logo" 
              />
            </div>
            {/* <div>
              <span className="text-xl font-bold text-gradient">AeroForce</span>
              <p className="text-xs text-muted-foreground -mt-1">Drone Club</p>
            </div> */}
          </Link>

          {/* Right side controls */}
          <div className="flex items-center space-x-">
            <ThemeToggle />
            
            {/* Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className=""
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Full Screen Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 h-screen w-screen bg-black/30 backdrop-blur-md z-50"
            onClick={() => setIsOpen(false)}
          >
            {/* Drawer Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                duration: 0.3 
              }}
              className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                {/* Drawer Header */}
                <div className="flex items-center justify-between p-6 border-b border-border/50">
                  <div className="flex items-center space-x-3">
                    <img 
                      className='h-12 w-12 object-cover bg-transparent dark:invert transition-all duration-300' 
                      src="https://res.cloudinary.com/dfuwsfjjc/image/upload/v1757702111/IMG_20250901_023930_638_3_vcj1vi.png" 
                      alt="AeroForce Logo" 
                    />
                    <div>
                      <h2 className="font-bold text-lg text-gradient">AeroForce</h2>
                      <p className="text-xs text-muted-foreground">Drone Club</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-muted/50"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <div className="p-3 md:py-6 md:px-6 md:space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-4 py-4 text-base font-medium rounded-lg transition-all duration-200 ${
                          isActive(item.path)
                            ? 'text-primary bg-primary/10 border-l-4 border-primary shadow-sm'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/50 hover:translate-x-1'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* Theme toggle and footer */}
                <div className="p-6 border-t border-border/50 space-y-4">
                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <span className="text-sm font-medium text-muted-foreground">Theme</span>
                    <ThemeToggle />
                  </div>
                  
                  <div className="text-center pt-2">
                    <p className="text-xs text-muted-foreground">
                      © 2025 AeroForce Drone Club
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
