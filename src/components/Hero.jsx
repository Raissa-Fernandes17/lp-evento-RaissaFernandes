import { evento, destaques, percursos } from '../data/evento'
import BotaoLembrete from './BotaoLembrete'

function Hero() {
  return (
    <section className="hero-surface relative overflow-hidden bg-primaria text-white pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 border-b border-white/10">
      {/* Brilhos atmosféricos e linhas esportivas sutis */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -right-28 h-96 w-96 rounded-full bg-destaque/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,#ff5a1f_1px,transparent_1px),linear-gradient(to_bottom,#ff5a1f_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]"
      />

      <div className="section-shell relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna principal */}
          <div className="lg:col-span-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-orange-400/40 bg-destaque/20 px-4 py-1.5 backdrop-blur-md shadow-lg">
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 rounded-full bg-orange-400 motion-safe:animate-ping"
              />
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-orange-200">
                Inscrições Abertas • Edição Noturna
              </span>
            </div>

            <h1 className="font-display mt-6 text-[2.65rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem] font-black uppercase tracking-tight leading-[0.94] text-white drop-shadow-[0_6px_24px_rgb(0_0_0_/_45%)]">
              Corrida{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-white">
                Noturna OC
              </span>
              <span className="sr-only">{evento.nome}</span>
            </h1>

            <div className="mt-5 flex items-center justify-center lg:justify-start gap-3">
              <span
                aria-hidden="true"
                className="hidden sm:inline-block h-1 w-10 rounded-full bg-destaque"
              />
              <p className="font-display text-2xl sm:text-3xl font-extrabold italic uppercase tracking-wide text-orange-300">
                “{evento.slogan}”
              </p>
            </div>

            {/* Cards de Data, Horário e Local */}
            <div className="mt-8 grid sm:grid-cols-2 gap-3.5 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-3.5 rounded-2xl border border-white/15 bg-primaria/70 px-4 py-3.5 backdrop-blur-md shadow-lg text-left">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-destaque/20 text-orange-400 ring-1 ring-orange-400/30"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </span>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-orange-300">
                    Data e Largada
                  </span>
                  <span className="block text-sm sm:text-base font-extrabold text-white leading-snug">
                    {evento.data}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 rounded-2xl border border-white/15 bg-primaria/70 px-4 py-3.5 backdrop-blur-md shadow-lg text-left">
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-destaque/20 text-orange-400 ring-1 ring-orange-400/30"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M12 21s-6-5.33-6-10a6 6 0 1 1 12 0c0 4.67-6 10-6 10Z" />
                    <circle cx="12" cy="11" r="2.2" />
                  </svg>
                </span>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.14em] text-orange-300">
                    Local do Evento
                  </span>
                  <span className="block text-sm sm:text-base font-extrabold text-white leading-snug">
                    {evento.local}
                  </span>
                </div>
              </div>
            </div>

            {/* Ações principais */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-start justify-center lg:justify-start gap-4">
              <a
                href="#inscricao"
                className="button-primary px-8 py-4 text-sm sm:text-base"
              >
                <span>Garantir Minha Vaga</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>

              <BotaoLembrete />
            </div>
          </div>

          {/* Painel lateral de impacto esportivo (desktop e tablets grandes) */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-white/15 bg-primaria/80 p-6 sm:p-7 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-orange-300">
                    Painel da Prova
                  </p>
                  <p className="font-display text-2xl font-black uppercase text-white mt-0.5">
                    Energia Noturna
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-destaque text-white shadow-lg shadow-orange-950/50"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2.5">
                {destaques.map((item) => (
                  <div
                    key={item.texto}
                    className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center"
                  >
                    <span className="font-display block text-2xl font-black text-orange-400">
                      {item.valor}
                    </span>
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-200 mt-0.5 leading-tight">
                      {item.texto}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-2.5">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-300">
                  Modalidades Disponíveis
                </p>
                <div className="flex flex-wrap gap-2">
                  {percursos.map((p) => (
                    <a
                      key={p.id}
                      href="#percursos"
                      className="rounded-xl border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold text-white hover:border-orange-400/70 hover:bg-destaque/25 transition-colors"
                    >
                      {p.nome}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 font-semibold">
                <span>Camiseta refletiva + medalha</span>
                <a
                  href="#sobre"
                  className="text-orange-300 hover:text-orange-200 font-extrabold uppercase tracking-wider"
                >
                  Saiba mais →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
