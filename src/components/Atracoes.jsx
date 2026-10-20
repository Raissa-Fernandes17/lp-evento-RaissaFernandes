import { percursos } from '../data/evento'
import CartaoAtracao from './CartaoAtracao'

function Atracoes() {
    return (
        <section id="percursos" className="max-w-6xl mx-auto pt-12 pb-4 px-4">
            <h2 className="text-3xl sm:text-3xl font-black text-primaria text-center uppercase tracking-tight mb-2">
                Escolha seu Percurso
            </h2>
            <p className="text-sm sm:text-base text-slate-500 text-center font-medium max-w-sm mx-auto mb-10 leading-relaxed">
                Opções para todas as idades e níveis de preparo físico.
            </p>


            {/* Grid responsivo mobile-first */}
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
        </section>
    )
}

export default Atracoes
