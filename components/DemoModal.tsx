
import React, { useState } from 'react';
import { DemoFormData } from '../types';

interface DemoModalProps {
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => onClose(), 3000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          ✕
        </button>

        <h2 className="text-4xl font-black tracking-tight mb-2">Request Demo</h2>
        <p className="text-gray-500 mb-8">See how CareVo transforms operations.</p>

        {isSuccess ? (
          <div className="bg-green-50 text-green-700 p-6 rounded-2xl font-bold flex flex-col items-center gap-4 text-center">
            <span className="text-4xl">✅</span>
            Thank you! Our team will reach out within 24 hours to schedule your personalized demo.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Name</label>
              <input 
                required
                name="name"
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-black focus:bg-white outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Restaurant Email</label>
              <input 
                required
                type="email"
                name="email"
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-black focus:bg-white outline-none transition-all"
                placeholder="john@restaurant.com"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Restaurant Name</label>
              <input 
                name="restaurant"
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-black focus:bg-white outline-none transition-all"
                placeholder="Gusto Kitchen"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Message</label>
              <textarea 
                name="message"
                rows={3}
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-black focus:bg-white outline-none transition-all resize-none"
                placeholder="Tell us about your needs..."
              />
            </div>

            <button 
              disabled={isLoading}
              type="submit"
              className="w-full py-4 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-900 transition-all disabled:opacity-50 mt-4"
            >
              {isLoading ? "Sending Request..." : "Request Demo"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DemoModal;
