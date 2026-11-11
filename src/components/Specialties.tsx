import React, { useState } from 'react';
import { 
  Flame, 
  Dumbbell, 
  HeartHandshake, 
  Sparkles, 
  Smile, 
  ArrowRight, 
  CheckCircle, 
  X, 
  MessageCircle, 
  ChevronRight 
} from 'lucide-react';
import { SITE_DATA } from '../data/content';

interface Specialty {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  tag: string;
  badge: string;
}

export const Specialties: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);

  // Map icons to specialties
  const getIcon = (id: string) => {
    switch (id) {
      case 'emagrecimento':
        return <Flame className="w-6 h-6 text-[#8C4A58]" />;
      case 'hipertrofia':
        return <Dumbbell className="w-6 h-6 text-[#8C4A58]" />;
      case 'saude-mulher':
        return <HeartHandshake className="w-6 h-6 text-[#8C4A58]" />;
      case 'estetica':
        return <Sparkles className="w-6 h-6 text-[#8C4A58]" />;
      case 'sem-extremismos':
        return <Smile className="w-6 h-6 text-[#8C4A58]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#8C4A58]" />;
    }
  };

  const getCustomWhatsAppLink = (specTitle: string) => {
    const text = encodeURIComponent(
      `Olá, Dani! Vi seu site e gostaria de agendar uma consulta com foco em: ${specTitle}. Como podemos prosseguir?`
    );
    return `https://wa.me/5521966665918?text=${text}`;
  };

  return (
    <section id="especialidades" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8C8DC]/40 border border-[#E8A0BF]/40 text-xs font-semibold text-[#8C4A58] uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B7D]" />
              <span>O Que Eu Faço</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
              Especialidades desenhadas para o seu momento de vida
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            Cada protocolo é planejado respeitando sua individualidade biológica, suas preferências e sua rotina de horários.
          </p>
        </div>

        {/* Asymmetric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SITE_DATA.specialties.map((spec, index) => {
            const isFeatured = index === 0 || index === 1;
            return (
              <div
                key={spec.id}
                onClick={() => setSelectedSpecialty(spec)}
                className={`relative cursor-pointer rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between group ${
                  isFeatured
                    ? 'bg-gradient-to-br from-[#FFF9F6] via-white to-[#F8F1EB] border-2 border-[#E8A0BF]/40 shadow-sm hover:shadow-xl hover:border-[#8C4A58]/60 hover:-translate-y-1'
                    : 'bg-white border border-[#E8A0BF]/30 shadow-xs hover:shadow-lg hover:border-[#8C4A58]/50 hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Top Header inside card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F8C8DC]/40 border border-[#E8A0BF]/30 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                      {getIcon(spec.id)}
                    </div>
                    <span className="text-[11px] font-bold text-[#8C4A58] bg-[#F8C8DC]/30 px-3 py-1 rounded-full border border-[#E8A0BF]/30">
                      {spec.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-2 group-hover:text-[#8C4A58] transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#C59B7D] mb-4">
                    {spec.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {spec.description}
                  </p>
                </div>

                {/* Card Footer Button */}
                <div className="pt-4 border-t border-[#E8A0BF]/20 flex items-center justify-between text-xs font-bold text-[#8C4A58] group-hover:text-[#1A1A1A] transition-colors">
                  <span>Ver detalhes do protocolo</span>
                  <div className="w-8 h-8 rounded-full bg-[#F5EDE6] flex items-center justify-center group-hover:bg-[#8C4A58] group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Deep Specialty Details */}
        {selectedSpecialty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div 
              className="bg-[#FCFAF8] max-w-xl w-full rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E8A0BF]/40 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSpecialty(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F8C8DC]/50 flex items-center justify-center">
                  {getIcon(selectedSpecialty.id)}
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#8C4A58] uppercase tracking-wider">
                    {selectedSpecialty.badge}
                  </span>
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#1A1A1A]">
                    {selectedSpecialty.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                {selectedSpecialty.description}
              </p>

              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-800 mb-3">
                  O que está incluso nesta estratégia:
                </h4>
                <div className="space-y-2.5">
                  {selectedSpecialty.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-[#8C4A58] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#E8A0BF]/30">
                <a
                  href={getCustomWhatsAppLink(selectedSpecialty.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 hover:shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Quero este acompanhamento</span>
                </a>
                <button
                  onClick={() => setSelectedSpecialty(null)}
                  className="py-3 px-5 rounded-full border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  Voltar
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
