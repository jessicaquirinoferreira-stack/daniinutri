import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageCircle, 
  Instagram, 
  X, 
  Send, 
  Sparkles, 
  ChevronRight, 
  MapPin, 
  Heart, 
  Clock 
} from 'lucide-react';
import { SITE_DATA } from '../data/content';

interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  actionType?: 'whatsapp' | 'instagram' | 'both';
  customLink?: string;
  actionLabel?: string;
}

export const VirtualAssistantLeft: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(true);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Olá! Sou a Ana, assistente virtual da Dra. Danielle Lima. Como posso te orientar hoje sobre o acompanhamento nutricional?',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Suggested quick topics
  const quickTopics = [
    { label: '📅 Como agendar consulta?', query: 'agendar' },
    { label: '📍 Onde é o consultório?', query: 'localizacao' },
    { label: '💻 Atende online?', query: 'online' },
    { label: '🥖 É dieta sem carboidrato?', query: 'dieta' },
    { label: '📸 Ver Instagram oficial', query: 'instagram' },
  ];

  const handleSendQuery = (queryText: string) => {
    if (!queryText.trim()) return;

    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: 'user',
      text: queryText,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    // Formulate empathetic assistant response based on keywords
    setTimeout(() => {
      const lower = queryText.toLowerCase();
      let reply: ChatMessage;

      if (lower.includes('agendar') || lower.includes('marcar') || lower.includes('preço') || lower.includes('valor')) {
        reply = {
          id: String(Date.now() + 1),
          sender: 'assistant',
          text: 'Os agendamentos e informações de valores são feitos diretamente pelo WhatsApp oficial da clínica. A Dani tem opções de consulta avulsa com retorno e planos de acompanhamento trimestrais!',
          actionType: 'whatsapp',
          actionLabel: 'Falar com a Dani no WhatsApp',
          customLink: SITE_DATA.brand.whatsappUrl,
        };
      } else if (lower.includes('local') || lower.includes('onde') || lower.includes('seropedica') || lower.includes('endereço')) {
        reply = {
          id: String(Date.now() + 1),
          sender: 'assistant',
          text: 'O consultório físico da Dani fica em Seropédica – RJ, em ambiente privativo e acolhedor com exame de bioimpedância. Ela também atende online para todo o Brasil e exterior!',
          actionType: 'whatsapp',
          actionLabel: 'Agendar Presencial em Seropédica',
          customLink: `https://wa.me/5521966665918?text=${encodeURIComponent('Olá Ana/Dani! Gostaria de informações sobre o consultório em Seropédica.')}`,
        };
      } else if (lower.includes('online') || lower.includes('distancia') || lower.includes('video')) {
        reply = {
          id: String(Date.now() + 1),
          sender: 'assistant',
          text: 'A consulta online é realizada por videochamada com a Dani Lima, com a mesma profundidade e duração da presencial! Você recebe guia de fotos/medidas e suporte diário no WhatsApp.',
          actionType: 'whatsapp',
          actionLabel: 'Quero Atendimento Online',
          customLink: `https://wa.me/5521966665918?text=${encodeURIComponent('Olá Dani! Gostaria de agendar uma consulta online com você.')}`,
        };
      } else if (lower.includes('carboidrato') || lower.includes('restritiva') || lower.includes('fome') || lower.includes('dieta')) {
        reply = {
          id: String(Date.now() + 1),
          sender: 'assistant',
          text: 'Nada de passar fome! O princípio da Dani é Nutrição Sem Extremismos. O plano tem pão, arroz, feijão e chocolate 70% calculados estrategicamente para o seu objetivo.',
          actionType: 'both',
        };
      } else if (lower.includes('instagram') || lower.includes('insta') || lower.includes('rede') || lower.includes('post')) {
        reply = {
          id: String(Date.now() + 1),
          sender: 'assistant',
          text: 'A Dani compartilha diariamente dicas de receitas, rotina de treinos e constância real no Instagram @danilima.nutri!',
          actionType: 'instagram',
          actionLabel: 'Acessar Instagram @danilima.nutri',
          customLink: SITE_DATA.brand.instagramUrl,
        };
      } else {
        reply = {
          id: String(Date.now() + 1),
          sender: 'assistant',
          text: 'Entendi perfeitamente! Para tirar dúvidas detalhadas e receber um plano individualizado, te recomendo conversar diretamente com a Dani no WhatsApp oficial ou acompanhar o dia a dia no Instagram.',
          actionType: 'both',
        };
      }

      setMessages((prev) => [...prev, reply]);
    }, 450);
  };

  return (
    <aside
      aria-label="Assistente Virtual Ana"
      className="fixed bottom-6 left-5 sm:left-6 z-40 flex flex-col items-start pointer-events-auto"
    >
      {/* 1. Chat Window (Expanded State) */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2.5rem)] sm:w-96 max-w-sm bg-white rounded-3xl shadow-2xl border border-[#E8A0BF]/40 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200 flex flex-col max-h-[540px]">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#8C4A58] to-[#A35967] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={SITE_DATA.images.assistantAvatar}
                  alt="Foto humanizada da assistente Ana"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/80 shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#25D366] border border-white rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                  <span>Ana</span>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-normal">Assistente</span>
                </h4>
                <p className="text-[11px] text-rose-100 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Online agora · Consultório Dani Lima</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-white/15 text-white transition-colors cursor-pointer"
              aria-label="Fechar assistente virtual"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#FCFAF8] text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-[#8C4A58] text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-[#E8A0BF]/30 rounded-bl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>

                {/* Optional Action CTAs inside assistant bubbles */}
                {msg.sender === 'assistant' && msg.actionType && (
                  <div className="mt-2 flex flex-col gap-1.5 w-full max-w-[85%] animate-in fade-in duration-200">
                    {(msg.actionType === 'whatsapp' || msg.actionType === 'both') && (
                      <a
                        href={msg.customLink || SITE_DATA.brand.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-[11px] flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white" />
                        <span>{msg.actionLabel || 'Chamar a Dani no WhatsApp'}</span>
                      </a>
                    )}

                    {(msg.actionType === 'instagram' || msg.actionType === 'both') && (
                      <a
                        href={SITE_DATA.brand.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-xl bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:brightness-105 text-white font-bold text-[11px] flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                      >
                        <Instagram className="w-3.5 h-3.5" />
                        <span>Ver Instagram @danilima.nutri</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick topic buttons */}
          <div className="p-2.5 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {quickTopics.map((topic) => (
              <button
                key={topic.label}
                onClick={() => handleSendQuery(topic.label)}
                className="px-2.5 py-1.5 bg-[#F8F1EB] hover:bg-[#F8C8DC]/40 text-slate-700 hover:text-[#8C4A58] rounded-full text-[11px] font-semibold whitespace-nowrap transition-colors cursor-pointer shrink-0"
              >
                {topic.label}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendQuery(inputText);
            }}
            className="p-3 bg-white border-t border-slate-100 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Digite sua dúvida aqui..."
              className="flex-1 py-2 px-3.5 rounded-full bg-[#FCFAF8] border border-slate-200 text-xs focus:outline-none focus:border-[#8C4A58]"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className={`p-2 rounded-full transition-colors ${
                inputText.trim()
                  ? 'bg-[#8C4A58] text-white hover:bg-[#733543] cursor-pointer'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
              aria-label="Enviar mensagem"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* 2. Floating Avatar Trigger (Collapsed State) */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            setHasPrompted(false);
          }}
          className="relative group cursor-pointer focus:outline-none"
          aria-label={isOpen ? 'Fechar assistente Ana' : 'Falar com assistente Ana'}
        >
          {/* Avatar Ring */}
          <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#8C4A58] via-[#B76E79] to-[#C59B7D] shadow-xl hover:scale-108 active:scale-95 transition-all duration-200">
            <img
              src={SITE_DATA.images.assistantAvatar}
              alt="Ana - Assistente Virtual"
              className="w-full h-full rounded-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Active online dot */}
          <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-[#25D366] border-2 border-white rounded-full shadow-xs" />
        </button>

        {/* Speech Balloon Bubble (visible when collapsed) */}
        {!isOpen && hasPrompted && (
          <div
            onClick={() => {
              setIsOpen(true);
              setHasPrompted(false);
            }}
            className="hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-[#E8A0BF]/40 text-xs font-semibold text-slate-800 hover:text-[#8C4A58] cursor-pointer transition-all duration-200 max-w-[210px] animate-in fade-in slide-in-from-left-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C59B7D] shrink-0" />
            <span className="leading-snug">Dúvidas? Fale com a <strong>Ana</strong></span>
          </div>
        )}
      </div>

    </aside>
  );
};
