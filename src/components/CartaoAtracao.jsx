function CartaoAtracao({ nome, nivel, descricao }) {
  const configNivel =
    nivel === 'Avançado'
      ? {
          badge: 'bg-orange-100 text-destaque border-orange-200',
          barras: 4,
          icone: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          ),
        }
      : nivel === 'Iniciante'
        ? {
            badge: 'bg-blue-50 text-primaria border-blue-200',
            barras: 3,
            icone: (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            ),
          }
        : nivel === 'Infantil'
          ? {
              badge: 'bg-purple-100 text-purple-900 border-purple-200',
              barras: 1,
              icone: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ),
            }
          : {
              badge: 'bg-emerald-100 text-emerald-900 border-emerald-200',
              barras: 2,
              icone: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
            }

  return (
    <article className="group relative overflow-hidden bg-white p-6 rounded-3xl shadow-sm border border-slate-200/90 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1.5 hover:shadow-xl hover:border-orange-300 motion-safe:active:scale-98">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primaria via-destaque to-orange-400 opacity-80 group-hover:opacity-100 transition-opacity"
      />

      <div>
        <div className="flex items-center justify-between gap-3 mb-5 pt-1">
          <span
            aria-hidden="true"
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primaria text-orange-400 shadow-sm transition-colors duration-200 group-hover:bg-destaque group-hover:text-white"
          >
            {configNivel.icone}
          </span>

          <span
            className={`inline-block border text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${configNivel.badge}`}
          >
            {nivel}
          </span>
        </div>

        <h3 className="font-display text-3xl font-black uppercase text-primaria mb-2 tracking-tight leading-none">
          {nome}
        </h3>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
          {descricao}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1" aria-hidden="true">
          {[1, 2, 3, 4].map((step) => (
            <span
              key={step}
              className={`h-1.5 w-4 rounded-full ${
                step <= configNivel.barras ? 'bg-destaque' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>

        <a
          href="#inscricao"
          className="text-xs font-extrabold uppercase tracking-wider text-primaria group-hover:text-destaque transition-colors inline-flex items-center gap-1"
        >
          <span>Participar</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}

export default CartaoAtracao
