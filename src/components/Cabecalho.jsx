import { useState } from 'react'

function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false) // Desafio 1

    return (
        <header className="bg-primaria text-white sticky top-0 z-50 border-b border-blue-900 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <span className="font-black text-xl tracking-tight uppercase">CNOC 🏁</span>

                {/* Desafio 1: Botão invisível no PC e visível no celular */}
                <button 
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="md:hidden px-3 py-1.5 border border-blue-800 rounded-xl text-slate-300 font-bold hover:text-white transition-all cursor-pointer"
                >
                    {menuAberto ? 'Fechar ✕' : 'Menu ☰'}
                </button>

                {/* Menu padrão para Desktop */}
                <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-bold text-slate-300">
                    <a href="#sobre" className="hover:text-destaque transition-all">Sobre</a>
                    <a href="#programacao" className="hover:text-destaque transition-all">Agenda</a>
                    <a href="#percursos" className="hover:text-destaque transition-all">Percursos</a>
                    <a href="#faq" className="hover:text-destaque transition-all">Suporte</a>
                    <a href="#inscricao" className="bg-destaque text-neutral-950 px-4 py-2 rounded-xl hover:bg-orange-400 transition-all ml-2">Inscrição</a>
                </nav>
            </div>

            {/* Desafio 1: Lista retrátil exclusiva para telas pequenas */}
            {menuAberto && (
                <nav className="md:hidden bg-blue-950 border-t border-blue-900 flex flex-col p-4 text-xs uppercase tracking-widest font-bold text-slate-300 animate-fade-in">
                    <a href="#sobre" onClick={() => setMenuAberto(false)} className="py-3 border-b border-blue-900 hover:text-destaque">Sobre</a>
                    <a href="#programacao" onClick={() => setMenuAberto(false)} className="py-3 border-b border-blue-900 hover:text-destaque">Agenda</a>
                    <a href="#percursos" onClick={() => setMenuAberto(false)} className="py-3 border-b border-blue-900 hover:text-destaque">Percursos</a>
                    <a href="#faq" onClick={() => setMenuAberto(false)} className="py-3 border-b border-blue-900 hover:text-destaque">Suporte</a>
                    <a href="#inscricao" onClick={() => setMenuAberto(false)} className="bg-destaque text-neutral-950 text-center py-3 rounded-xl mt-3 hover:bg-orange-400 block">Inscrição</a>
                </nav>
            )}
        </header>
    )
}

export default Cabecalho
