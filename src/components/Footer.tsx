import React from 'react';
import { Instagram, MessageCircle, MapPin, Heart } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-slate-300 pt-16 pb-12 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Official Brand Logo */}
            <a href="#inicio" className="inline-block bg-[#FCFAF8] p-3 rounded-2xl border border-[#E8A0BF]/30 shadow-md transition-transform hover:scale-102">
              <img
                src={SITE_DATA.images.logo}
                alt="Logotipo Oficial Dra. Danielle Lima Nutricionista"
                className="h-14 sm:h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = SITE_DATA.images.logoRemote;
                }}
              />
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Nutrição sem extremismos para mulheres que buscam emagrecimento, hipertrofia e equilíbrio hormonal através da constância e acolhimento individualizado.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_DATA.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#8C4A58] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                aria-label="Instagram da Dani Lima"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_DATA.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#25D366] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all"
                aria-label="WhatsApp da Dani Lima"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-[#F8C8DC] transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#F8C8DC] transition-colors">Sobre a Dani Lima</a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-[#F8C8DC] transition-colors">Especialidades</a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-[#F8C8DC] transition-colors">O Método de Constância</a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-[#F8C8DC] transition-colors">Resultados & Depoimentos</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F8C8DC] transition-colors">Perguntas Frequentes</a>
              </li>
            </ul>
          </div>

          {/* Contact & Location Info (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider">
              Atendimento
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8A0BF] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Presencial:</strong> Seropédica – Rio de Janeiro / RJ
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">WhatsApp:</strong> {SITE_DATA.brand.phoneDisplay}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-[#E8A0BF] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Instagram:</strong> @danilima.nutri
                </span>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                Atendimento online com pacientes atendidas em todo o Brasil e no exterior.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Dra. Danielle Lima – Nutricionista. Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Registro Profissional CRN-4</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              Feito com <Heart className="w-3 h-3 text-[#E8A0BF] fill-[#E8A0BF]" /> para mulheres reais
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
