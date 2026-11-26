import { programacao } from '../data/evento'

function obterIconeHorario(texto) {
  const lower = texto.toLowerCase()
  if (lower.includes('kit')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    )
  }
  if (lower.includes('aquecimento')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  }
  if (lower.includes('premiação') || lower.includes('show')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  )
}

function Programacao() {
  return (
    <section
      id="programacao"
      aria-labelledby="titulo-programacao"
      className="bg-slate-50 py-20 sm:py-24 border-y border-slate-200/80"
    >
      <div className="section-shell reveal">
        <div className="section-heading">
          <span className="section-kicker">Cronograma Oficial</span>
          <h2 id="titulo-programacao" className="section-title">
            Programação do Evento
          </h2>
          <p className="section-description">
            Programe sua chegada à Praça Central para retirar o kit, aquecer e alinhar no pelotão da sua prova.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <ol className="relative space-y-5 before:content-[''] before:absolute before:left-5 md:before:left-[8.75rem] before:top-4 before:bottom-4 before:w-0.5 before:bg-gradient-to-b before:from-destaque before:via-primaria/30 before:to-destaque">
            {programacao && programacao.map((item, index) => {
              const texto = item.atividade || item.text || ''
              const ehLargada =
                texto.toLowerCase().includes('largada') ||
                texto.toLowerCase().includes('saída')

              return (
                <li
                  key={`${item.horario}-${index}`}
                  className="relative pl-14 md:pl-44"
                >
                  {/* Marcador na linha do tempo */}
                  <div
                    aria-hidden="true"
                    className={`absolute left-[0.68rem] md:left-[8.18rem] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 shadow-sm ${
                      ehLargada
                        ? 'bg-destaque border-white ring-2 ring-destaque/40'
                        : 'bg-primaria border-white ring-2 ring-primaria/20'
                    }`}
                  />

                  {/* Horário à esquerda no desktop */}
                  <div className="md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:w-28 md:text-right mb-1.5 md:mb-0">
                    <span
                      className={`inline-flex items-center justify-center rounded-xl px-3 py-1 font-display text-lg font-black tracking-wide ${
                        ehLargada
                          ? 'bg-destaque text-white shadow-md shadow-orange-950/15'
                          : 'bg-primaria text-white'
                      }`}
                    >
                      {item.horario}
                    </span>
                  </div>

                  {/* Card da atividade */}
                  <div
                    className={`group flex items-center justify-between gap-4 rounded-2xl border bg-white p-4 sm:p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
                      ehLargada
                        ? 'border-orange-200 hover:border-destaque/60'
                        : 'border-slate-200/80 hover:border-primaria/30'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        aria-hidden="true"
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${
                          ehLargada
                            ? 'bg-destaque/10 text-destaque group-hover:bg-destaque group-hover:text-white'
                            : 'bg-primaria/5 text-primaria group-hover:bg-primaria group-hover:text-white'
                        }`}
                      >
                        {obterIconeHorario(texto)}
                      </span>

                      <div>
                        <p className="font-bold text-primaria text-base sm:text-lg leading-snug">
                          {texto}
                        </p>
                      </div>
                    </div>

                    {ehLargada && (
                      <span className="hidden sm:inline-flex shrink-0 items-center rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-destaque">
                        Largada
                      </span>
                    )}
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Programacao
