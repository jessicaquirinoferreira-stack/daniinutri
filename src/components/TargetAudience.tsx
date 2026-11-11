import React from 'react';
import { CheckCircle2, XCircle, Sparkles, MessageCircle } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F8F1EB]/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8C8DC]/40 border border-[#E8A0BF]/40 text-xs font-semibold text-[#8C4A58] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B7D]" />
            <span>Alinhamento de Expectativas</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Este acompanhamento é para você?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Transparência e honestidade médica em primeiro lugar. Veja se nossa filosofia combina com o seu momento.
          </p>
        </div>

        {/* 2-Column Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          
          {/* Column 1: Para Quem É (Green/Warm Rose Glow) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#8C4A58]/30 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#F8C8DC]/30 rounded-bl-full pointer-events-none -z-0" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C4A58] bg-[#F8C8DC]/40 px-3.5 py-1.5 rounded-full mb-6">
                <CheckCircle2 className="w-4 h-4 text-[#8C4A58]" />
                <span>O Acompanhamento É Para Você Se:</span>
              </div>

              <div className="space-y-4">
                {SITE_DATA.targetAudience.forYou.map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#8C4A58]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-[#8C4A58]" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-800 leading-snug">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#E8A0BF]/30 relative z-10">
              <p className="text-xs font-medium text-slate-600 mb-3">
                Se você se identificou, você está no lugar certo para mudar sua vida com leveza.
              </p>
              <a
                href={SITE_DATA.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#8C4A58] hover:text-[#1A1A1A] transition-colors"
              >
                <span>Iniciar meu acompanhamento agora</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Column 2: Para Quem NÃO É */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/70 border border-slate-200/80 shadow-xs flex flex-col justify-between relative">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 px-3.5 py-1.5 rounded-full mb-6">
                <XCircle className="w-4 h-4 text-slate-400" />
                <span>O Acompanhamento NÃO É Para Você Se:</span>
              </div>

              <div className="space-y-4">
                {SITE_DATA.targetAudience.notForYou.map((text, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                      <XCircle className="w-4 h-4 text-slate-400" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-600 leading-snug">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-slate-200">
              <p className="text-xs text-slate-500 leading-relaxed">
                Priorizo a saúde a longo prazo, ética médica e respeito ao corpo da mulher. Não trabalho com extremismos nocivos.
              </p>
            </div>
          </div>

        </div>

        {/* Quick CTA Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#F5EDE6] to-[#F8F1EB] border border-[#E8A0BF]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium text-slate-800 text-center sm:text-left">
            Pronta para dar o primeiro passo em direção à constância?
          </p>
          <a
            href={SITE_DATA.brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-xs sm:text-sm font-bold shadow-xs hover:brightness-105 transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Falar com a Dani no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
