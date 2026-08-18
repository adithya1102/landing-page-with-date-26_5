
import React, { useState } from 'react';
import { FEATURES } from '../constants';
import { Feature } from '../types';

const FeatureGrid: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(FEATURES[0].id);

  const selectedFeature = FEATURES.find(f => f.id === selectedId) || FEATURES[0];

  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-20 tracking-tight">Core Platform Features</h2>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Sidebar/List */}
        <div className="w-full lg:w-1/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          {FEATURES.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setSelectedId(feature.id)}
              className={`p-6 text-left rounded-2xl border transition-all duration-300 ${selectedId === feature.id
                  ? 'border-primary bg-background shadow-lg'
                  : 'border-border bg-surface hover:border-placeholder'
                }`}
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-text-soft line-clamp-2">{feature.shortDesc}</p>
            </button>
          ))}
        </div>

        {/* Detail View */}
        <div className="w-full lg:w-2/3 bg-surface border border-primary p-8 md:p-12 rounded-3xl min-h-[500px] flex flex-col lg:sticky lg:top-32">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-5xl">{selectedFeature.icon}</span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">{selectedFeature.title}</h2>
          </div>

          <div className="space-y-6 flex-grow">
            {selectedFeature.longDesc.map((text, idx) => (
              <p key={idx} className="text-text-soft text-lg leading-relaxed">{text}</p>
            ))}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {selectedFeature.highlights.map((h, idx) => (
                <div key={idx} className="p-6 bg-background rounded-2xl border border-border">
                  <h4 className="font-bold text-text-main mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {h.title}
                  </h4>
                  <p className="text-sm text-text-soft">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
