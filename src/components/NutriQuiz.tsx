import React, { useState } from 'react';
import { Sparkles, MessageCircle, ArrowRight, RotateCcw, Check } from 'lucide-react';

export const NutriQuiz: React.FC = () => {
  const [goal, setGoal] = useState<string>('');
  const [obstacle, setObstacle] = useState<string>('');
  const [modality, setModality] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const goals = [
    { id: 'emagrecimento', label: 'Emagrecimento com Estratégia', desc: 'Perder gordura com saciedade e sem efeito sanfona' },
    { id: 'hipertrofia', label: 'Hipertrofia & Tônus Muscular', desc: 'Ganhar massa magra e definição corporal' },
    { id: 'saude', label: 'Saúde Feminina & Hormônios', desc: 'Regular TPM, SOP, disposição e saúde intestinal' },
    { id: 'constancia', label: 'Relação de Paz com a Comida', desc: 'Parar com a culpa e ter constância na rotina' },
  ];

  const obstacles = [
    { id: 'tempo', label: 'Falta de tempo na rotina', desc: 'Preciso de refeições fáceis e rápidas de preparar' },
    { id: 'doces', label: 'Vontade de doces e beliscos', desc: 'Ataques de ansiedade alimentar no fim do dia' },
    { id: 'social', label: 'Finais de semana e vida social', desc: 'Sinto que perco todo o esforço da semana' },
    { id: 'restricao', label: 'Dietas chatas e restritivas', desc: 'Não aguento comer sempre a mesma comida' },
  ];

  const modalities = [
    { id: 'online', label: 'Consulta Online (De qualquer lugar do mundo)', desc: 'Videochamada aprofundada + suporte direto no WhatsApp' },
    { id: 'presencial', label: 'Presencial em Seropédica – RJ', desc: 'Atendimento privativo no consultório físico' },
  ];

  const handleReset = () => {
    setGoal('');
    setObstacle('');
    setModality('');
    setSubmitted(false);
  };

  const selectedGoalLabel = goals.find((g) => g.id === goal)?.label || '';
  const selectedObstacleLabel = obstacles.find((o) => o.id === obstacle)?.label || '';
  const selectedModalityLabel = modalities.find((m) => m.id === modality)?.label || '';

  const generateWhatsAppLink = () => {
    const message = encodeURIComponent(
      `Olá, Dani! Fiz o diagnóstico rápido no seu site e gostaria de agendar uma consulta.\n\n` +
      `🎯 Meu objetivo: ${selectedGoalLabel}\n` +
      `⚡ Minha maior dificuldade: ${selectedObstacleLabel}\n` +
      `📍 Preferência: ${selectedModalityLabel}\n\n` +
      `Como podemos dar o próximo passo para o meu acompanhamento?`
    );
    return `https://wa.me/5521966665918?text=${message}`;
  };

  const isComplete = goal !== '' && obstacle !== '' && modality !== '';

  return (
    <section className="py-20 bg-gradient-to-b from-[#FCFAF8] via-[#F8F1EB] to-[#FCFAF8] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8C8DC]/40 border border-[#E8A0BF]/40 text-xs font-semibold text-[#8C4A58] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B7D]" />
            <span>Ferramenta de Diagnóstico Rápido</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1A1A1A] tracking-tight">
            Descubra o direcionamento ideal para você
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl mx-auto">
            Em menos de 1 minuto, selecione suas preferências e receba um resumo personalizado para alinhar sua consulta com a Dani Lima.
          </p>
        </div>

        {/* Card Frame */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E8A0BF]/40">
          {!submitted ? (
            <div className="space-y-8">
              {/* Question 1 */}
              <div>
                <label className="block font-serif-luxury text-lg font-bold text-[#1A1A1A] mb-3">
                  1. Qual é a sua meta prioritária hoje?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {goals.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGoal(item.id)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        goal === item.id
                          ? 'border-[#8C4A58] bg-[#F8C8DC]/20 shadow-xs'
                          : 'border-slate-200 hover:border-[#E8A0BF] bg-[#FCFAF8]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-slate-900">{item.label}</span>
                        {goal === item.id && <Check className="w-4 h-4 text-[#8C4A58]" />}
                      </div>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div>
                <label className="block font-serif-luxury text-lg font-bold text-[#1A1A1A] mb-3">
                  2. O que tem sido o maior vilão da sua constância?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {obstacles.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setObstacle(item.id)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        obstacle === item.id
                          ? 'border-[#8C4A58] bg-[#F8C8DC]/20 shadow-xs'
                          : 'border-slate-200 hover:border-[#E8A0BF] bg-[#FCFAF8]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-slate-900">{item.label}</span>
                        {obstacle === item.id && <Check className="w-4 h-4 text-[#8C4A58]" />}
                      </div>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3 */}
              <div>
                <label className="block font-serif-luxury text-lg font-bold text-[#1A1A1A] mb-3">
                  3. Qual o modelo de consulta preferido?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {modalities.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setModality(item.id)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        modality === item.id
                          ? 'border-[#8C4A58] bg-[#F8C8DC]/20 shadow-xs'
                          : 'border-slate-200 hover:border-[#E8A0BF] bg-[#FCFAF8]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-bold text-slate-900">{item.label}</span>
                        {modality === item.id && <Check className="w-4 h-4 text-[#8C4A58]" />}
                      </div>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-4 border-t border-[#E8A0BF]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-500">
                  {isComplete ? 'Tudo pronto! Veja sua orientação personalizada.' : 'Selecione as 3 opções para ver seu resumo.'}
                </p>
                <button
                  type="button"
                  disabled={!isComplete}
                  onClick={() => setSubmitted(true)}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-200 ${
                    isComplete
                      ? 'bg-[#8C4A58] text-white hover:bg-[#703643] shadow-md cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <span>Gerar Diagnóstico Personalizado</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Result State */
            <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="p-4 sm:p-6 rounded-2xl bg-[#F8F1EB] border border-[#E8A0BF]/40">
                <div className="flex items-center gap-2 text-xs font-bold text-[#8C4A58] uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Resumo do Seu Perfil</span>
                </div>
                <h3 className="font-serif-luxury text-2xl font-bold text-[#1A1A1A] mb-3">
                  Sua estratégia personalizada está pronta!
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-4">
                  Com base no seu foco em <strong className="text-[#8C4A58]">{selectedGoalLabel}</strong> e o desafio de <strong className="text-[#8C4A58]">{selectedObstacleLabel}</strong>, a abordagem da Dani Lima elimina o terrorismo nutricional e cria substituições estratégicas e suporte contínuo para que você não precise depender de motivação passageira.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs bg-white p-4 rounded-xl border border-[#E8A0BF]/30 mb-4">
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] block">Objetivo</span>
                    <span className="font-bold text-slate-800">{selectedGoalLabel}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] block">Dificuldade</span>
                    <span className="font-bold text-slate-800">{selectedObstacleLabel}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 uppercase tracking-wider text-[10px] block">Formato</span>
                    <span className="font-bold text-slate-800">{selectedModalityLabel}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600">
                  Ao clicar abaixo, sua mensagem será aberta no WhatsApp da Dani Lima com estes dados já preenchidos.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-sm font-bold shadow-lg hover:brightness-105 active:scale-98 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Enviar Diagnóstico e Agendar no WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full border border-slate-300 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Refazer teste</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
