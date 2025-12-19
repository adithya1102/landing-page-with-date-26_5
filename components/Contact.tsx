
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 text-center border-t border-gray-100 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">Get in Touch</h2>
        <p className="text-gray-500 mb-16 text-lg max-w-2xl mx-auto">
          Whether you're looking to upgrade your restaurant's technology or want to help build it, we'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white nothing-border rounded-2xl">
            <div className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Email</div>
            <a href="mailto:adithya@carevo.co.in" className="text-lg font-bold hover:underline">adithya@carevo.co.in</a>
          </div>
          <div className="p-8 bg-white nothing-border rounded-2xl">
            <div className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Phone</div>
            <a href="tel:+916374304790" className="text-lg font-bold hover:underline">+91 63743 04790</a>
          </div>
          <div className="p-8 bg-white nothing-border rounded-2xl">
            <div className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Website</div>
            <a href="https://carevo.co.in" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:underline">carevo.co.in</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
