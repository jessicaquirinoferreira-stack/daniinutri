import React from 'react';
import { 
  Check, 
  Sparkles, 
  MessageCircle, 
  Calendar, 
  FileText, 
  TrendingUp, 
  ArrowRight 
} from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const Method: React.FC = () => {
  const stepIcons = [
    <FileText className="w-5 h-5 text-[#8C4A58]" key="1" />,
    <Calendar className="w-5 h-5 text-[#8C4A58]" key="2" />,
    <MessageCircle className="w-5 h-5 text-[#8C4A58]" key="3" />,
    <TrendingUp className="w-5 h-5 text-[#8C4A58]" key="4" />,
  ];

  return (
    <section id="metodo" className="py-20 sm:py-28 bg-[#FCFAF8] relative overflow-hidden">
      
      {/* Background soft tone */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with the core Quote */}
        <div className="relative rounded-3xl bg-gradient-to-r from-[#8C4A58] via-[#A35967] to-[#B76E79] text-white p-8 sm:p-12 mb-20 shadow-xl overflow-hidden">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-semibold uppercase tracking-widest text-rose-100 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#F8C8DC]" />
              <span>O Princípio Inegociável</span>
            </div>
            <h2 className="font-serif-luxury text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-balance">
              “{SITE_DATA.brand.impactQuote}”
            </h2>
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed max-w-2xl">
              Dietas baseadas em restrição extrema dependem 100% de motivação. Quando o cansaço bate ou a rotina aperta, a motivação acaba. O meu método constrói constância através de estratégias práticas que você consegue manter por anos.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold text-rose-200">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-white" /> Plano alimentar flexível
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-white" /> Acompanhamento personalizado
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-white" /> Sem dietas restritivas
              </span>
            </div>
          </div>
        </div>

        {/* Section title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8C8DC]/40 border border-[#E8A0BF]/40 text-xs font-semibold text-[#8C4A58] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B7D]" />
            <span>Passo a Passo</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Como funciona o acompanhamento
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Do primeiro diagnóstico à conquista da sua autonomia alimentar definitiva.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
          {SITE_DATA.methodSteps.map((step, idx) => (
            <div
              key={step.step}
              className="relative p-6 sm:p-7 rounded-3xl bg-white border border-[#E8A0BF]/30 shadow-xs hover:shadow-lg hover:border-[#8C4A58]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8C8DC]/40 border border-[#E8A0BF]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {stepIcons[idx]}
                  </div>
                  <span className="font-serif-luxury text-2xl font-bold text-[#C59B7D]">
                    {step.step}
                  </span>
                </div>

                <p className="text-xs font-bold text-[#8C4A58] uppercase tracking-wider mb-1">
                  {step.subtitle}
                </p>
                <h3 className="font-serif-luxury text-lg font-bold text-[#1A1A1A] mb-3 group-hover:text-[#8C4A58] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#E8A0BF]/20 flex items-center gap-1.5 text-xs font-semibold text-[#8C4A58]">
                <span>Etapa {step.step} do método</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Proof & Balance: 2-column image and context strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F8F1EB]/50 p-8 sm:p-12 rounded-3xl border border-[#E8A0BF]/30">
          
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md border border-white aspect-[3/4]">
              <img
                src={SITE_DATA.images.athlete}
                alt="Dra. Danielle Lima performance e estilo de vida fitness"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = SITE_DATA.images.athleteRemote;
                }}
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-white aspect-[3/4] mt-6">
              <img
                src={SITE_DATA.images.foodPlate}
                alt="Prato equilibrado de refeição saudável e flexível"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = SITE_DATA.images.foodPlateRemote;
                }}
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center lg:pl-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#8C4A58] mb-2">
              Prática Baseada em Evidência
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">
              Viver bem não é viver de dieta, é saber comer com intenção
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              Eu não apenas prescrevo planos; eu vivo na pele a rotina de treinar, trabalhar, lidar com imprevistos e manter um físico estético e saudável. Meu compromisso com você é entregar o mapa exato para a sua realidade, sem exigir que você se torne outra pessoa para alcançar seus objetivos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={SITE_DATA.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-sm font-bold shadow-md hover:brightness-105 active:scale-98 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Quero iniciar meu acompanhamento</span>
              </a>
              <a
                href="#resultados"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#8C4A58]/30 bg-white hover:bg-[#F5EDE6] text-xs sm:text-sm font-semibold text-[#8C4A58] transition-all"
              >
                <span>Ver transformações reais</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
