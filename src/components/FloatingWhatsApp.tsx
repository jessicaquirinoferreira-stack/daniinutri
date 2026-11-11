import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Mini chat prompt card */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-[#E8A0BF]/40 p-4 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#FCFAF8] border border-[#E8A0BF]/40 p-0.5 flex items-center justify-center overflow-hidden shadow-xs">
                  <img
                    src={SITE_DATA.images.logo}
                    alt="Logo Dani Lima"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = SITE_DATA.images.logoRemote;
                    }}
                  />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#25D366] rounded-full border-2 border-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Dra. Dani Lima</h4>
                <p className="text-[10px] text-slate-500">Nutricionista · Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-md"
              aria-label="Fechar janela de WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 mb-3 bg-[#FCFAF8] p-3 rounded-xl border border-slate-100">
            Olá! Seja muito bem-vinda. Como posso te ajudar a transformar sua alimentação com constância hoje?
          </p>

          <a
            href={SITE_DATA.brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Iniciar conversa no WhatsApp</span>
          </a>
        </div>
      )}

      {/* Main floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
        aria-label="Abrir conversa no WhatsApp com Dani Lima"
      >
        <MessageCircle className="w-7 h-7 fill-white" />
      </button>
    </div>
  );
};
