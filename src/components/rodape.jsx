import { evento } from '../data/evento'

function Rodape() {
  return (
    <footer
      aria-label="Rodapé do site"
      className="bg-primaria border-t border-white/10 text-slate-300 py-12"
    >
      <div className="section-shell">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-black uppercase tracking-wide text-white">
              Corrida <span className="text-orange-400">Noturna OC</span>
            </p>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {evento.data} • {evento.local}
            </p>
          </div>

          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap justify-center gap-5 text-xs font-bold uppercase tracking-widest text-slate-300"
          >
            <a href="#sobre" className="hover:text-orange-400 transition-colors">
              A Prova
            </a>
            <a href="#programacao" className="hover:text-orange-400 transition-colors">
              Agenda
            </a>
            <a href="#percursos" className="hover:text-orange-400 transition-colors">
              Percursos
            </a>
            <a href="#faq" className="hover:text-orange-400 transition-colors">
              Suporte
            </a>
            <a href="#inscricao" className="text-orange-400 hover:text-orange-300 transition-colors">
              Inscrição
            </a>
          </nav>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs sm:text-sm">
          <p className="text-slate-200 font-medium">
            &copy; 2027 {evento.nome} — {evento.local}
          </p>

          <p className="text-xs text-slate-400 italic">
            "Evento fictício criado para fins didáticos"
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Rodape
