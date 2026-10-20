import { evento, destaques } from '../data/evento'

function Sobre() {
  return (
    <section id="sobre" className="max-w-5xl mx-auto py-20 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-black text-primaria uppercase tracking-tight mb-6 relative after:content-[''] after:block after:w-12 after:h-1 after:bg-destaque after:mt-2">
            A Prova
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed font-medium">
            {evento.sobre}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {destaques.map((item) => (
            <div key={item.texto} className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-center shadow-xs">
              <span className="block text-3xl md:text-4xl font-black text-primaria tracking-tight">
                {item.valor}
              </span>
              <span className="block text-xs md:text-sm font-bold text-slate-600 uppercase tracking-wide mt-1">
                {item.texto}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sobre
