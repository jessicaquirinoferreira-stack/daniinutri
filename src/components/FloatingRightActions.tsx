import React, { useState } from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const FloatingRightActions: React.FC = () => {
  const [hoveredBtn, setHoveredBtn] = useState<'whatsapp' | 'instagram' | null>(null);

  return (
    <aside
      aria-label="Contatos rápidos nas redes sociais"
      className="fixed bottom-6 right-5 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* 1. Official Instagram Floating Button */}
      <div className="relative flex items-center">
        {/* Tooltip on hover */}
        {hoveredBtn === 'instagram' && (
          <div className="absolute right-16 mr-1 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-xl animate-in fade-in slide-in-from-right-2 duration-150 pointer-events-none flex items-center gap-1.5 border border-white/10">
            <span>Instagram @danilima.nutri</span>
            <div className="w-2 h-2 bg-slate-900 rotate-45 absolute -right-1 top-1/2 -translate-y-1/2 border-r border-t border-white/10" />
          </div>
        )}

        <a
          href={SITE_DATA.brand.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredBtn('instagram')}
          onMouseLeave={() => setHoveredBtn(null)}
          className="w-13 h-13 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-108 active:scale-95 transition-all duration-200 cursor-pointer group"
          aria-label="Abrir Instagram oficial @danilima.nutri"
        >
          <Instagram className="w-6 h-6 text-white group-hover:rotate-6 transition-transform duration-200" />
        </a>
      </div>

      {/* 2. Official WhatsApp Floating Button */}
      <div className="relative flex items-center">
        {/* Tooltip on hover */}
        {hoveredBtn === 'whatsapp' && (
          <div className="absolute right-16 mr-1 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-xl animate-in fade-in slide-in-from-right-2 duration-150 pointer-events-none flex items-center gap-1.5 border border-white/10">
            <span>Conversar no WhatsApp</span>
            <div className="w-2 h-2 bg-slate-900 rotate-45 absolute -right-1 top-1/2 -translate-y-1/2 border-r border-t border-white/10" />
          </div>
        )}

        <a
          href={SITE_DATA.brand.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredBtn('whatsapp')}
          onMouseLeave={() => setHoveredBtn(null)}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-108 active:scale-95 transition-all duration-200 cursor-pointer relative group"
          aria-label="Abrir conversa no WhatsApp oficial (21) 96666-5918"
        >
          <MessageCircle className="w-7 h-7 fill-white group-hover:scale-110 transition-transform duration-200" />
          {/* Subtle online badge */}
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
        </a>
      </div>
    </aside>
  );
};
