
import React, { useState } from 'react';
import { Internship } from '../types';
import { submitInternship, ApiError } from '../services/api';

interface ApplicationModalProps {
  job: Internship;
  hasResume: boolean;
  resumeUrl?: string;
  onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ job, hasResume, resumeUrl, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      await submitInternship({
        name: (formData.get('name') as string) || '',
        email: (formData.get('email') as string) || '',
        education: (formData.get('education') as string) || '',
        skills: (formData.get('skills') as string) || '',
        cover_letter: (formData.get('coverLetter') as string) || '',
        portfolio: (formData.get('portfolio') as string) || undefined,
        position: job.title,
        resume_url: resumeUrl || undefined,
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
      <div className="relative w-full max-w-xl bg-surface rounded-3xl p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto no-scrollbar">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-background rounded-full transition-colors"
        >
          ✕
        </button>

        <div className="text-xs font-black uppercase tracking-widest text-placeholder mb-2">Applying for</div>
        <h2 className="text-3xl font-black tracking-tight mb-8">{job.title}</h2>

        {isSuccess ? (
          <div className="bg-success/10 text-success p-10 rounded-2xl font-bold flex flex-col items-center gap-6 text-center">
            <span className="text-6xl animate-bounce">🚀</span>
            <div>
              <div className="text-xl mb-2">Application Transmitted!</div>
              <p className="font-medium text-success/80">Our engineering leads will review your profile shortly. Good luck!</p>
            </div>
          </div>
        ) : error ? (
          <div className="space-y-4">
            <div className="bg-error/10 text-error p-6 rounded-2xl font-medium text-center">
              <span className="text-2xl block mb-2">⚠️</span>
              {error}
            </div>
            <button
              onClick={handleRetry}
              className="w-full py-5 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-xl"
            >
              Try Again
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {hasResume && (
              <div className="bg-background border border-border p-4 rounded-xl flex items-center gap-3">
                <span className="text-success font-bold">✅</span>
                <p className="text-sm font-medium">Resume detected from your profile.</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-placeholder">Full Name</label>
                <input required name="name" className="w-full p-4 bg-background border border-border rounded-xl focus:border-primary outline-none transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-placeholder">Email Address</label>
                <input required type="email" name="email" className="w-full p-4 bg-background border border-border rounded-xl focus:border-primary outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-placeholder">Educational Background</label>
              <input required name="education" className="w-full p-4 bg-background border border-border rounded-xl focus:border-primary outline-none transition-all" placeholder="University, Major & Grad Year" />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-placeholder">Skills & Tech (Comma Separated)</label>
              <input required name="skills" className="w-full p-4 bg-background border border-border rounded-xl focus:border-primary outline-none transition-all" placeholder="React, Node.js, Python..." />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-placeholder">Why CareVo?</label>
              <textarea required name="coverLetter" rows={4} className="w-full p-4 bg-background border border-border rounded-xl focus:border-primary outline-none transition-all resize-none" placeholder="What excites you about restaurant tech?" />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-placeholder">Links (GitHub/LinkedIn)</label>
              <input name="portfolio" className="w-full p-4 bg-background border border-border rounded-xl focus:border-primary outline-none transition-all" placeholder="https://github.com/yourprofile" />
            </div>

            <button 
              disabled={isLoading}
              type="submit"
              className="w-full py-5 bg-primary text-white rounded-xl font-bold text-lg hover:bg-primary/90 transition-all disabled:opacity-50 mt-8 shadow-xl"
            >
              {isLoading ? "Submitting..." : "Send Application →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ApplicationModal;
