import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHome ? 'bg-transparent' : 'bg-black/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className={`text-2xl font-serif ${
            isHome ? 'opacity-0' : 'text-white'
          }`}>
            Luscinia
          </Link>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-white hover:text-green-400 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
      
      <Navigation isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}