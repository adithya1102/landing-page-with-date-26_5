
import React from 'react';

interface HeaderProps {
  onOpenDemo: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenDemo }) => {
  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-black tracking-tighter">CareVo</div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-sm font-medium text-text-soft hover:text-secondary transition-colors relative group">
          Features
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
        </a>
        <a href="#innovations" className="text-sm font-medium text-text-soft hover:text-secondary transition-colors relative group">
          Innovations
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
        </a>
        <a href="#careers" className="text-sm font-medium text-text-soft hover:text-secondary transition-colors relative group">
          Internships
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
        </a>
        <a href="#contact" className="text-sm font-medium text-text-soft hover:text-secondary transition-colors relative group">
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
        </a>
      </div>

      <button 
        onClick={onOpenDemo}
        className="px-6 py-2 border-1.5 border-primary rounded-lg text-sm font-bold hover:bg-secondary hover:text-white transition-all transform active:scale-95"
      >
        Request Demo
      </button>
    </nav>
  );
};

export default Header;
