import React from 'react';
import { Heart, Sparkles, Check, Instagram, MapPin, Award, Users, ShieldAlert, Sparkle } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-[#F8F1EB]/60 relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F8C8DC]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C59B7D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8C8DC]/40 border border-[#E8A0BF]/40 text-xs font-semibold text-[#8C4A58] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B7D]" />
            <span>Quem Sou Eu</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight text-balance">
            Nutrição com empatia, embasamento e sem extremismos
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Image in consulting setting (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative border frame */}
              <div className="absolute -inset-3 bg-gradient-to-br from-[#E8A0BF]/30 to-[#C59B7D]/20 rounded-3xl transform -rotate-1 -z-10" />

              {/* Consultation Photo */}
              <div className="rounded-2xl overflow-hidden border-2 border-white shadow-xl bg-white aspect-[5/4] sm:aspect-[4/3]">
                <img
                  src={SITE_DATA.images.consulting}
                  alt="Dra. Danielle Lima em seu consultório elegante no computador com logotipo DL"
                  className="w-full h-full object-cover object-[center_25%] hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = SITE_DATA.images.consultingRemote;
                  }}
                />
              </div>

              {/* Float quote card */}
              <div className="absolute -bottom-6 -left-3 sm:-left-6 right-3 sm:right-auto sm:max-w-xs bg-white p-4 rounded-2xl shadow-xl border border-[#E8A0BF]/30">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F8C8DC]/60 flex items-center justify-center text-[#8C4A58] shrink-0">
                    <Heart className="w-4 h-4 fill-[#8C4A58]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-snug">
                      “Comida não é inimiga, é ferramenta de transformação e energia.”
                    </p>
                    <p className="text-[11px] text-[#8C4A58] font-medium mt-1">
                      Dani Lima
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Philosophy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-4">
              Acolhimento real para transformar sua rotina definitiva
            </h3>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              <p>
                Olá, eu sou a <strong className="text-[#8C4A58] font-semibold">Dani Lima</strong>. Minha trajetória na nutrição nasceu da convicção de que você não precisa viver em guerra com o prato nem se privar de momentos especiais com a família para ter o corpo e a saúde que deseja.
              </p>
              
              <p>
                Durante anos vi mulheres sofrendo com dietas da moda: começavam na segunda-feira empolgadas pela <em>motivação</em>, mas na quinta-feira desistiam por exaustão. A verdade que poucos te contam é simples: <strong>a motivação é passageira; o que constrói um físico saudável e duradouro é a constância</strong>. E ninguém consegue ter constância em algo que odeia ou que é insustentável.
              </p>

              <p>
                Por isso, desenvolvi um método focado na <strong>Saúde da Mulher, Estética e Performance</strong> baseado em estratégia pura: entender seus hormônios, modular seu metabolismo, respeitar sua rotina real de trabalho e criar um plano onde você come comida saborosa e viável.
              </p>
            </div>

            {/* Core credentials & facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-[#E8A0BF]/30">
                <Check className="w-4 h-4 text-[#8C4A58] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Nutricionista com Registro Ativo no CRN-4
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-[#E8A0BF]/30">
                <Check className="w-4 h-4 text-[#8C4A58] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Especialista em Saúde da Mulher & Ciclo Hormonal
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-[#E8A0BF]/30">
                <Check className="w-4 h-4 text-[#8C4A58] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Nutrição Esportiva para Hipertrofia & Definição
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/80 border border-[#E8A0BF]/30">
                <Check className="w-4 h-4 text-[#8C4A58] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">
                  Consultório em Seropédica-RJ + Pacientes no Mundo Todo
                </span>
              </div>
            </div>

            {/* Social and Location Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#E8A0BF]/30">
              <a
                href={SITE_DATA.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#8C4A58] hover:text-[#1A1A1A] transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-[#F8C8DC]/50 flex items-center justify-center">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>Siga @danilima.nutri no Instagram</span>
              </a>

              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                <MapPin className="w-4 h-4 text-[#C59B7D]" />
                <span>Seropédica – RJ (Atendimento Presencial e Online)</span>
              </div>
            </div>

          </div>

        </div>

        {/* 3 Pillars Bento Strip with Wellness Physique Asset */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          <div className="p-6 rounded-3xl bg-white border border-[#E8A0BF]/30 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-2xl bg-[#F8C8DC]/50 flex items-center justify-center text-[#8C4A58] mb-4">
              <Heart className="w-5 h-5 fill-[#8C4A58]" />
            </div>
            <h4 className="font-serif-luxury text-lg font-bold text-[#1A1A1A] mb-2">
              01. Acolhimento Sem Julgamento
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Você nunca será julgada pelos seus deslizes passados. Analisamos sua rotina de sono, trabalho e estresse para que o plano se encaixe na sua vida, e não o contrário.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E8A0BF]/30 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-2xl bg-[#C59B7D]/20 flex items-center justify-center text-[#8C4A58] mb-4">
              <Sparkles className="w-5 h-5 text-[#8C4A58]" />
            </div>
            <h4 className="font-serif-luxury text-lg font-bold text-[#1A1A1A] mb-2">
              02. Fisiologia Hormonal Feminina
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              O metabolismo da mulher oscila a cada semana do mês. Periodizamos carboidratos e micronutrientes para domar a TPM, diminuir a retenção e acelerar a queima de gordura.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E8A0BF]/30 shadow-xs hover:shadow-md transition-all">
            <div className="w-10 h-10 rounded-2xl bg-[#25D366]/20 flex items-center justify-center text-[#128C7E] mb-4">
              <Award className="w-5 h-5 text-[#128C7E]" />
            </div>
            <h4 className="font-serif-luxury text-lg font-bold text-[#1A1A1A] mb-2">
              03. Autonomia Para Toda a Vida
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              O objetivo final é você aprender a fazer escolhas com segurança, saber como agir em jantares sociais e viagens, sem nunca mais depender de dietas restritivas.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
