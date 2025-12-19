
import React, { useState } from 'react';
import { Internship } from '../types';

interface ApplicationModalProps {
  job: Internship;
  hasResume: boolean;
  onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ job, hasResume, onClose }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
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
      <div className="relative w-full max-w-xl bg-white rounded-3xl p-8 md:p-12 shadow-2xl animate-in zoom-in-95 duration-300 max-h-[90vh] overflow-y-auto no-scrollbar">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          ✕
        </button>

        <div className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Applying for</div>
        <h2 className="text-3xl font-black tracking-tight mb-8">{job.title}</h2>

        {isSuccess ? (
          <div className="bg-green-50 text-green-700 p-10 rounded-2xl font-bold flex flex-col items-center gap-6 text-center">
            <span className="text-6xl animate-bounce">🚀</span>
            <div>
              <div className="text-xl mb-2">Application Transmitted!</div>
              <p className="font-medium text-green-600">Our engineering leads will review your profile shortly. Good luck!</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {hasResume && (
              <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl flex items-center gap-3">
                <span className="text-green-500 font-bold">✅</span>
                <p className="text-sm font-medium">Resume detected from your profile.</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                <input required className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-black outline-none transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                <input required type="email" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-black outline-none transition-all" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Educational Background</label>
              <input required className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-black outline-none transition-all" placeholder="University, Major & Grad Year" />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Skills & Tech (Comma Separated)</label>
              <input required className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-black outline-none transition-all" placeholder="React, Node.js, Python..." />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Why CareVo?</label>
              <textarea required rows={4} className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-black outline-none transition-all resize-none" placeholder="What excites you about restaurant tech?" />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Links (GitHub/LinkedIn)</label>
              <input className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:border-black outline-none transition-all" placeholder="https://github.com/yourprofile" />
            </div>

            <button 
              disabled={isLoading}
              type="submit"
              className="w-full py-5 bg-black text-white rounded-xl font-bold text-lg hover:bg-gray-900 transition-all disabled:opacity-50 mt-8 shadow-xl"
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
