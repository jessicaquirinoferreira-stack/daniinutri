import React from 'react';
import { MessageCircle, MapPin, Sparkles, Instagram, Clock, ShieldCheck } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const FinalCTA: React.FC = () => {
  return (
    <section id="contato" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-br from-[#F8C8DC]/40 via-[#F5EDE6] to-[#F8F1EB]">
      {/* Background ambient blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E8A0BF]/25 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C59B7D]/15 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/85 backdrop-blur-md rounded-3xl p-8 sm:p-14 border border-[#E8A0BF]/50 shadow-2xl text-center">
          
          {/* Slogan pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8C8DC]/50 border border-[#E8A0BF]/50 text-xs font-semibold text-[#8C4A58] uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B7D]" />
            <span>Sua Nova Fase Começa Aqui</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight leading-tight mb-5 text-balance">
            Cansada de tentar sozinha?
          </h2>

          {/* Value Proposition */}
          <p className="text-base sm:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto mb-8 font-serif-luxury">
            “Com acompanhamento nutricional, você pode cuidar da sua alimentação de forma leve e possível.”
          </p>

          <p className="text-sm text-slate-600 max-w-lg mx-auto mb-10 leading-relaxed">
            Dê adeus ao sentimento de culpa e às dietas que duram só até quarta-feira. Agende sua consulta e vamos construir juntos o seu melhor plano.
          </p>

          {/* Large WhatsApp CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={SITE_DATA.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full shadow-xl shadow-[#25D366]/25 hover:shadow-2xl hover:brightness-105 active:scale-98 transition-all duration-200"
            >
              <MessageCircle className="w-6 h-6 fill-white" />
              <span>Agendar Agora no WhatsApp</span>
            </a>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-slate-700 mb-8">
            WhatsApp Oficial: <span className="text-[#8C4A58] font-bold">{SITE_DATA.brand.phoneDisplay}</span>
          </p>

          {/* Trust badges footer */}
          <div className="pt-8 border-t border-[#E8A0BF]/30 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-[#8C4A58]" />
              <span>{SITE_DATA.brand.location} & Online</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-[#8C4A58]" />
              <span>Atendimento com Hora Marcada</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#8C4A58]" />
              <span>Registro Profissional {SITE_DATA.brand.crn}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
