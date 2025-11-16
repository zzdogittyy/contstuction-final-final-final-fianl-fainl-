import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-40 px-6 overflow-hidden bg-white">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Construction Blueprint"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/90" />
      </div>

      <div className="absolute inset-0 blueprint-overlay opacity-10" />

      <div
        className={`absolute inset-0 transition-all duration-1500 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-150 opacity-0'
        }`}
        style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 0%, rgba(100, 116, 139, 0.1) 50%, transparent 100%),
            linear-gradient(0deg, transparent 0%, rgba(100, 116, 139, 0.1) 50%, transparent 100%)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-slate-400" />
            <span className="text-slate-600 tracking-[0.4em] text-sm uppercase font-light">Let's Collaborate</span>
            <div className="w-16 h-px bg-slate-400" />
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-8 leading-none text-gray-900">
            <span className="block mb-4">LET'S BUILD</span>
            <span className="block text-slate-600">SOMETHING</span>
            <span className="block">EXTRAORDINARY</span>
          </h2>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-12" />

          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
            Ready to transform your vision into a structural masterpiece? Our team of experts is standing by to bring your project to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-12 py-6 bg-slate-600 text-white font-medium tracking-wider uppercase overflow-hidden transition-all duration-500 hover:bg-transparent hover:text-gray-900 border-2 border-slate-600">
              <span className="relative z-10 flex items-center gap-3">
                Request a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>

            <button className="group px-12 py-6 bg-transparent border-2 border-gray-900 text-gray-900 font-medium tracking-wider uppercase transition-all duration-500 hover:border-slate-600 hover:text-slate-700">
              View Portfolio
            </button>
          </div>
        </div>

        <div
          className={`mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { value: '24/7', label: 'Support Available' },
            { value: '48hr', label: 'Response Time' },
            { value: 'Free', label: 'Consultation' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute inset-0 bg-slate-100/70 backdrop-blur-sm border border-slate-300 transform transition-all duration-500 group-hover:scale-105" />
              <div className="relative p-6">
                <div className="text-4xl font-semibold text-slate-700 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
    </section>
  );
};

export default CTA;
