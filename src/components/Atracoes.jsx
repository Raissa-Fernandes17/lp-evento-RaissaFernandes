import { atracoes } from '../data/evento'
import CartaoAtracao from './CartaoAtracao'

function Atracoes() {
    return (
        // Adicionamos o id para a âncora e as classes de grid responsivo aqui:
        <section id="atracoes" class="max-w-6xl mx-auto py-16 px-4">
            <h2 class="text-3xl font-bold text-center mb-10">Atrações Principais</h2>

            {/* BEM AQUI: No celular 1 coluna, no sm: 2 colunas, no lg: 4 colunas */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {atracoes.map((atracao) => (
                    <CartaoAtracao key={atracao.id} nome={atracao.nome} descricao={atracao.descricao} />
                ))}
            </div>
        </section>
    )
}

export default Atracoes
