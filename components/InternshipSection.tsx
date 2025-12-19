
import React, { useState } from 'react';
import { INTERNSHIPS } from '../constants';
import { Internship } from '../types';

interface InternshipSectionProps {
  onApply: (job: Internship) => void;
}

const InternshipSection: React.FC<InternshipSectionProps> = ({ onApply }) => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="careers-list" className="space-y-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black tracking-tight mb-4">Learn & Build With Us</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          We're looking for passionate interns who want to build the future of restaurant technology. 
          No heavy experience needed—just a hunger to learn.
        </p>
      </div>

      <div className="grid gap-6">
        {INTERNSHIPS.map((job) => (
          <div 
            key={job.id}
            className="bg-white nothing-border rounded-2xl p-8 hover:shadow-xl transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight">{job.title}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wider">📍 {job.location}</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-bold uppercase tracking-wider">📋 {job.type}</span>
                  <span className="px-3 py-1 bg-gray-900 text-white rounded-full text-xs font-bold uppercase tracking-wider">🎓 Learning Focus</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                  className="px-6 py-2 text-sm font-bold hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {expandedId === job.id ? 'Hide Details ↑' : 'View Details ↓'}
                </button>
                <button 
                  onClick={() => onApply(job)}
                  className="px-6 py-2 bg-black text-white rounded-lg text-sm font-bold hover:bg-gray-800 transition-all shadow-lg"
                >
                  Apply Now
                </button>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-3xl">{job.description}</p>

            {expandedId === job.id && (
              <div className="mt-8 pt-8 border-t border-gray-100 grid md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-top-4 duration-300">
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">What You'll Learn</h4>
                  <ul className="space-y-3">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="text-black font-bold">→</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">Your Responsibilities</h4>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <span className="text-black font-bold">→</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default InternshipSection;
