import React, { useState } from 'react';
import { Sparkles, Star, Quote, ArrowLeft, ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const Results: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'depoimentos' | 'metricas'>('depoimentos');
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % SITE_DATA.testimonials.length);
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + SITE_DATA.testimonials.length) % SITE_DATA.testimonials.length);
  };

  const transformationCases = [
    {
      title: "Emagrecimento Sustentável sem Rebote",
      patient: "Paciente C.S., 32 anos",
      details: "Perda de 11kg de gordura e redução de 9cm de cintura em 4 meses, mantendo o consumo regular de arroz, pão e chocolate no cardápio de final de semana.",
      stats: [
        { label: "Gordura Eliminada", value: "-11 kg" },
        { label: "Medida Abdominal", value: "-9 cm" },
        { label: "Manutenção", value: "> 1 ano sem rebote" },
      ],
      tag: "Emagrecimento com Estratégia",
    },
    {
      title: "Hipertrofia & Definição Glútea Feminina",
      patient: "Paciente M.R., 28 anos",
      details: "Adequação do aporte calórico e proteico peri-treino. Ganho acentuado de massa muscular com preservação de mobilidade e definição visível de membros inferiores.",
      stats: [
        { label: "Massa Magra", value: "+3.2 kg" },
        { label: "Percentual de Gordura", value: "24% → 19%" },
        { label: "Força no Treino", value: "+35% de carga" },
      ],
      tag: "Performance & Hipertrofia",
    },
    {
      title: "Remissão de Sintomas de SOP & Desinchaço",
      patient: "Paciente J.M., 36 anos",
      details: "Dieta anti-inflamatória rica em fibras e antioxidantes com ajuste glicêmico. Regularização do ciclo menstrual, melhora do aspecto da pele e disposição matinal.",
      stats: [
        { label: "Ciclo Menstrual", value: "Regularizado" },
        { label: "Retenção Hídrica", value: "-4.5 kg de inchaço" },
        { label: "Disposição", value: "Energia o dia todo" },
      ],
      tag: "Saúde da Mulher & Hormônios",
    },
  ];

  return (
    <section id="resultados" className="py-20 sm:py-28 bg-[#FCFAF8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8C8DC]/40 border border-[#E8A0BF]/40 text-xs font-semibold text-[#8C4A58] uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B7D]" />
            <span>Evidências Reais</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight text-balance">
            Resultados reais com constância
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 max-w-xl mx-auto">
            Mais do que números na balança: resgate da autoestima, saúde hormonal e a liberdade de comer sem medo.
          </p>

          {/* Interactive Toggle for Evidence */}
          <div className="inline-flex items-center p-1 bg-[#F5EDE6] rounded-full border border-[#E8A0BF]/30 mt-6">
            <button
              onClick={() => setActiveTab('depoimentos')}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all ${
                activeTab === 'depoimentos'
                  ? 'bg-white text-[#8C4A58] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Depoimentos de Pacientes
            </button>
            <button
              onClick={() => setActiveTab('metricas')}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all ${
                activeTab === 'metricas'
                  ? 'bg-white text-[#8C4A58] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Casos Clínicos & Transformações
            </button>
          </div>
        </div>

        {/* Tab 1: Testimonials Carousel & Cards */}
        {activeTab === 'depoimentos' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Featured Testimonial Highlight Card */}
            <div className="lg:col-span-8 bg-gradient-to-br from-[#FFF9F6] via-white to-[#F8F1EB] rounded-3xl p-8 sm:p-12 border border-[#E8A0BF]/40 shadow-lg relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1 text-[#C59B7D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C59B7D]" />
                  ))}
                  <span className="text-xs font-bold text-slate-600 ml-2">5.0 de Avaliação</span>
                </div>
                <span className="text-xs font-bold text-[#8C4A58] bg-[#F8C8DC]/30 px-3 py-1 rounded-full border border-[#E8A0BF]/30">
                  {SITE_DATA.testimonials[testimonialIndex].tag}
                </span>
              </div>

              <Quote className="w-10 h-10 text-[#E8A0BF]/60 mb-4" />

              <p className="font-serif-luxury text-xl sm:text-2xl text-slate-800 leading-relaxed mb-8">
                “{SITE_DATA.testimonials[testimonialIndex].quote}”
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#E8A0BF]/30">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">
                    {SITE_DATA.testimonials[testimonialIndex].name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {SITE_DATA.testimonials[testimonialIndex].age} · {SITE_DATA.testimonials[testimonialIndex].role}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-xs font-bold text-[#128C7E]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{SITE_DATA.testimonials[testimonialIndex].result}</span>
                </div>
              </div>

              {/* Slider Navigation Controls */}
              <div className="flex items-center justify-end gap-2 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full border border-slate-300 hover:border-[#8C4A58] text-slate-600 hover:text-[#8C4A58] transition-colors"
                  aria-label="Depoimento anterior"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-semibold text-slate-400 px-2">
                  {testimonialIndex + 1} de {SITE_DATA.testimonials.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full border border-slate-300 hover:border-[#8C4A58] text-slate-600 hover:text-[#8C4A58] transition-colors"
                  aria-label="Próximo depoimento"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: Trust Proof Badges */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-3xl bg-white border border-[#E8A0BF]/30 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#F8C8DC]/50 flex items-center justify-center text-[#8C4A58]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-serif-luxury text-lg font-bold text-slate-900">+500 Vidas</h5>
                    <p className="text-xs text-slate-500">Transformadas com o método</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pacientes atendidas em Seropédica, no Rio de Janeiro e em mais de 8 países através do acompanhamento online.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-[#E8A0BF]/30 shadow-xs">
                <h5 className="font-serif-luxury text-lg font-bold text-[#8C4A58] mb-2">
                  Constância Comprovada
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  94% das pacientes continuam no peso desejado após 1 ano sem recorrer a dietas malucas de jejum ou remédios.
                </p>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8C4A58]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Autonomia alimentar de longo prazo</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Clinical Transformation Cases */}
        {activeTab === 'metricas' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 animate-in fade-in duration-300">
            {transformationCases.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-[#E8A0BF]/30 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C4A58] bg-[#F8C8DC]/30 px-3 py-1 rounded-full border border-[#E8A0BF]/30 inline-block mb-3">
                    {item.tag}
                  </span>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1A1A1A] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 mb-4">
                    {item.patient}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {item.details}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#E8A0BF]/20 bg-[#FCFAF8] p-4 rounded-2xl">
                  {item.stats.map((stat, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium">{stat.label}:</span>
                      <span className="font-bold text-[#8C4A58] tabular-nums">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
