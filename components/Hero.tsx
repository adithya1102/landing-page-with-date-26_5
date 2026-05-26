
import React from 'react';

interface HeroProps {
  onOpenDemo: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenDemo }) => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 px-6 border-b border-gray-100">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
          Command AI for Restaurant Ecosystems & Value Optimization
        </h1>
        <div className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed flex flex-col items-center space-y-1">
          <span>Orchestrate every aspect of your dining room:</span>
          <span>from smart customer discovery to predictive kitchen workflows</span>
          <span className="border-b border-dotted border-gray-400 pb-0.5">increasing revenue by 25%.</span>
        </div>
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
