import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyJothom from './components/WhyJothom';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-gray-900 overflow-x-hidden">
      <Hero />
      <WhoWeAre />
      <Services />
      <Portfolio />
      <WhyJothom />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
