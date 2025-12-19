
import React from 'react';

interface HeroProps {
  onOpenDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 px-6 border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
          The Intelligent Operating System for <span className="text-gray-400">Restaurants</span>.
        </h1>
        <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Orchestrate every aspect of your dining room—from smart customer discovery to predictive kitchen workflows—increasing revenue by 25%.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onOpenDemo}
            className="w-full sm:w-auto px-10 py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-900 transition-all shadow-xl shadow-black/5 hover:-translate-y-1"
          >
            Get Started →
          </button>
          <a 
            href="#careers"
            className="w-full sm:w-auto px-10 py-4 bg-white border border-gray-200 rounded-xl font-bold text-lg hover:border-black transition-all hover:-translate-y-1"
          >
            Join as Intern
          </a>
        </div>
      </div>

      {/* Nothing inspired decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-50 rounded-full blur-3xl -z-10 opacity-60 -translate-x-1/2 translate-y-1/2"></div>
    </section>
  );
};

export default Hero;
