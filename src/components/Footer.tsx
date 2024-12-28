import React from 'react';
import { Youtube, Twitter, Twitch, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const socialLinks = [
    { icon: <Youtube size={20} />, label: 'YouTube', href: '#' },
    { icon: <Twitter size={20} />, label: 'Twitter', href: '#' },
    { icon: <Twitch size={20} />, label: 'Twitch', href: '#' },
    { icon: <Music2 size={20} />, label: 'Spotify', href: '#' },
  ];

  return (
    <footer className="bg-black/90 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-serif mb-4">Luscinia</h3>
            <p className="text-gray-400">Nature-inspired music composition</p>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-gray-400 hover:text-green-400 transition-colors">Home</Link>
              <Link to="/music" className="text-gray-400 hover:text-green-400 transition-colors">Music</Link>
              <Link to="/about" className="text-gray-400 hover:text-green-400 transition-colors">About</Link>
              <Link to="/contact" className="text-gray-400 hover:text-green-400 transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Contact</h4>
            <p className="text-gray-400">Email: contact@luscinia.com</p>
          </div>
          
          <div>
            <h4 className="text-lg mb-4">Social</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Luscinia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}