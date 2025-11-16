import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [shimmerActive, setShimmerActive] = useState(false);

  const handleContactClick = () => {
    setShimmerActive(true);
    setTimeout(() => setShimmerActive(false), 2000);
  };

  return (
    <footer className="relative bg-white border-t border-gray-200">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-4xl font-semibold tracking-tight mb-6">
              <span className="text-gray-800">JOTHOM</span>
              <span className="text-slate-500">.</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              Building the future with precision, integrity, and innovation since 2017.
            </p>
            <div className="flex gap-4">
              {[Facebook, Linkedin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center hover:border-slate-500 hover:text-slate-700 transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wider uppercase text-gray-900">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                'Structural Construction',
                'Residential Building',
                'Commercial Development',
                'Renovations',
                'Civil Engineering',
                'Project Management',
              ].map((service, idx) => (
                <li key={idx}>
                  <a
                    href="#our-services"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector('#our-services');
                      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="text-gray-600 hover:text-slate-700 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-slate-500 group-hover:w-4 transition-all duration-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wider uppercase text-gray-900">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '#who-we-are' },
                { label: 'Our Projects', href: '#featured-projects' },
                { label: 'Careers', href: '#' },
                { label: 'Safety Standards', href: '#' },
                { label: 'Certifications', href: '#' },
                { label: 'Contact', href: '#' },
              ].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith('#')) {
                          e.preventDefault();
                          const element = document.querySelector(item.href);
                          element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                      className="text-gray-600 hover:text-slate-700 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-px bg-slate-500 group-hover:w-4 transition-all duration-300" />
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 tracking-wider uppercase text-gray-900">
              Contact
            </h3>
            <ul className="space-y-4">
              <li
                className={`flex items-start gap-3 text-gray-600 cursor-pointer transition-all duration-300 ${shimmerActive ? 'shimmer' : ''}`}
                onClick={handleContactClick}
              >
                <MapPin className="w-5 h-5 text-slate-600 mt-1 flex-shrink-0" />
                <span>8793 Pigmelon Street, Ria Vista, Pretoria, 0175</span>
              </li>
              <li
                className={`flex items-center gap-3 text-gray-600 cursor-pointer transition-all duration-300 ${shimmerActive ? 'shimmer' : ''}`}
                onClick={handleContactClick}
              >
                <Phone className="w-5 h-5 text-slate-600 flex-shrink-0" />
                <a
                  href="tel:+27825829847"
                  className="hover:text-slate-700 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleContactClick();
                  }}
                >
                  +27 82 582 9847
                </a>
              </li>
              <li
                className={`flex items-center gap-3 text-gray-600 cursor-pointer transition-all duration-300 ${shimmerActive ? 'shimmer' : ''}`}
                onClick={handleContactClick}
              >
                <Mail className="w-5 h-5 text-slate-600 flex-shrink-0" />
                <a
                  href="mailto:thomasngilazi@gmail.com"
                  className="hover:text-slate-700 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleContactClick();
                  }}
                >
                  thomasngilazi@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>&copy; {currentYear} Jothom Construction. All rights reserved.</p>
            <div className="hidden md:block w-px h-4 bg-gray-300" />
            <p className="text-gray-600">Built on Precision. Inspired by Innovation.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-700 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-700 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
    </footer>
  );
};

export default Footer;
