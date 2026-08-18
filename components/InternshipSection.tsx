
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
        <p className="text-text-soft max-w-2xl mx-auto">
          We're looking for passionate interns who want to build the future of restaurant technology. 
          No heavy experience needed—just a hunger to learn.
        </p>
      </div>

      <div className="grid gap-6">
        {INTERNSHIPS.map((job) => (
          <div 
            key={job.id}
            className="bg-surface nothing-border rounded-2xl p-8 hover:shadow-xl transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 tracking-tight">{job.title}</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-background text-text-soft rounded-full text-xs font-bold uppercase tracking-wider">📍 {job.location}</span>
                  <span className="px-3 py-1 bg-background text-text-soft rounded-full text-xs font-bold uppercase tracking-wider">📋 {job.type}</span>
                  <span className="px-3 py-1 bg-primary text-white rounded-full text-xs font-bold uppercase tracking-wider">🎓 Learning Focus</span>
                </div>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={() => setExpandedId(expandedId === job.id ? null : job.id)}
                  className="px-6 py-2 text-sm font-bold hover:bg-background rounded-lg transition-colors"
                >
                  {expandedId === job.id ? 'Hide Details ↑' : 'View Details ↓'}
                </button>
                <button 
                  onClick={() => onApply(job)}
                  className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-lg"
                >
                  Apply Now
                </button>
              </div>
            </div>

            <p className="text-text-soft leading-relaxed max-w-3xl">{job.description}</p>

            {expandedId === job.id && (
              <div className="mt-8 pt-8 border-t border-border grid md:grid-cols-2 gap-12 animate-in fade-in slide-in-from-top-4 duration-300">
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-placeholder mb-4">What You'll Learn</h4>
                  <ul className="space-y-3">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-soft">
                        <span className="text-primary font-bold">→</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-placeholder mb-4">Your Responsibilities</h4>
                  <ul className="space-y-3">
                    {job.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-text-soft">
                        <span className="text-primary font-bold">→</span>
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
