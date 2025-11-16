import { useEffect, useRef, useState } from 'react';
import { Shield, Ruler, Clock, Users, Award, MessageSquare } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Unmatched Durability',
    desc: 'Structures engineered to withstand the test of time and elements',
  },
  {
    icon: Ruler,
    title: 'Precision Engineering',
    desc: 'Every measurement, every detail executed with exactitude',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: '98% of projects completed within scheduled timeframe',
  },
  {
    icon: MessageSquare,
    title: 'Transparent Communication',
    desc: 'Real-time updates and collaborative decision-making',
  },
  {
    icon: Users,
    title: 'Award-Winning Team',
    desc: 'Industry-certified professionals with decades of experience',
  },
  {
    icon: Award,
    title: 'Excellence Standard',
    desc: 'Recipient of 25+ construction and design awards',
  },
];

const WhyJothom = () => {
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
    <section ref={sectionRef} className="relative py-32 px-6 bg-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2364748b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-slate-400" />
            <span className="text-slate-600 tracking-[0.3em] text-sm uppercase font-light">Our Values</span>
            <div className="w-12 h-px bg-slate-400" />
          </div>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900">
            WHY <span className="text-slate-600">JOTHOM</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, idx) => (
            <div key={idx} className="relative">
              <div
                className={`relative group bg-white backdrop-blur-sm border border-gray-200 p-10 transition-all duration-700 hover:border-slate-400 hover:transform hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="mb-6 relative inline-block">
                    <div className="absolute inset-0 bg-slate-400/30 blur-2xl group-hover:blur-3xl transition-all duration-500" />
                    <div className="relative bg-white border border-slate-400 p-4 transform group-hover:rotate-6 transition-transform duration-500">
                      <value.icon className="w-8 h-8 text-slate-600" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-medium mb-4 tracking-tight text-gray-900 group-hover:text-slate-700 transition-colors duration-300">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </div>
              </div>

              {idx < values.length - 1 && idx % 3 !== 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-slate-400 to-transparent transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block relative">
            <div className="absolute -inset-8 bg-slate-200/30 blur-3xl" />
            <div className="relative bg-gradient-to-r from-white via-gray-50 to-white border-t border-b border-slate-400 py-8 px-16">
              <div className="text-6xl font-semibold mb-2">
                <span className="text-slate-600">100%</span>
              </div>
              <div className="text-sm tracking-[0.3em] text-gray-600 uppercase">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJothom;
