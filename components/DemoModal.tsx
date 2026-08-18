
import React, { useState } from 'react';
import { DemoFormData } from '../types';
import { submitDemo, ApiError } from '../services/api';

interface DemoModalProps {
  onClose: () => void;
}

const DemoModal: React.FC<DemoModalProps> = ({ onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      await submitDemo({
        name: (formData.get('name') as string) || '',
        email: (formData.get('email') as string) || '',
        restaurant: (formData.get('restaurant') as string) || undefined,
        message: (formData.get('message') as string) || undefined,
        turnstileToken: 'client-side', // Replace with Turnstile widget token in production
      });

      setIsSuccess(true);
      setTimeout(() => onClose(), 3000);
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    setError(null);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-overlay backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg bg-surface rounded-3xl p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-background rounded-full transition-colors"
        >
          ✕
        </button>

        <h2 className="text-4xl font-black tracking-tight mb-2">Request Demo</h2>
        <p className="text-text-soft mb-8">See how CareVo transforms operations.</p>

        {isSuccess ? (
          <div className="bg-success/10 text-success p-6 rounded-2xl font-bold flex flex-col items-center gap-4 text-center">
            <span className="text-4xl">✅</span>
            Thank you! Our team will reach out within 24 hours to schedule your personalized demo.
          </div>
        ) : error ? (
          <div className="space-y-4">
            <div className="bg-error/10 text-error p-6 rounded-2xl font-medium text-center">
              <span className="text-2xl block mb-2">⚠️</span>
              {error}
            </div>
            <button
              onClick={handleRetry}
              className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all"
            >
              Try Again
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-placeholder">Your Name</label>
              <input 
                required
                name="name"
                className="w-full p-4 bg-background border border-border rounded-xl focus:border-primary focus:bg-surface outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-placeholder">Restaurant Email</label>
              <input 
                required
                type="email"
                name="email"
                className="w-full p-4 bg-background border border-border rounded-xl focus:border-primary focus:bg-surface outline-none transition-all"
                placeholder="john@restaurant.com"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-placeholder">Restaurant Name</label>
              <input 
                name="restaurant"
                className="w-full p-4 bg-background border border-border rounded-xl focus:border-primary focus:bg-surface outline-none transition-all"
                placeholder="Gusto Kitchen"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-placeholder">Message</label>
              <textarea 
                name="message"
                rows={3}
                className="w-full p-4 bg-background border border-border rounded-xl focus:border-primary focus:bg-surface outline-none transition-all resize-none"
                placeholder="Tell us about your needs..."
              />
            </div>

            <button 
              disabled={isLoading}
              type="submit"
              className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all disabled:opacity-50 mt-4"
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
