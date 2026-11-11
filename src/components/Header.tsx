import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Sparkles } from 'lucide-react';
import { SITE_DATA } from '../data/content';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Método', href: '#metodo' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FCFAF8]/95 backdrop-blur-md shadow-xs border-b border-[#E8A0BF]/25 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Official Brand Logo */}
          <a
            href="#inicio"
            className="flex items-center group whitespace-nowrap shrink-0"
            aria-label="Dani Lima Nutricionista"
          >
            <img
              src={SITE_DATA.images.logo}
              alt="Logotipo Oficial Dra. Danielle Lima Nutricionista"
              className="h-11 sm:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-xs"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback to remote URL if local load fails
                (e.currentTarget as HTMLImageElement).src = SITE_DATA.images.logoRemote;
              }}
            />
          </a>

          {/* Zone 2: Navigation Links (single-line, clean typography) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#B76E79] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#B76E79] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action (WhatsApp button) & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={SITE_DATA.brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full hover:shadow-md hover:brightness-105 active:scale-98 transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Agendar Consulta</span>
            </a>

            {/* Mobile Hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#B76E79] hover:bg-[#F5EDE6]/60 transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-[#FCFAF8] border border-[#E8A0BF]/30 rounded-2xl shadow-xl space-y-3 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-slate-800 font-medium hover:bg-[#F5EDE6] hover:text-[#B76E79] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-[#E8A0BF]/20 flex flex-col gap-2">
              <a
                href={SITE_DATA.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 flex items-center justify-center gap-2 text-white bg-[#25D366] rounded-xl font-semibold text-sm shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </a>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
                <Sparkles className="w-3.5 h-3.5 text-[#C59B7D]" />
                <span>Seropédica – RJ & Online para todo o Brasil</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
