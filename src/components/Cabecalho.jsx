import { useState } from 'react'

function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false)

  const links = [
    { href: '#sobre', label: 'A Prova' },
    { href: '#programacao', label: 'Agenda' },
    { href: '#percursos', label: 'Percursos' },
    { href: '#faq', label: 'Suporte' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-primaria/95 text-white backdrop-blur-md border-b border-white/10 shadow-[0_10px_30px_rgb(11_21_40_/_35%)]">
      <div className="section-shell py-3.5 flex justify-between items-center gap-4">
        <a
          href="#conteudo"
          className="flex items-center gap-3 group focus-visible:rounded-xl"
        >
          <span
            aria-hidden="true"
            className="w-10 h-10 rounded-xl bg-destaque flex items-center justify-center shadow-lg shadow-orange-950/40 ring-1 ring-white/15 transition-transform duration-200 group-hover:scale-105"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-white"
            >
              <path d="M13 4v4l3 2 3-2" />
              <circle cx="13" cy="4" r="1.5" fill="currentColor" stroke="none" />
              <path d="M7 16l3.5-4.5 2.5 2L11 19" />
              <path d="M13 13.5l3.5 3.5H20" />
              <path d="M4 19h4" />
            </svg>
          </span>

          <span className="flex flex-col leading-none">
            <span className="font-display font-black text-xl sm:text-2xl tracking-wide uppercase text-white">
              CN<span className="text-orange-400">OC</span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-300 hidden sm:block">
              Corrida Noturna
            </span>
          </span>
        </a>

        {/* Botão do menu para celular */}
        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden inline-flex items-center gap-2 px-3.5 py-2 border border-white/15 bg-white/5 rounded-xl text-slate-100 text-xs font-extrabold uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all cursor-pointer"
        >
          <span>{menuAberto ? 'Fechar' : 'Menu'}</span>
          {menuAberto ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              className="w-4 h-4 text-orange-400"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              className="w-4 h-4 text-orange-400"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

        {/* Menu para desktop */}
        <nav
          aria-label="Menu principal"
          className="hidden md:flex items-center gap-7 text-xs uppercase tracking-[0.14em] font-bold text-slate-200"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-destaque after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#inscricao"
            className="inline-flex items-center gap-2 bg-destaque hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl font-extrabold tracking-wider shadow-lg shadow-orange-950/40 ring-1 ring-white/15 transition-all duration-200 hover:-translate-y-0.5 ml-1"
          >
            <span>Inscrição</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </nav>
      </div>

      {/* Menu retrátil para celular */}
      <nav
        id="menu-mobile"
        aria-label="Menu para celular"
        hidden={!menuAberto}
        className="md:hidden bg-primaria border-t border-white/10 px-4 pt-2 pb-5 flex flex-col text-xs uppercase tracking-[0.14em] font-bold text-slate-200 shadow-2xl"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuAberto(false)}
            className="py-3.5 border-b border-white/10 hover:text-white flex items-center justify-between"
          >
            <span>{link.label}</span>
            <span aria-hidden="true" className="text-orange-400">›</span>
          </a>
        ))}

        <a
          href="#inscricao"
          onClick={() => setMenuAberto(false)}
          className="button-primary w-full mt-4"
        >
          Garantir Minha Vaga
        </a>
      </nav>
    </header>
  )
}

export default Cabecalho
