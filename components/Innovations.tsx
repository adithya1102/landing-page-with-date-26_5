
import React from 'react';
import { INNOVATIONS } from '../constants';

const Innovations: React.FC = () => {
  return (
    <section id="innovations" className="py-24 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-20 tracking-tight">Advanced Innovations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INNOVATIONS.map((inn) => (
            <div key={inn.id} className="p-8 bg-white nothing-border rounded-2xl group hover:-translate-y-2 transition-all">
              <div className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:border-black transition-colors">
                {inn.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{inn.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{inn.description}</p>
              
              <ul className="space-y-2">
                {inn.techStack.map((tech, i) => (
                  <li key={i} className="text-xs font-bold text-gray-400 flex items-center gap-2">
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Innovations;
