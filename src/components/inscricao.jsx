import { useState } from 'react'
import { ingressos } from '../data/evento'

function Inscricao() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [ingresso, setIngresso] = useState('10km')
    const [quantidade, setQuantidade] = useState(1) // Desafio 4
    const [erroNome, setErroNome] = useState('') // Desafio 3
    const [confirmado, setConfirmado] = useState(false)

    function lidarEnvio(e) {
        e.preventDefault()
        
        // Desafio 3: Validação do nome (mínimo de 3 caracteres)
        if (nome.trim().length < 3) {
            setErroNome('O nome inserido precisa ter pelo menos 3 caracteres.')
            return
        }

        setErroNome('')
        setConfirmado(true)
    }

    // Acha o objeto completo do ingresso escolhido para ler o label e o preço
    const objetoIngresso = ingressos.find(i => i.valor === ingresso)
    const ingressoSelecionado = objetoIngresso?.label
    
    // Desafio 4: Calcula o valor total multiplicando o preço do briefing pela quantidade escolhida
    const precoUnitario = objetoIngresso?.preco || 0
    const valorTotal = precoUnitario * quantidade

    if (confirmado) {
        return (
            <section id="inscricao" className="max-w-xl mx-auto my-20 px-4">
                <div className="bg-green-50 border-2 border-green-200 p-8 rounded-2xl text-center text-green-900 shadow-sm animate-fade-in">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold">✓</div>
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-2">Inscrição Confirmada!</h3>
                    <p className="text-lg font-medium">
                        Preparado para correr, <span className="font-bold text-green-700">{nome}</span>?
                    </p>
                    
                    {/* Desafio 4: Mostra a quantidade e o valor total calculado na confirmação */}
                    <div className="bg-white border border-green-100 p-4 rounded-xl my-4 text-sm font-semibold flex flex-col gap-1 items-center">
                        <div>🎟️ Categoria: {ingressoSelecionado}</div>
                        <div className="text-xs text-slate-500">Quantidade: {quantidade}x</div>
                        <div className="text-base font-black text-green-700 mt-1 border-t border-green-100 pt-1 w-full text-center">
                            Total: R\$ {valorTotal},00
                        </div>
                    </div>
                    
                    <p className="text-sm opacity-80">
                        O comprovante e as instruções de retirada do kit foram enviados para <strong>{email}</strong>.
                    </p>
                </div>
            </section>
        )
    }

    return (
        <section id="inscricao" className="max-w-lg mx-auto my-20 px-4">
            <div className="bg-primaria text-white p-8 rounded-3xl shadow-xl border border-blue-900">
                <h2 className="text-2xl sm:text-3xl font-black text-center uppercase tracking-tight mb-2">Inscreva-se Já</h2>
                <p className="text-slate-300 text-center text-xs sm:text-sm font-medium max-w-xs mx-auto mb-9 leading-relaxed">
                    Garanta seu kit com camiseta refletiva e medalha!
                </p>

                <form onSubmit={lidarEnvio} className="flex flex-col gap-5">
                    <label className="flex flex-col gap-1 text-xs uppercase tracking-widest font-bold text-slate-300">
                        Nome Completo
                        <input
                            type="text"
                            required
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className={`mt-1 p-3.5 bg-blue-950 border ${erroNome ? 'border-red-500 focus:ring-red-500' : 'border-blue-800 focus:ring-destaque'} rounded-xl text-white font-medium focus:outline-none focus:ring-2 transition-all`}
                        />
                        {/* Desafio 3: Exibe o erro logo abaixo do campo com destaque */}
                        {erroNome && <span className="text-red-400 text-[11px] lowercase font-semibold mt-1">*{erroNome}</span>}
                    </label>

                    <label className="flex flex-col gap-1 text-xs uppercase tracking-widest font-bold text-slate-300">
                        E-mail de Contato
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 p-3.5 bg-blue-950 border border-blue-800 rounded-xl text-white font-medium focus:outline-none focus:ring-2 focus:ring-destaque transition-all"
                        />
                    </label>

                    {/* Desafio 4: Layout dividindo a seleção do Ingresso e a Quantidade na mesma linha */}
                    <div className="flex gap-4">
                        <label className="flex flex-col gap-1 text-xs uppercase tracking-widest font-bold text-slate-300 flex-1">
                            Modalidade / Ingresso
                            <select
                                value={ingresso}
                                onChange={(e) => setIngresso(e.target.value)}
                                className="mt-1 p-3.5 bg-blue-950 border border-blue-800 rounded-xl text-white font-medium focus:outline-none focus:ring-2 focus:ring-destaque transition-all cursor-pointer w-full"
                            >
                                {ingressos.map(option => (
                                    <option key={option.valor} value={option.valor} className="bg-primaria text-white">
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </label>

                        {/* Desafio 4: Input de Quantidade estilizado seguindo o seu padrão de design */}
                        <label className="flex flex-col gap-1 text-xs uppercase tracking-widest font-bold text-slate-300 w-24">
                            Qtd.
                            <input
                                type="number"
                                min="1"
                                max="10"
                                required
                                value={quantidade}
                                onChange={(e) => setQuantidade(Math.max(1, parseInt(e.target.value) || 1))}
                                className="mt-1 p-3.5 bg-blue-950 border border-blue-800 rounded-xl text-white font-medium focus:outline-none focus:ring-2 focus:ring-destaque transition-all text-center"
                            />
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="bg-destaque hover:bg-orange-400 text-neutral-950 font-black py-4 rounded-xl transition-all tracking-wider uppercase mt-4 cursor-pointer text-center shadow-md hover:scale-[1.02]"
                    >
                        Confirmar Minha Vaga
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Inscricao
