
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import FeatureGrid from './components/FeatureGrid';
import InternshipSection from './components/InternshipSection';
import Innovations from './components/Innovations';
import VisionDemo from './components/VisionDemo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import ApplicationModal from './components/ApplicationModal';
import AIHelper from './components/AIHelper';
import { Internship } from './types';

const App: React.FC = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState<Internship | null>(null);
  const [uploadedResume, setUploadedResume] = useState<{ name: string } | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('uploadedResume');
    if (saved) {
      setUploadedResume(JSON.parse(saved));
    }
  }, []);

  const handleResumeUpload = (file: File) => {
    const data = { name: file.name };
    setUploadedResume(data);
    localStorage.setItem('uploadedResume', JSON.stringify(data));
  };

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white dot-grid">
      <Header onOpenDemo={() => setIsDemoModalOpen(true)} />
      
      <main>
        <Hero onOpenDemo={() => setIsDemoModalOpen(true)} />
        <Stats />
        <FeatureGrid />
        <VisionDemo />
        
        <div id="careers" className="py-20 px-6 max-w-7xl mx-auto">
          <div className="bg-white p-12 nothing-border rounded-2xl text-center mb-16 shadow-sm">
            <h3 className="text-2xl font-bold mb-4 tracking-tight">📄 Apply Faster with AI</h3>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              Upload your resume to pre-fill internship applications and help our system match your skills with the right learning track.
            </p>
            <label className="block max-w-md mx-auto p-12 border-2 border-dashed border-gray-100 rounded-xl bg-gray-50 hover:bg-white hover:border-black cursor-pointer transition-all group">
              <input 
                type="file" 
                className="hidden" 
                accept=".pdf,.doc,.docx"
                onChange={(e) => e.target.files?.[0] && handleResumeUpload(e.target.files[0])}
              />
              <span className="text-gray-500 font-bold group-hover:text-black transition-colors">
                {uploadedResume ? `✅ ${uploadedResume.name}` : "Click to upload resume"}
              </span>
            </label>
          </div>
          
          <InternshipSection onApply={(job) => setSelectedInternship(job)} />
        </div>

        <Innovations />
        <Contact />
      </main>

      <Footer />
      <AIHelper />

      {isDemoModalOpen && (
        <DemoModal onClose={() => setIsDemoModalOpen(false)} />
      )}
      
      {selectedInternship && (
        <ApplicationModal 
          job={selectedInternship} 
          hasResume={!!uploadedResume}
          onClose={() => setSelectedInternship(null)} 
        />
      )}
    </div>
  );
};

export default App;
