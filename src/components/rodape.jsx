import { evento } from '../data/evento'

function Rodape() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-center py-8 text-sm font-medium">
      <div className="max-w-6xl mx-auto px-4 space-y-2">
        <p className="text-slate-200">&copy; 2027 {evento.nome} — {evento.local}</p>
        <p className="text-xs text-slate-500 italic">
          "Evento fictício criado para fins didáticos"
        </p>
      </div>
    </footer>
  )
}

export default Rodape
