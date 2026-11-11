import React, { useState } from 'react';
import { MapPin, Globe, Check, MessageCircle, Sparkles, Building2, Laptop } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const Modalities: React.FC = () => {
  const [selectedModality, setSelectedModality] = useState<'presencial' | 'online'>('presencial');

  return (
    <section className="py-20 sm:py-28 bg-[#FCFAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8C8DC]/40 border border-[#E8A0BF]/40 text-xs font-semibold text-[#8C4A58] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B7D]" />
            <span>Formatos de Atendimento</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Presencial em Seropédica ou Online
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Escolha o formato que melhor se adapta à sua conveniência com o mesmo padrão de excelência clínica e suporte.
          </p>

          {/* Selector Switch on Mobile / Quick Tab */}
          <div className="inline-flex items-center p-1 bg-[#F5EDE6] rounded-full border border-[#E8A0BF]/30 mt-6 lg:hidden">
            <button
              onClick={() => setSelectedModality('presencial')}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all ${
                selectedModality === 'presencial'
                  ? 'bg-white text-[#8C4A58] shadow-xs'
                  : 'text-slate-600'
              }`}
            >
              Presencial (Seropédica)
            </button>
            <button
              onClick={() => setSelectedModality('online')}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all ${
                selectedModality === 'online'
                  ? 'bg-white text-[#8C4A58] shadow-xs'
                  : 'text-slate-600'
              }`}
            >
              Online (Brasil / Exterior)
            </button>
          </div>
        </div>

        {/* 2 Big Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Presencial Card (with Clinic Photo) */}
          <div
            className={`rounded-3xl overflow-hidden bg-white border transition-all duration-300 flex flex-col justify-between shadow-xl ${
              selectedModality === 'presencial' ? 'border-[#8C4A58] ring-1 ring-[#8C4A58]/20' : 'border-[#E8A0BF]/40'
            }`}
          >
            <div>
              {/* Clinic Photo Header */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={SITE_DATA.images.clinicSession}
                  alt="Dra. Danielle Lima em consulta clínica com paciente em Seropédica"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#F8C8DC] block">
                      Consultório Físico
                    </span>
                    <h3 className="font-serif-luxury text-2xl font-bold">
                      Presencial em Seropédica – RJ
                    </h3>
                  </div>
                  <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Experiência presencial acolhedora em consultório privativo, climatizado e equipado com bioimpedância clínica de alta precisão.
                </p>

                <div className="space-y-3 pt-2">
                  {SITE_DATA.modalities[0].features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#F8C8DC]/50 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#8C4A58]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card CTA */}
            <div className="p-6 sm:p-8 pt-0">
              <a
                href={`https://wa.me/5521966665918?text=${encodeURIComponent('Olá Dani! Gostaria de agendar uma consulta PRESENCIAL em Seropédica-RJ.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-gradient-to-r from-[#8C4A58] to-[#A35967] hover:from-[#733543] hover:to-[#8C4A58] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <MapPin className="w-4 h-4" />
                <span>Agendar Consulta Presencial</span>
              </a>
            </div>
          </div>

          {/* Online Card */}
          <div
            className={`rounded-3xl overflow-hidden bg-white border transition-all duration-300 flex flex-col justify-between shadow-xl ${
              selectedModality === 'online' ? 'border-[#8C4A58] ring-1 ring-[#8C4A58]/20' : 'border-[#E8A0BF]/40'
            }`}
          >
            <div>
              {/* Online Photo Header */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={SITE_DATA.images.consulting}
                  alt="Dra. Danielle Lima atendimento online e suporte individualizado"
                  className="w-full h-full object-cover object-[center_30%] hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = SITE_DATA.images.consultingRemote;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 text-white flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#F8C8DC] block">
                      Sem Fronteiras
                    </span>
                    <h3 className="font-serif-luxury text-2xl font-bold">
                      Online (Brasil & Exterior)
                    </h3>
                  </div>
                  <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md">
                    <Laptop className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-sm text-slate-700 leading-relaxed">
                  Mesma profundidade, duração e acolhimento da consulta presencial, no conforto da sua casa com prontuário digital e suporte no WhatsApp.
                </p>

                <div className="space-y-3 pt-2">
                  {SITE_DATA.modalities[1].features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#128C7E]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card CTA */}
            <div className="p-6 sm:p-8 pt-0">
              <a
                href={`https://wa.me/5521966665918?text=${encodeURIComponent('Olá Dani! Gostaria de agendar uma consulta ONLINE de onde estou.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs sm:text-sm font-bold shadow-md hover:brightness-105 transition-all"
              >
                <Globe className="w-4 h-4" />
                <span>Agendar Consulta Online</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
