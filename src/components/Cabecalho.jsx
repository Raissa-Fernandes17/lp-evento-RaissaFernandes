
import { useState } from 'react'

function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="bg-primaria text-white sticky top-0 z-50 border-b border-blue-900 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        <span className="font-black text-xl tracking-tight uppercase">
          CNOC 🏁
        </span>

        {/* Botão do menu para celular */}
        <button
          type="button"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-expanded={menuAberto}
          aria-controls="menu-mobile"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          className="md:hidden px-3 py-1.5 border border-blue-800 rounded-xl text-slate-200 font-bold hover:text-white transition-all cursor-pointer"
        >
          {menuAberto ? 'Fechar ✕' : 'Menu ☰'}
        </button>

        {/* Menu para desktop */}
        <nav
          aria-label="Menu principal"
          className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-bold text-slate-200"
        >
          <a href="#sobre" className="hover:text-white transition-all">
            Sobre
          </a>

          <a href="#programacao" className="hover:text-white transition-all">
            Agenda
          </a>

          <a href="#percursos" className="hover:text-white transition-all">
            Percursos
          </a>

          <a href="#faq" className="hover:text-white transition-all">
            Dúvidas
          </a>

          <a
            href="#inscricao"
            className="bg-destaque text-white px-4 py-2 rounded-xl hover:bg-orange-800 transition-all ml-2"
          >
            Inscrição
          </a>
        </nav>
      </div>

      {/* Menu retrátil para celular */}
      <nav
        id="menu-mobile"
        aria-label="Menu para celular"
        hidden={!menuAberto}
        className="md:hidden bg-blue-950 border-t border-blue-900 flex flex-col p-4 text-xs uppercase tracking-widest font-bold text-slate-200"
      >
        <a
          href="#sobre"
          onClick={() => setMenuAberto(false)}
          className="py-3 border-b border-blue-900 hover:text-white"
        >
          Sobre
        </a>

        <a
          href="#programacao"
          onClick={() => setMenuAberto(false)}
          className="py-3 border-b border-blue-900 hover:text-white"
        >
          Agenda
        </a>

        <a
          href="#percursos"
          onClick={() => setMenuAberto(false)}
          className="py-3 border-b border-blue-900 hover:text-white"
        >
          Percursos
        </a>

        <a
          href="#faq"
          onClick={() => setMenuAberto(false)}
          className="py-3 border-b border-blue-900 hover:text-white"
        >
          Dúvidas
        </a>

        <a
          href="#inscricao"
          onClick={() => setMenuAberto(false)}
          className="bg-destaque text-white text-center py-3 rounded-xl mt-3 hover:bg-orange-800"
        >
          Inscrição
        </a>
      </nav>
    </header>
  )
}

export default Cabecalho
