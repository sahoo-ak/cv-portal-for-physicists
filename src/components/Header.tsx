
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine which section is currently in view
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight && sectionId) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Research', href: '#research' },
    { name: 'Education', href: '#education' },
    { name: 'Publications', href: '#publications' },
    { name: 'Conferences', href: '#conferences' },
    { name: 'Experience', href: '#experience' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div>
            <a href="#home" className="text-xl font-serif font-medium">
              <span className={cn(
                "transition-colors",
                isScrolled ? "text-gray-900" : "text-gray-800"
              )}>
                PhD
              </span>
              <span className={cn(
                "transition-colors ml-1",
                isScrolled ? "text-gray-500" : "text-gray-600"
              )}>
                Researcher
              </span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gray-900 relative py-1",
                  isScrolled ? "text-gray-600" : "text-gray-700",
                  activeSection === item.href.substring(1) && "text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>
          
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 rounded-md focus:outline-none"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-50 md:hidden transition-transform transform",
        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-md focus:outline-none"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-gray-800" />
          </button>
        </div>
        
        <nav className="flex flex-col px-4 pt-2 pb-8 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-lg font-medium py-2 border-b border-gray-100",
                activeSection === item.href.substring(1) && "text-gray-900 font-semibold"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
