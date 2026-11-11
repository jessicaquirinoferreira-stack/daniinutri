import React, { useState } from 'react';
import { Sparkles, Utensils, Clock, CheckCircle2, ChevronRight, MessageCircle } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const MealSimulator: React.FC = () => {
  const [selectedMealIndex, setSelectedMealIndex] = useState(0);
  const currentMeal = SITE_DATA.mealSimulator[selectedMealIndex];

  return (
    <section id="cardapio" className="py-20 sm:py-28 bg-[#FCFAF8] relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#F8C8DC]/20 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#F5EDE6]/60 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8C8DC]/40 border border-[#E8A0BF]/40 text-xs font-semibold text-[#8C4A58] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B7D]" />
            <span>Flexibilidade na Prática</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Como é comer sem extremismos?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-xl mx-auto">
            Navegue pelos momentos do dia e veja opções reais, saborosas e viáveis que fazem parte da rotina das minhas pacientes.
          </p>
        </div>

        {/* Meal Selector Tabs (Functional Segmented Control) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
          {SITE_DATA.mealSimulator.map((item, index) => (
            <button
              key={item.meal}
              onClick={() => setSelectedMealIndex(index)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 ${
                selectedMealIndex === index
                  ? 'bg-[#8C4A58] text-white shadow-md'
                  : 'bg-white hover:bg-[#F5EDE6] text-slate-700 border border-slate-200/80 hover:border-[#E8A0BF]'
              }`}
            >
              {item.meal}
            </button>
          ))}
        </div>

        {/* Interactive Meal Card Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual Planner Card & Real Flatlay Photo (5 cols) */}
          <div className="lg:col-span-5 relative flex flex-col justify-between rounded-3xl overflow-hidden bg-white border border-[#E8A0BF]/40 shadow-xl group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={SITE_DATA.images.plannerJournal}
                alt="Plano alimentar personalizado Dani Lima com caderno e fita métrica"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#F8C8DC]">
                  Individualidade Total
                </span>
                <p className="font-serif-luxury text-lg font-bold">
                  Calculado para sua rotina e preferências
                </p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-white to-[#F8F1EB]">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8C4A58] mb-2">
                <Utensils className="w-4 h-4" />
                <span>Zero Comida Sem Graça</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Você nunca precisará comer nada que detesta. Se não gosta de batata doce ou aveia, substituímos por opções com equivalência nutricional exata.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Meal Options & Explanation (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#E8A0BF]/40 shadow-xl flex flex-col justify-between">
            <div>
              
              {/* Header inside meal card */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#E8A0BF]/20 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#8C4A58] font-bold uppercase tracking-wider mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{currentMeal.time}</span>
                  </div>
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                    {currentMeal.title}
                  </h3>
                </div>

                <span className="text-xs font-bold text-[#8C4A58] bg-[#F8C8DC]/30 px-3.5 py-1.5 rounded-full border border-[#E8A0BF]/30">
                  {currentMeal.macroBadge}
                </span>
              </div>

              {/* Options list */}
              <div className="space-y-3.5 mb-8">
                <p className="text-xs uppercase font-bold tracking-wider text-slate-500">
                  Exemplos de opções práticas para este momento:
                </p>
                {currentMeal.options.map((opt, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-[#FCFAF8] hover:bg-[#F8F1EB]/80 border border-slate-100 hover:border-[#E8A0BF]/40 transition-all flex items-start gap-3.5"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#F8C8DC]/50 text-[#8C4A58] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      {i + 1}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                      {opt}
                    </p>
                  </div>
                ))}
              </div>

              {/* Nutritional Strategy Rationale */}
              <div className="p-4 rounded-2xl bg-[#F8F1EB] border border-[#E8A0BF]/30 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C4A58] block mb-1">
                  Por que funciona:
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {currentMeal.benefit}
                </p>
              </div>

            </div>

            {/* Direct CTA */}
            <div className="pt-4 border-t border-[#E8A0BF]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Quer um cardápio calculado especificamente para os seus horários?
              </span>
              <a
                href={SITE_DATA.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs sm:text-sm font-bold shadow-md hover:brightness-105 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Pedir Meu Cardápio no WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
