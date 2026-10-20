import { programacao } from '../data/evento'

function Programacao() {
  return (
    <section id="programacao" className="bg-slate-50 py-16 px-4 border-y border-slate-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-primaria text-center uppercase tracking-tight mb-8">
          Programação do Evento
        </h2>
        <div className="relative border-l-2 border-blue-200 ml-4 md:ml-32 space-y-6">
          {programacao && programacao.map((item, index) => (
            <div key={index} className="relative pl-6">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-destaque border-4 border-primaria"></div>
              <div className="md:absolute md:-left-36 md:top-0 md:w-28 md:text-right font-black text-primaria text-sm sm:text-base">
                {item.horario}
              </div>
              <p className="text-slate-700 font-bold text-sm sm:text-base">
                {item.atividade || item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programacao
