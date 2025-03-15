
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white z-0" />
      
      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute rounded-full w-72 h-72 bg-blue-100 blur-3xl top-1/4 -left-20" />
        <div className="absolute rounded-full w-80 h-80 bg-indigo-50 blur-3xl bottom-1/4 right-0" />
      </div>
      
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className={`transition-all duration-700 delay-300 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="inline-block py-1 px-3 text-xs font-medium tracking-wider uppercase bg-gray-100 rounded-full mb-4">
                PhD Student in Physics
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-4">
                Exploring the Quantum Frontiers
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                Dedicated to advancing our understanding of theoretical physics through innovative research, 
                collaboration, and academic excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#research" 
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-300 bg-black rounded-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
                >
                  View Research
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-900 transition duration-300 border border-gray-300 rounded-md hover:bg-gray-50 focus:shadow-outline focus:outline-none"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className={`relative w-64 h-64 md:w-80 md:h-80 transition-all duration-1000 transform ${isLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white to-gray-50 backdrop-blur-lg shadow-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-24 md:h-24 text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center">
                  P
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
