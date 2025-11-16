import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden concrete-texture">
      <div className="absolute inset-0 z-10" />

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-30" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent z-30" />
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent z-30" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent z-30" />

      <div className="relative z-30 h-full flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="floating-particles mb-8">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
          </div>

          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-slate-400" />
            <span className="text-slate-600 tracking-[0.3em] text-sm font-light uppercase">Est. 2017</span>
            <div className="h-px w-12 bg-slate-400" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-tight text-gray-900">
            <span className="block text-reveal" style={{ animationDelay: '0.2s' }}>
              BUILDING THE
            </span>
            <span className="block text-reveal bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent" style={{ animationDelay: '0.4s' }}>
              FUTURE
            </span>
            <span className="block text-slate-600 text-reveal" style={{ animationDelay: '0.6s' }}>
              WITH PRECISION
            </span>
          </h1>

          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8" />

          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed fade-in" style={{ animationDelay: '0.8s' }}>
            Jothom Construction delivers world-class structures engineered with integrity and innovation.
          </p>

          <button className="group relative px-12 py-5 bg-transparent border-2 border-slate-400 text-gray-800 font-medium tracking-wider uppercase overflow-hidden transition-all duration-500 hover:text-white fade-in" style={{ animationDelay: '1s' }}>
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-slate-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            <div className="absolute inset-0 border border-gray-300 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
          </button>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-slate-500" />
          </div>
        </div>
      </div>

      <div className="absolute top-8 left-8 z-40 flex flex-col items-center gap-3">
        <div className="w-16 h-16 flex items-center justify-center">
          <img
            src="/Screenshot 2025-11-15 132907.png"
            alt="Jothom Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-4xl font-semibold tracking-tight">
          <span className="text-gray-800">JOTHOM</span>
          <span className="text-slate-500">.</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
