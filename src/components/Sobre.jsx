import { evento, destaques } from '../data/evento'

const iconesDestaque = [
  // Percursos (rota)
  <svg
    key="rota"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <circle cx="6" cy="19" r="3" />
    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
    <circle cx="18" cy="5" r="3" />
  </svg>,
  // Participantes (grupo/energia)
  <svg
    key="atletas"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>,
  // Hidratação (gota)
  <svg
    key="agua"
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>,
]

const pilares = [
  'Camiseta oficial refletiva',
  'Medalha pós-prova',
  'Apoio ao hospital da cidade',
]

function Sobre() {
  return (
    <section
      id="sobre"
      aria-labelledby="titulo-sobre"
      className="py-20 sm:py-24 bg-white"
    >
      <div className="section-shell reveal">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <span className="section-kicker">Sobre o Evento</span>

            <h2
              id="titulo-sobre"
              className="section-title text-left mt-2"
            >
              A Prova
            </h2>

            <p className="mt-5 text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
              {evento.sobre}
            </p>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {pilares.map((pilar) => (
                <li
                  key={pilar}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs sm:text-sm font-bold text-primaria shadow-2xs"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-destaque text-white text-[11px] font-black"
                  >
                    ✓
                  </span>
                  <span>{pilar}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {destaques.map((item, index) => (
              <div
                key={item.texto}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primaria via-destaque to-orange-400"
                />

                <div
                  aria-hidden="true"
                  className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primaria/5 text-destaque ring-1 ring-primaria/10 transition-colors group-hover:bg-destaque group-hover:text-white"
                >
                  {iconesDestaque[index % iconesDestaque.length]}
                </div>

                <span className="font-display block text-4xl sm:text-5xl font-black text-primaria tracking-tight leading-none">
                  {item.valor}
                </span>

                <span className="block text-xs font-extrabold text-slate-600 uppercase tracking-wider mt-2.5">
                  {item.texto}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
