import { useState } from "react"

// Componente auxiliar para cada item sanfonado
function ItemFaq({ pergunta, resposta, id }) {
  const [aberto, setAberto] = useState(false)

  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
        aberto
          ? "border-destaque/70 bg-white/[0.07] shadow-lg shadow-black/25"
          : "border-white/12 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.06]"
      }`}
    >
      <h3>
        <button
          type="button"
          aria-expanded={aberto}
          aria-controls={`resposta-${id}`}
          onClick={() => setAberto(!aberto)}
          className="w-full text-left p-5 sm:p-6 font-bold text-white flex justify-between items-center gap-4 transition-colors cursor-pointer"
        >
          <span className="text-base sm:text-lg leading-snug">{pergunta}</span>

          <span
            aria-hidden="true"
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg font-black transition-all duration-200 ${
              aberto
                ? "bg-destaque text-white shadow-md shadow-orange-950/40"
                : "bg-white/10 text-orange-400"
            }`}
          >
            {aberto ? "−" : "+"}
          </span>
        </button>
      </h3>

      <div
        id={`resposta-${id}`}
        hidden={!aberto}
        className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-slate-200 text-sm sm:text-base leading-relaxed border-t border-white/10 mt-0"
      >
        <p className="pt-4">{resposta}</p>
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
      aria-labelledby="titulo-faq"
      className="relative overflow-hidden py-20 sm:py-24 bg-primaria text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-80 w-80 rounded-full bg-destaque/15 blur-3xl"
      />

      <div className="section-shell relative z-10 reveal">
        <div className="section-heading">
          <span className="section-kicker text-orange-400">
            Atendimento e Dúvidas
          </span>
          <h2
            id="titulo-faq"
            className="section-title !text-white"
          >
            Suporte ao Atleta
          </h2>
          <p className="section-description !text-slate-300">
            Informações essenciais sobre retirada de kits, hidratação e estrutura oficial da prova.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {perguntasDoBriefing.map((item, index) => (
            <ItemFaq
              key={`faq-${index + 1}`}
              id={index + 1}
              pergunta={item.pergunta}
              resposta={item.resposta}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
