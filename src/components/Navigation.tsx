import React from 'react';
import { X, Home, Music, User, Mail, Youtube, Twitter, Twitch, Music2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Navigation({ isOpen, onClose }: NavigationProps) {
  const menuItems = [
    { icon: <Home size={24} />, label: 'Home', path: '/' },
    { icon: <Music size={24} />, label: 'Music', path: '/music' },
    { icon: <User size={24} />, label: 'About', path: '/about' },
    { icon: <Mail size={24} />, label: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <Youtube size={20} />, label: 'YouTube', href: '#' },
    { icon: <Twitter size={20} />, label: 'Twitter', href: '#' },
    { icon: <Twitch size={20} />, label: 'Twitch', href: '#' },
    { icon: <Music2 size={20} />, label: 'Spotify', href: '#' },
  ];

  return (
    <div className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-50 transition-transform duration-500 ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="container mx-auto px-4 h-full flex flex-col">
        <div className="flex justify-end pt-6">
          <button
            onClick={onClose}
            className="text-white hover:text-green-400 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="flex-1 flex flex-col justify-center items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className="flex items-center gap-4 text-white hover:text-green-400 transition-colors text-2xl"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        
        <div className="py-8 flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition-colors"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}