import React from 'react';
import { Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const InteractiveComparison: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FCFAF8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8C8DC]/40 border border-[#E8A0BF]/40 text-xs font-semibold text-[#8C4A58] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B7D]" />
            <span>A Virada de Chave</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            A diferença de viver com Constância
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Veja a transformação de mentalidade e rotina que acontece quando abandonamos os extremismos.
          </p>
        </div>

        {/* 2-Side Interactive Visual Contrast Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card: Sem o Método (O Ciclo da Frustração) */}
          <div className="lg:col-span-6 bg-white/80 rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3.5 py-1.5 rounded-full">
                  Sem Acompanhamento Estratégico
                </span>
                <XCircle className="w-5 h-5 text-slate-400" />
              </div>

              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-slate-700 mb-6">
                O ciclo exaustivo da motivação passageira
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <p>Começa na segunda-feira cortando tudo, passa fome e fica de mau humor.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <p>Terrorismo com comida: sente culpa profunda ao comer uma fatia de bolo ou pão.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <p>Final de semana desregulado que apaga todo o esforço por falta de flexibilidade.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <p>Efeito sanfona constante: perde 3kg de água e ganha 4kg de gordura no mês seguinte.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 text-[11px] text-slate-400">
              Resultado: Frustração, metabolismo lento e desânimo.
            </div>
          </div>

          {/* Card: Com a Dani Lima (A Revolução da Constância) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#FFF9F6] via-white to-[#F8F1EB] rounded-3xl p-7 sm:p-10 border-2 border-[#8C4A58]/40 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F8C8DC]/30 rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C4A58] bg-[#F8C8DC]/40 px-3.5 py-1.5 rounded-full">
                  Com o Método Dani Lima
                </span>
                <CheckCircle2 className="w-5 h-5 text-[#8C4A58]" />
              </div>

              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-6">
                Constância leve, sem neurose e com definição
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-800">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8C4A58]/15 text-[#8C4A58] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p>Plano alimentar personalizado com arroz, pão e alimentos que você ama.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8C4A58]/15 text-[#8C4A58] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p>Paz com o espelho: perda progressiva de gordura preservando o tônus e a massa magra.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8C4A58]/15 text-[#8C4A58] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p>Suporte diário no WhatsApp para nunca se sentir sozinha em restaurantes ou viagens.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8C4A58]/15 text-[#8C4A58] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <p>Resultados sustentáveis que viram estilo de vida natural para sempre.</p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#E8A0BF]/30 flex items-center justify-between">
              <span className="text-xs font-bold text-[#8C4A58]">
                Resultado: Autoestima recuperada e saúde definitiva.
              </span>
              <a
                href={SITE_DATA.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-slate-800 hover:text-[#8C4A58] transition-colors"
              >
                Quero essa mudança →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
