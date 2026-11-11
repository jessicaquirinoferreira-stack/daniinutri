import React, { useState } from 'react';
import { ChevronDown, Sparkles, MessageCircle, HelpCircle } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FCFAF8] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8C8DC]/40 border border-[#E8A0BF]/40 text-xs font-semibold text-[#8C4A58] uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#C59B7D]" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Tudo o que você precisa saber sobre as consultas, o método e o formato de atendimento.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {SITE_DATA.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-white border-[#8C4A58]/40 shadow-sm'
                    : 'bg-white/70 border-slate-200/80 hover:border-[#E8A0BF]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-luxury text-base sm:text-lg font-bold text-[#1A1A1A]">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-[#F8C8DC]/50 rotate-180 text-[#8C4A58]' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-[#E8A0BF]/20 animate-in fade-in duration-200">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center p-8 rounded-3xl bg-[#F8F1EB] border border-[#E8A0BF]/40">
          <h3 className="font-serif-luxury text-xl font-bold text-[#1A1A1A] mb-2">
            Ainda tem alguma dúvida específica?
          </h3>
          <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto">
            Fale diretamente comigo ou com a minha equipe no WhatsApp para esclarecer valores, horários e formatos.
          </p>
          <a
            href={SITE_DATA.brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs sm:text-sm font-bold shadow-md hover:brightness-105 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Tirar dúvidas no WhatsApp: {SITE_DATA.brand.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
