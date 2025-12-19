
import React, { useRef, useState } from 'react';
import { gemini } from '../services/gemini';

const VisionDemo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [result, setResult] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsActive(true);
      }
    } catch (err) {
      console.error("Camera access denied", err);
      alert("Please allow camera access to demo the Vision AI.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      setIsActive(false);
    }
  };

  const analyzeFrame = async () => {
    if (!canvasRef.current || !videoRef.current) return;
    
    setIsAnalyzing(true);
    const context = canvasRef.current.getContext('2d');
    if (context) {
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0);
      
      const base64Image = canvasRef.current.toDataURL('image/jpeg', 0.8);
      const feedback = await gemini.analyzeDish(base64Image);
      setResult(feedback);
    }
    setIsAnalyzing(false);
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-100">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-widest rounded">Feature Demo</div>
          <h2 className="text-4xl font-black tracking-tight">AI Quality Recognition</h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Our platform uses deep learning to automatically identify dishes and verify plating quality before they leave the kitchen. Experience it live below.
          </p>
          <div className="flex gap-4">
            {!isActive ? (
              <button 
                onClick={startCamera}
                className="px-8 py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all"
              >
                Launch Vision Demo
              </button>
            ) : (
              <button 
                onClick={analyzeFrame}
                disabled={isAnalyzing}
                className="px-8 py-3 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all disabled:opacity-50"
              >
                {isAnalyzing ? "Analyzing Quality..." : "Capture & Analyze"}
              </button>
            )}
            {isActive && (
              <button 
                onClick={stopCamera}
                className="px-8 py-3 border border-gray-200 rounded-xl font-bold hover:border-black transition-all"
              >
                Stop Camera
              </button>
            )}
          </div>
        </div>

        <div className="relative aspect-video bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 group">
          {!isActive && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-300">
              <span className="text-6xl">📷</span>
            </div>
          )}
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            className={`w-full h-full object-cover ${isActive ? 'opacity-100' : 'opacity-0'}`}
          />
          <canvas ref={canvasRef} className="hidden" />
          
          {result && (
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur border border-black p-6 rounded-2xl shadow-2xl max-h-[60%] overflow-y-auto animate-in slide-in-from-bottom-4 duration-300 no-scrollbar">
              <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
                <span className="text-xs font-black uppercase tracking-widest">AI Chef Feedback</span>
                <button onClick={() => setResult(null)} className="text-gray-400 hover:text-black">✕</button>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed font-medium italic">"{result}"</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VisionDemo;
