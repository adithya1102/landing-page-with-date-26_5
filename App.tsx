
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import FeatureGrid from './components/FeatureGrid';
import InternshipSection from './components/InternshipSection';
import Innovations from './components/Innovations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import ApplicationModal from './components/ApplicationModal';
import { Internship } from './types';
import { uploadFile, ApiError } from './services/api';

const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);
  const [uploadedResume, setUploadedResume] = useState<{ name: string; url?: string } | null>(null);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'error'>('idle');
  const [uploadError, setUploadError] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('uploadedResume');
    if (saved) {
      setUploadedResume(JSON.parse(saved));
    }
  }, []);

  const handleResumeUpload = async (file: File) => {
    setUploadStatus('uploading');
    setUploadError(null);

    try {
      const result = await uploadFile(file);
      const data = { name: file.name, url: result.data.url };
      setUploadedResume(data);
      localStorage.setItem('uploadedResume', JSON.stringify(data));
      setUploadStatus('idle');
    } catch (err) {
      setUploadStatus('error');
      if (err instanceof ApiError) {
        setUploadError(err.message);
      } else {
        setUploadError('Failed to upload resume. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary selection:text-white dot-grid">
      <Header onOpenDemo={() => setIsDemoModalOpen(true)} />

      <main>
        <Hero onOpenDemo={() => setIsDemoModalOpen(true)} />
        <Stats />
        <FeatureGrid />

        <div id="careers" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="bg-surface p-12 nothing-border rounded-2xl text-center mb-16 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 tracking-tight">📄 Apply Faster with AI</h3>
            <p className="text-text-soft mb-8 max-w-xl mx-auto">
              Upload your resume to pre-fill internship applications and help our system match your skills with the right learning track.
            </p>
            <label className="block max-w-md mx-auto p-12 border-2 border-dashed border-border rounded-xl bg-background hover:bg-surface hover:border-secondary cursor-pointer transition-all group">
              <input
                type="file"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={(e) => e.target.files?.[0] && handleResumeUpload(e.target.files[0])}
                disabled={uploadStatus === 'uploading'}
              />
              <span className="text-text-soft font-bold group-hover:text-secondary transition-colors">
                {uploadStatus === 'uploading'
                  ? '⏳ Uploading...'
                  : uploadedResume
                    ? `✅ ${uploadedResume.name}`
                    : 'Click to upload resume'}
              </span>
            </label>
            {uploadStatus === 'error' && uploadError && (
              <p className="text-error text-sm mt-4">{uploadError}</p>
            )}
          </div>

          <InternshipSection onApply={(job) => setSelectedInternship(job)} />
        </div>

        <Innovations />
        <Contact />
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919499956612?text=Hi,%20I%20would%20like%20to%20look%20a%20demo%20of%20your%20product."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[200] w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 transition-all transform active:scale-95 group border-4 border-white"
        title="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {isDemoModalOpen && (
        <DemoModal onClose={() => setIsDemoModalOpen(false)} />
      )}

      {selectedInternship && (
        <ApplicationModal
          job={selectedInternship}
          hasResume={!!uploadedResume}
          resumeUrl={uploadedResume?.url}
          onClose={() => setSelectedInternship(null)}
        />
      )}
    </div>
  );
};

export default App;
