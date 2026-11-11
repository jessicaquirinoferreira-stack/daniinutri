import React, { useState } from 'react';
import { Droplet, Flame, Dumbbell, Sparkles, MessageCircle, ArrowRight, Activity, ShieldCheck } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const HydrationCalculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(64);
  const [activityLevel, setActivityLevel] = useState<'leve' | 'moderado' | 'intenso'>('moderado');
  const [goal, setGoal] = useState<'emagrecimento' | 'hipertrofia' | 'saude'>('emagrecimento');

  // Clinical calculation: 35ml/kg for light, 40ml/kg for moderate, 45ml/kg for intense
  const waterPerKg = activityLevel === 'leve' ? 35 : activityLevel === 'moderado' ? 40 : 45;
  const totalWaterMl = Math.round(weight * waterPerKg);
  const totalWaterLiters = (totalWaterMl / 1000).toFixed(1);
  const totalCups = Math.round(totalWaterMl / 250);

  // Protein targets based on scientific recommendations
  let minProteinPerKg = 1.4;
  let maxProteinPerKg = 1.8;
  if (goal === 'hipertrofia') {
    minProteinPerKg = 1.6;
    maxProteinPerKg = 2.2;
  } else if (goal === 'saude') {
    minProteinPerKg = 1.2;
    maxProteinPerKg = 1.6;
  }

  const minProteinGrams = Math.round(weight * minProteinPerKg);
  const maxProteinGrams = Math.round(weight * maxProteinPerKg);

  const getCustomAdvice = () => {
    if (goal === 'emagrecimento') {
      return "Para queima de gordura preservando o tônus, distribua a proteína ao longo de 4 a 5 refeições. A água é indispensável para evitar retenção hídrica que confunde a balança.";
    }
    if (goal === 'hipertrofia') {
      return "Para volume e densidade muscular, garanta um aporte proteico robusto no pós-treino e hidratação celular contínua para bombear nutrientes para o músculo.";
    }
    return "Para equilíbrio hormonal e alívio de sintomas pré-menstruais, hidrate-se com consistência principalmente na segunda metade do ciclo (fase lútea).";
  };

  const getWhatsAppCalcLink = () => {
    const text = encodeURIComponent(
      `Olá, Dani! Calculei minhas metas na ferramenta do site:\n` +
      `⚖️ Peso: ${weight}kg\n` +
      `💧 Meta de água: ${totalWaterLiters}L/dia (${totalCups} copos)\n` +
      `🥩 Faixa proteica: ${minProteinGrams}g a ${maxProteinGrams}g/dia\n` +
      `🎯 Objetivo: ${goal === 'emagrecimento' ? 'Emagrecimento' : goal === 'hipertrofia' ? 'Hipertrofia' : 'Saúde Hormonal'}\n\n` +
      `Gostaria de agendar minha consulta para transformar essas metas em um plano real!`
    );
    return `https://wa.me/5521966665918?text=${text}`;
  };

  return (
    <section className="py-20 sm:py-28 bg-[#F8F1EB]/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8C8DC]/40 border border-[#E8A0BF]/40 text-xs font-semibold text-[#8C4A58] uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5 text-[#C59B7D]" />
            <span>Calculadora Interativa</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Metas de Hidratação & Proteína
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            Ajuste os controles abaixo e veja a estimativa metabólica ideal para o seu corpo e objetivo.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8A0BF]/40 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Weight Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-bold text-slate-800">
                  Seu peso aproximado:
                </label>
                <span className="font-serif-luxury text-xl font-bold text-[#8C4A58] tabular-nums">
                  {weight} kg
                </span>
              </div>
              <input
                type="range"
                min="45"
                max="130"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full h-2.5 bg-[#F5EDE6] rounded-lg appearance-none cursor-pointer accent-[#8C4A58]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>45 kg</span>
                <span>85 kg</span>
                <span>130 kg</span>
              </div>
            </div>

            {/* Activity Level Selector */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
                Frequência de atividade física:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setActivityLevel('leve')}
                  className={`p-3 rounded-2xl text-xs font-semibold border transition-all cursor-pointer ${
                    activityLevel === 'leve'
                      ? 'bg-[#8C4A58] text-white border-[#8C4A58] shadow-xs'
                      : 'bg-[#FCFAF8] text-slate-700 border-slate-200 hover:border-[#E8A0BF]'
                  }`}
                >
                  Sedentária / 1-2x
                </button>
                <button
                  type="button"
                  onClick={() => setActivityLevel('moderado')}
                  className={`p-3 rounded-2xl text-xs font-semibold border transition-all cursor-pointer ${
                    activityLevel === 'moderado'
                      ? 'bg-[#8C4A58] text-white border-[#8C4A58] shadow-xs'
                      : 'bg-[#FCFAF8] text-slate-700 border-slate-200 hover:border-[#E8A0BF]'
                  }`}
                >
                  Treino 3-4x/sem
                </button>
                <button
                  type="button"
                  onClick={() => setActivityLevel('intenso')}
                  className={`p-3 rounded-2xl text-xs font-semibold border transition-all cursor-pointer ${
                    activityLevel === 'intenso'
                      ? 'bg-[#8C4A58] text-white border-[#8C4A58] shadow-xs'
                      : 'bg-[#FCFAF8] text-slate-700 border-slate-200 hover:border-[#E8A0BF]'
                  }`}
                >
                  Intenso 5-6x/sem
                </button>
              </div>
            </div>

            {/* Goal Selector */}
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-2">
                Objetivo principal:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setGoal('emagrecimento')}
                  className={`p-3 rounded-2xl text-xs font-semibold border transition-all cursor-pointer ${
                    goal === 'emagrecimento'
                      ? 'bg-[#8C4A58] text-white border-[#8C4A58] shadow-xs'
                      : 'bg-[#FCFAF8] text-slate-700 border-slate-200 hover:border-[#E8A0BF]'
                  }`}
                >
                  Emagrecimento
                </button>
                <button
                  type="button"
                  onClick={() => setGoal('hipertrofia')}
                  className={`p-3 rounded-2xl text-xs font-semibold border transition-all cursor-pointer ${
                    goal === 'hipertrofia'
                      ? 'bg-[#8C4A58] text-white border-[#8C4A58] shadow-xs'
                      : 'bg-[#FCFAF8] text-slate-700 border-slate-200 hover:border-[#E8A0BF]'
                  }`}
                >
                  Hipertrofia
                </button>
                <button
                  type="button"
                  onClick={() => setGoal('saude')}
                  className={`p-3 rounded-2xl text-xs font-semibold border transition-all cursor-pointer ${
                    goal === 'saude'
                      ? 'bg-[#8C4A58] text-white border-[#8C4A58] shadow-xs'
                      : 'bg-[#FCFAF8] text-slate-700 border-slate-200 hover:border-[#E8A0BF]'
                  }`}
                >
                  Saúde / TPM
                </button>
              </div>
            </div>

          </div>

          {/* Live Diagnostic Output (6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#FFF9F6] via-[#FCFAF8] to-[#F8F1EB] rounded-2xl p-6 sm:p-7 border border-[#E8A0BF]/40 flex flex-col justify-between">
            <div>
              
              <div className="flex items-center justify-between pb-4 border-b border-[#E8A0BF]/30 mb-5">
                <span className="text-xs font-bold text-[#8C4A58] uppercase tracking-wider">
                  Suas Metas Diárias Recomendadas
                </span>
                <span className="text-[11px] text-slate-500 font-medium">
                  {SITE_DATA.brand.crn}
                </span>
              </div>

              {/* Water Result */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E8A0BF]/30 shadow-xs mb-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#E8A0BF]/20 flex items-center justify-center text-[#8C4A58] shrink-0">
                  <Droplet className="w-6 h-6 fill-[#8C4A58]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Hidratação Estratégica</span>
                  <p className="font-serif-luxury text-xl font-bold text-slate-900">
                    {totalWaterLiters} Litros <span className="text-xs font-normal text-slate-500">(aprox. {totalCups} copos de 250ml)</span>
                  </p>
                </div>
              </div>

              {/* Protein Result */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-[#E8A0BF]/30 shadow-xs mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#C59B7D]/20 flex items-center justify-center text-[#8C4A58] shrink-0">
                  <Dumbbell className="w-6 h-6 text-[#8C4A58]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Faixa de Proteína Diária</span>
                  <p className="font-serif-luxury text-xl font-bold text-slate-900">
                    {minProteinGrams}g a {maxProteinGrams}g <span className="text-xs font-normal text-slate-500">por dia</span>
                  </p>
                </div>
              </div>

              {/* Doctor's personalized tip */}
              <div className="p-3.5 rounded-xl bg-[#F8F1EB] border border-[#E8A0BF]/20 text-xs text-slate-700 leading-relaxed mb-6">
                <strong className="text-[#8C4A58] font-bold block mb-1">Orientação da Dra. Dani Lima:</strong>
                {getCustomAdvice()}
              </div>

            </div>

            {/* Direct WhatsApp Action with pre-filled numbers */}
            <a
              href={getWhatsAppCalcLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-xs sm:text-sm font-bold shadow-md hover:brightness-105 active:scale-98 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Receber Plano Calculado no WhatsApp</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
