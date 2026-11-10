
import { useState } from "react"

// Componente auxiliar para cada item sanfonado
function ItemFaq({ pergunta, resposta, id }) {
  const [aberto, setAberto] = useState(false)

  return (
    <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-800 transition-all">

      <h3>
        <button
          type="button"
          aria-expanded={aberto}
          aria-controls={`resposta-${id}`}
          onClick={() => setAberto(!aberto)}
          className="w-full text-left p-4 font-semibold text-white flex justify-between items-center hover:bg-slate-700 transition"
        >
          <span>{pergunta}</span>

          <span
            aria-hidden="true"
            className="text-amber-400 text-xl font-bold"
          >
            {aberto ? "−" : "+"}
          </span>
        </button>
      </h3>

      <div
        id={`resposta-${id}`}
        hidden={!aberto}
        className="p-4 bg-slate-900 border-t border-slate-700 text-slate-200 text-sm leading-relaxed"
      >
        {resposta}
      </div>

    </div>
  )
}

function Faq() {
  const perguntasDoBriefing = [
    {
      pergunta: "Onde e quando será a retirada dos kits?",
      resposta: "A entrega dos kits acontecerá no dia do evento (17 de abril de 2027) na Praça Central das 16h às 19h. Lembre-se de levar o documento de identidade e o comprovante de inscrição."
    },
    {
      pergunta: "O que vem incluído no kit de corrida?",
      resposta: "O kit oficial da Corrida Noturna OC contém uma camiseta oficial com detalhes refletivos de alta visibilidade, número de peito personalizado, chip de cronometragem eletrônica e medalha pós-prova."
    },
    {
      pergunta: "Haverá pontos de hidratação no trajeto?",
      resposta: "Sim, contaremos com 6 pontos estrategicamente distribuídos ao longo dos circuitos de 5 km e 10 km, oferecendo água mineral gelada e suporte médico de prontidão se necessário."
    }
  ]

  return (
    <section
      id="faq"
      className="py-16 px-4 bg-slate-900 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-extrabold text-orange-400 text-center mb-8 tracking-tight">
        Suporte do Atleta
      </h2>

      <div className="space-y-4">
        {perguntasDoBriefing.map((item, index) => (
          <ItemFaq
            key={`faq-${index + 1}`}
            id={index + 1}
            pergunta={item.pergunta}
            resposta={item.resposta}
          />
        ))}
      </div>
    </section>
  )
}

export default Faq
