
import React, { useState, useRef, useEffect } from 'react';
import { gemini } from '../services/gemini';

const AIHelper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Welcome to CareVo. How can I assist you with your restaurant operating system today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    const response = await gemini.getChatResponse(userMsg);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'bot', text: response }]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {isOpen ? (
        <div className="w-[350px] h-[500px] bg-white border border-black rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 slide-in-from-right-10 duration-500 cubic-bezier(0.23, 1, 0.32, 1)">
          <div className="p-5 bg-black text-white flex items-center justify-between border-b border-black">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
              <span className="font-black text-xs uppercase tracking-[0.2em]">CareVo OS v2.5</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-lg hover:rotate-90 transition-transform">✕</button>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow p-5 overflow-y-auto space-y-6 no-scrollbar bg-[#fafafa]"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-black text-white rounded-2xl rounded-tr-none shadow-lg' 
                    : 'bg-white border border-gray-100 rounded-2xl rounded-tl-none shadow-sm text-gray-800'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-tl-none flex gap-1.5 shadow-sm">
                  <span className="w-1 h-1 bg-black rounded-full animate-bounce"></span>
                  <span className="w-1 h-1 bg-black rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1 h-1 bg-black rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 bg-white flex gap-2">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="System prompt..."
              className="flex-grow px-4 py-3 bg-gray-50 rounded-xl text-sm outline-none focus:bg-white border border-transparent focus:border-black transition-all font-medium"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className="w-11 h-11 bg-black text-white rounded-xl flex items-center justify-center hover:bg-gray-800 transition-all active:scale-90"
            >
              →
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-black text-white rounded-full shadow-2xl flex items-center justify-center text-3xl hover:scale-110 transition-all transform active:scale-95 group relative border-4 border-white"
        >
          <span className="group-hover:rotate-12 transition-transform">💬</span>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full border-2 border-white"></div>
        </button>
      )}
    </div>
  );
};

export default AIHelper;
