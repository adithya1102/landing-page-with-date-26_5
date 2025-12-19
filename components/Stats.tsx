
import React from 'react';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
  <div className="text-center py-10 px-6">
    <div className="text-5xl font-black mb-2 tracking-tighter">{value}</div>
    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{label}</div>
  </div>
);

const Stats: React.FC = () => {
  return (
    <section className="border-b border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
        <StatCard value="25%" label="Revenue Increase" />
        <StatCard value="20%" label="Cost Reduction" />
        <StatCard value="77%" label="Fewer Walkaways" />
        <StatCard value="99.9%" label="Uptime Guarantee" />
      </div>
    </section>
  );
};

export default Stats;
