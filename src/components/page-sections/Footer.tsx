
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} | PhD Researcher | All Rights Reserved</p>
          <p>Designed and developed with precision and elegance</p>
          <p className="mt-2">
            <a 
              href="https://github.com/yourusername/yourrepository" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors"
            >
              View on GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
