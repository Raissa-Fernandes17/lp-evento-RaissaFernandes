import { autores } from '../data/evento'
import CartaoAutor from './CartaoAutor' // 1. Importe o CartaoAutor aqui!

function Autores() {
    return (
        <section className="p-6 my-6">
            <h2 className="text-2xl font-bold mb-4 text-neutral-800">Autores Convidados</h2>

            {/* 2. O seu código entra bem aqui para listar os cartões lado a lado: */}
            <div className="grid gap-6 sm:grid-cols-2">
                {autores.map((autor) => (
                    <CartaoAutor key={autor.nome} nome={autor.nome} genero={autor.genero} />
                ))}
            </div>
        </section>
    )
}

export default Autores
