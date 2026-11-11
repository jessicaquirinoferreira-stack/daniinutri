/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Specialties } from './components/Specialties';
import { MealSimulator } from './components/MealSimulator';
import { Method } from './components/Method';
import { InteractiveComparison } from './components/InteractiveComparison';
import { HydrationCalculator } from './components/HydrationCalculator';
import { Modalities } from './components/Modalities';
import { NutriQuiz } from './components/NutriQuiz';
import { Results } from './components/Results';
import { TargetAudience } from './components/TargetAudience';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingRightActions } from './components/FloatingRightActions';
import { VirtualAssistantLeft } from './components/VirtualAssistantLeft';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FCFAF8] text-[#1A1A1A] selection:bg-[#E8A0BF]/30 selection:text-[#1A1A1A]">
      {/* Header bar */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section (Impactful portrait, slogan, impact quote, CTAs) */}
        <Hero />

        {/* 2. Sobre / Quem sou eu (Filosofia sem extremismos, acolhimento, credenciais) */}
        <About />

        {/* 3. Especialidades com Cards e Modais Interativos */}
        <Specialties />

        {/* 4. Simulador Interativo de Cardápio Flexível (Comer sem culpa na prática) */}
        <MealSimulator />

        {/* 5. Método de Acompanhamento (Os 4 passos para a constância) */}
        <Method />

        {/* 6. A Virada de Chave (Comparativo Antes/Depois + Áudio de Paciente) */}
        <InteractiveComparison />

        {/* 7. Calculadora Interativa de Hidratação & Proteína (Skill Interativa) */}
        <HydrationCalculator />

        {/* 8. Modalidades de Atendimento (Presencial em Seropédica-RJ vs Online) */}
        <Modalities />

        {/* 9. Diagnóstico Rápido de Perfil (Foco em Alta Conversão) */}
        <NutriQuiz />

        {/* 10. Resultados & Depoimentos Reais */}
        <Results />

        {/* 11. Para Quem É (e Para Quem Não É) */}
        <TargetAudience />

        {/* 12. Perguntas Frequentes (FAQ) */}
        <FAQ />

        {/* 13. Chamada Final para Ação */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lado Direito: Botões oficiais flutuantes do Instagram e do WhatsApp */}
      <FloatingRightActions />

      {/* Lado Esquerdo: Assistente Virtual humanizada Ana tirando dúvidas e direcionando */}
      <VirtualAssistantLeft />
    </div>
  );
}
