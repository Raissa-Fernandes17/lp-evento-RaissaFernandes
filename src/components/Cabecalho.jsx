import { evento } from '../data/evento'

function Cabecalho() {
    return (
        <header className="bg-primaria border-b border-blue-900 sticky top-0 z-50 shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-2">
                {/* Trocamos o texto longo por uma sigla esportiva bem mais limpa para o topo */}
                <span className="font-black text-sm sm:text-base md:text-lg text-white tracking-wider uppercase">
                    CNOC 🏁
                </span>


                {/* Menu responsivo que distribui os links certinho em qualquer tela */}
                <nav className="flex gap-4 sm:gap-6 font-bold text-[10px] sm:text-xs uppercase tracking-wider text-slate-300">
                    <a href="#sobre" className="hover:text-destaque transition-colors py-1">Sobre</a>
                    <a href="#programacao" className="hover:text-destaque transition-colors py-1">Agenda</a>
                    <a href="#percursos" className="hover:text-destaque transition-colors py-1">Percursos</a>
                    <a href="#inscricao" className="bg-destaque text-neutral-950 px-2.5 py-1 rounded-md hover:bg-orange-400 transition-all font-black">Inscrição</a>
                </nav>
            </div>
        </header>
    )
}

export default Cabecalho
