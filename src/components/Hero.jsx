
import { evento } from '../data/evento'

function Hero() {
    return (
        <section className="bg-primaria text-white text-center py-28 px-4 relative overflow-hidden bg-radial from-slate-900 to-primaria">

            {/* Grid decorativo */}
            <div
                aria-hidden="true"
                className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ff5a1f_1px,transparent_1px),linear-gradient(to_bottom,#ff5a1f_1px,transparent_1px)] bg-[size:4rem_4rem]"
            ></div>

            <div className="relative z-10 max-w-4xl mx-auto">

                <span className="bg-destaque text-white font-black text-xs uppercase tracking-widest px-3.5 py-1 rounded-full shadow-md motion-safe:animate-pulse">
                    Inscrições Abertas
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight mt-4 leading-tight">
                    {evento.nome}
                </h1>

                <p className="mt-4 text-xl md:text-2xl text-destaque font-bold italic tracking-wide">
                    "{evento.slogan}"
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-2 text-sm sm:text-base font-extrabold text-white bg-white/10 p-3 rounded-2xl max-w-xl mx-auto border border-white/20 backdrop-blur-md shadow-inner">

                    <p className="flex items-center justify-center gap-1.5">
                        <span aria-hidden="true">📅</span>
                        {evento.data}
                    </p>

                    <span aria-hidden="true" className="hidden sm:inline text-white/50">
                        |
                    </span>

                    <p className="flex items-center justify-center gap-1.5">
                        <span aria-hidden="true">📍</span>
                        {evento.local}
                    </p>

                </div>

                <a
                    href="#inscricao"
                    className="mt-8 inline-block bg-destaque hover:bg-orange-800 text-white font-black uppercase tracking-wider px-10 py-4 rounded-xl transition-all shadow-lg motion-safe:hover:scale-105 motion-safe:active:scale-95 cursor-pointer"
                >
                    Garantir Minha Vaga
                </a>

            </div>
        </section>
    )
}

export default Hero
