import { percursos } from '../data/evento'
import CartaoAtracao from './CartaoAtracao'

function Atracoes() {
  return (
    <section
      id="percursos"
      aria-labelledby="titulo-percursos"
      className="py-20 sm:py-24 bg-white"
    >
      <div className="section-shell reveal">
        <div className="section-heading">
          <span className="section-kicker">Modalidades</span>
          <h2 id="titulo-percursos" className="section-title">
            Escolha seu Percurso
          </h2>
          <p className="section-description">
            Opções para todas as idades e níveis de preparo físico.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {percursos.map((item) => (
            <CartaoAtracao
              key={item.id}
              nome={item.nome}
              nivel={item.nivel}
              descricao={item.descricao}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Atracoes
