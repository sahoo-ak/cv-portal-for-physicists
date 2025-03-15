
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo py-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="text-lg sm:text-xl font-serif font-semibold transition-colors hover:text-gray-600">
              Dr. Physics
            </a>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <div className="w-6 flex items-center justify-center relative">
              <span 
                aria-hidden="true" 
                className={cn(
                  "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-out-expo",
                  menuOpen ? "rotate-45" : "-translate-y-1.5"
                )}
              />
              <span 
                aria-hidden="true" 
                className={cn(
                  "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-out-expo",
                  menuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span 
                aria-hidden="true" 
                className={cn(
                  "block absolute h-0.5 w-6 bg-current transform transition duration-300 ease-out-expo",
                  menuOpen ? "-rotate-45" : "translate-y-1.5"
                )}
              />
            </div>
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300 relative py-2 px-1",
                  activeSection === item.href.substring(1)
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                )}
              >
                {item.label}
                <span 
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-black transform origin-left transition-transform duration-300",
                    activeSection === item.href.substring(1) ? "scale-x-100" : "scale-x-0"
                  )}
                />
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-out-expo pt-20",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="h-full flex flex-col p-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                "text-2xl font-medium py-4 border-b border-gray-100 transition-colors",
                activeSection === item.href.substring(1)
                  ? "text-black"
                  : "text-gray-500 hover:text-black"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
