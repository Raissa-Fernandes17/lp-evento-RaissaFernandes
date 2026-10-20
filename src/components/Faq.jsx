import { useState } from 'react'

function Faq() {
  const perguntas = [
    {
      id: 1,
      q: "Preciso de atestado médico?",
      a: "Não é obrigatório, mas é altamente recomendado para a sua segurança."
    },
    {
      id: 2,
      q: "Tem guarda-volumes?",
      a: "Sim! Teremos uma tenda oficial da organização localizada logo ao lado da linha de largada."
    },
    {
      id: 3,
      q: "Posso correr com fone de ouvido?",
      a: "Pode sim, mas com o volume baixo para conseguir ouvir os avisos de segurança dos fiscais."
    }
  ]

  const [aberto, setAberto] = useState(null)

  function alternarFaq(id) {
    setAberto(aberto === id ? null : id)
  }

  return (
    <section id="faq" className="max-w-2xl mx-auto pt-4 pb-12 px-4">
      {/* Título com fonte pesada e uma mini barra decorativa laranja abaixo */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-black text-primaria uppercase tracking-tight">
          Dúvidas Frequentes
        </h2>
        <div className="w-12 h-1 bg-destaque mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="space-y-3">
        {perguntas.map((faq) => {
          const estaAberto = aberto === faq.id
          
          return (
            <div 
              key={faq.id} 
              className={`rounded-2xl overflow-hidden transition-all duration-300 border ${
                estaAberto 
                  ? 'border-destaque bg-slate-50 shadow-md shadow-orange-500/5' 
                  : 'border-slate-100 bg-slate-50/50 hover:bg-slate-50'
              }`}
            >
              <button
                type="button"
                onClick={() => alternarFaq(faq.id)}
                className="w-full text-left p-5 font-black text-slate-800 flex justify-between items-center cursor-pointer text-sm sm:text-base focus:outline-none"
              >
                <span className={`pr-4 transition-colors ${estaAberto ? 'text-destaque' : 'text-slate-800'}`}>
                  {faq.q}
                </span>
                {/* Ícone estilizado em um círculo cinza que gira quando abre */}
                <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                  estaAberto ? 'bg-destaque text-white rotate-180' : 'bg-slate-200/60 text-slate-600'
                }`}>
                  {estaAberto ? '−' : '+'}
                </div>
              </button>
              
              {/* Resposta com animação sutil e fundo branco destacado */}
              {estaAberto && (
                <div className="px-5 pb-5 pt-2 bg-white text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  <p className="border-t border-slate-100 pt-3">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Faq
