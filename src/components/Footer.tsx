import { Instagram, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/aeroforce_ghrcem',
      color: 'hover:text-pink-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#',
      color: 'hover:text-blue-400'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: '#',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <footer className="bg-background-secondary border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">AeroForce Drone Club</h3>
            <p className="text-muted-foreground">
              Pioneering drone technology and innovation at G.H. Raisoni College of Engineering and Management, Pune.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>GHRCEM, Pune, Maharashtra</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/people" className="text-muted-foreground hover:text-primary transition-colors">People</a></li>
              <li><a href="/events" className="text-muted-foreground hover:text-primary transition-colors">Events</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`p-3 bg-muted/20 rounded-lg transition-all hover:scale-110 ${social.color} hover:bg-muted/40`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>aeroforce@ghrcem.edu.in</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 AeroForce Drone Club, GHRCEM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;