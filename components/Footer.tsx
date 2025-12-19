
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-gray-400 py-20 px-6 border-t border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left">
          <div className="text-2xl font-black text-white tracking-tighter mb-4">CareVo</div>
          <p className="text-sm max-w-xs leading-relaxed">
            Building the future of restaurant technology with passionate engineers.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 text-sm font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#contact" className="hover:text-white transition-colors">Support</a>
        </div>

        <div className="text-xs text-gray-500 font-mono">
          &copy; 2025 CAREVO TECHNOLOGIES. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
