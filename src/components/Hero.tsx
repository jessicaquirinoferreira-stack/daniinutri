import React from 'react';
import { MessageCircle, ArrowDownRight, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Background ambient decorative glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#F8C8DC]/30 via-[#F5EDE6]/50 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#E8A0BF]/15 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & High-Converting Value Prop (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Slogan greeting kicker */}
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-[#C59B7D]" />
              <span className="font-serif-luxury italic text-lg sm:text-xl text-[#8C4A58] font-medium tracking-wide">
                {SITE_DATA.brand.slogan}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight leading-[1.12] mb-5 text-balance">
              Nutrição estratégica, feminina e{' '}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#8C4A58] via-[#B76E79] to-[#C59B7D]">
                sustentável.
              </span>
            </h1>

            {/* Subtitle with specialties */}
            <p className="text-base sm:text-lg font-medium text-slate-700 mb-6 flex flex-wrap items-center gap-2">
              <span className="font-semibold text-[#8C4A58]">Dra. Danielle Lima</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600">Saúde da Mulher</span>
              <span className="text-[#C59B7D] font-bold">·</span>
              <span className="text-slate-600">Estética</span>
              <span className="text-[#C59B7D] font-bold">·</span>
              <span className="text-slate-600">Performance</span>
            </p>

            {/* Core Impact Quote Banner */}
            <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#F8F1EB] to-[#F5EDE6] border border-[#E8A0BF]/35 mb-6 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-[#E8A0BF]/20 text-[#8C4A58] shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-serif-luxury text-lg sm:text-xl font-bold text-[#1A1A1A] leading-snug tracking-tight">
                    “{SITE_DATA.brand.impactQuote}”
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Abordagem científica focada em emagrecimento e hipertrofia sem extremismos. Sem cortar o que você gosta, sem neuras.
                  </p>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-8 max-w-2xl">
              {SITE_DATA.brand.valueProposition}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href={SITE_DATA.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full shadow-lg shadow-[#25D366]/20 hover:shadow-xl hover:shadow-[#25D366]/30 hover:brightness-105 active:scale-98 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Agende agora no WhatsApp</span>
              </a>

              <a
                href="#metodo"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-800 bg-white hover:bg-[#F8F1EB] border border-[#C59B7D]/40 rounded-full hover:border-[#8C4A58] shadow-xs hover:shadow-sm active:scale-98 transition-all duration-200"
              >
                <span>Conheça meu método</span>
                <ArrowDownRight className="w-4 h-4 text-[#8C4A58]" />
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="pt-6 border-t border-[#E8A0BF]/25 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#8C4A58]" />
                <span>{SITE_DATA.brand.crn}</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Heart className="w-4 h-4 text-[#8C4A58]" />
                <span>Atendimento Humanizado</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#8C4A58]" />
                <span>Presencial em Seropédica – RJ & Online</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Portrait of Dani Lima (5 cols on desktop) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Elegant luxury framing */}
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Backing decorative offset arch */}
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-tr from-[#F8C8DC]/60 via-[#F5EDE6] to-[#C59B7D]/20 rounded-[2.5rem] transform rotate-1 -z-10 shadow-sm" />

              {/* Main Photo Card */}
              <div className="relative rounded-[2.25rem] overflow-hidden border-2 border-white/80 shadow-2xl bg-[#F5EDE6] aspect-[2/3] max-w-sm sm:max-w-md mx-auto">
                <img
                  src={SITE_DATA.images.hero}
                  alt="Retrato Profissional Dra. Danielle Lima - Nutricionista Clínica e Esportiva"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-102"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = SITE_DATA.images.heroRemote;
                  }}
                />

                {/* Subtle soft gradient overlay at bottom for card readability */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/55 via-black/15 to-transparent pointer-events-none" />

                {/* Sub-tag inside the image */}
                <div className="absolute bottom-3 left-3 right-3 p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8A0BF]/40 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={SITE_DATA.images.logo}
                      alt="Logo Oficial Dani Lima"
                      className="h-8 sm:h-9 w-auto object-contain"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = SITE_DATA.images.logoRemote;
                      }}
                    />
                    <div>
                      <p className="font-serif-luxury font-bold text-xs sm:text-sm text-[#1A1A1A] leading-tight">
                        Dra. Danielle Lima
                      </p>
                      <p className="text-[10px] text-[#8C4A58] font-semibold">
                        Nutricionista Clínica & Esportiva
                      </p>
                    </div>
                  </div>
                  <a
                    href={SITE_DATA.brand.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#8C4A58] hover:text-[#1A1A1A] transition-colors whitespace-nowrap"
                  >
                    {SITE_DATA.brand.instagramHandle}
                  </a>
                </div>
              </div>

              {/* Floating aesthetic feature card (top-left) */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-[#E8A0BF]/30 hidden sm:flex items-center gap-3 max-w-[210px]">
                <div className="w-9 h-9 rounded-xl bg-[#F8C8DC]/50 flex items-center justify-center text-[#8C4A58] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 leading-tight">
                    Sem Restrições
                  </p>
                  <p className="text-[10px] text-slate-500 leading-tight mt-0.5">
                    Resultados reais com autonomia
                  </p>
                </div>
              </div>

              {/* Floating aesthetic feature card (bottom-right) */}
              <div className="absolute -bottom-5 -right-4 sm:-bottom-6 sm:-right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-[#E8A0BF]/30 hidden sm:flex items-center gap-3 max-w-[220px]">
                <div className="w-9 h-9 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#128C7E] shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-800 leading-tight">
                    Suporte Direto
                  </p>
                  <p className="text-[10px] text-slate-500 leading-tight mt-0.5">
                    WhatsApp durante o tratamento
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 4 Differentials Strip below hero */}
        <div className="mt-16 pt-10 border-t border-[#E8A0BF]/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_DATA.differentials.map((diff, index) => (
              <div
                key={diff.title}
                className="p-5 rounded-2xl bg-white/70 backdrop-blur-xs border border-[#E8A0BF]/20 shadow-xs hover:border-[#8C4A58]/40 hover:bg-white hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-2 text-xs font-bold text-[#8C4A58] uppercase tracking-wider">
                  <span>0{index + 1}</span>
                  <span className="w-4 h-px bg-[#C59B7D]" />
                </div>
                <h3 className="font-serif-luxury text-base font-bold text-[#1A1A1A] mb-1.5 group-hover:text-[#8C4A58] transition-colors">
                  {diff.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {diff.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
