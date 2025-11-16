import { useState, useRef, useEffect } from 'react';

const projects = [
  {
    title: 'SKYLINE TOWER',
    location: 'New York, NY',
    category: 'Commercial',
    height: '420m',
    duration: '36 months',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'RIVERSIDE RESIDENCE',
    location: 'Chicago, IL',
    category: 'Residential',
    height: '180m',
    duration: '24 months',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'METRO HUB',
    location: 'Los Angeles, CA',
    category: 'Infrastructure',
    height: 'N/A',
    duration: '18 months',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'APEX CENTER',
    location: 'Miami, FL',
    category: 'Commercial',
    height: '290m',
    duration: '30 months',
    image: 'https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="featured-projects" className="relative py-32 px-6 bg-gray-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#e2e8f0_1px,transparent_1px)] bg-[length:50px_50px] opacity-30" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-slate-400" />
            <span className="text-slate-600 tracking-[0.3em] text-sm uppercase font-light">Case Studies</span>
            <div className="w-12 h-px bg-slate-400" />
          </div>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4 text-gray-900">
            FEATURED <span className="text-slate-600">PROJECTS</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transforming architectural visions into iconic structures
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden bg-white border border-gray-200 transition-all duration-700 hover:border-slate-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
