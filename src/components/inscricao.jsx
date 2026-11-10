
import { useState } from 'react'
import { ingressos } from '../data/evento'

function Inscricao() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [ingresso, setIngresso] = useState('10km')
  const [quantidade, setQuantidade] = useState(1)
  const [erroNome, setErroNome] = useState('')
  const [confirmado, setConfirmado] = useState(false)

  function lidarEnvio(e) {
    e.preventDefault()

    if (nome.trim().length < 3) {
      setErroNome('O nome inserido precisa ter pelo menos 3 caracteres.')
      return
    }

    setErroNome('')
    setConfirmado(true)
  }

  const objetoIngresso = ingressos.find(i => i.valor === ingresso)
  const ingressoSelecionado = objetoIngresso?.label
  const precoUnitario = objetoIngresso?.preco || 0
  const valorTotal = precoUnitario * quantidade

  if (confirmado) {
    return (
      <section id="inscricao" aria-labelledby="titulo-confirmacao" className="max-w-xl mx-auto my-20 px-4">

        <div
          role="status"
          aria-live="polite"
          className="bg-green-50 border-2 border-green-200 p-8 rounded-2xl text-center text-green-900 shadow-sm motion-safe:animate-fade-in"
        >
          <div
            aria-hidden="true"
            className="w-16 h-16 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold"
          >
            ✓
          </div>

          <h2 id="titulo-confirmacao" className="text-2xl font-black uppercase tracking-tight mb-2">
            Inscrição Confirmada!
          </h2>

          <p className="text-lg font-medium">
            Preparado para correr, <span className="font-bold text-green-800">{nome}</span>?
          </p>

          <div className="bg-white border border-green-100 p-4 rounded-xl my-4 text-sm font-semibold flex flex-col gap-1 items-center">

            <div>
              <span aria-hidden="true">🎟️</span>
              Categoria: {ingressoSelecionado}
            </div>

            <div className="text-xs text-slate-700">
              Quantidade: {quantidade}x
            </div>

            <div className="text-base font-black text-green-800 mt-1 border-t border-green-100 pt-1 w-full text-center">
              Total: R$ {valorTotal},00
            </div>
          </div>

          <p className="text-sm text-green-900">
            O comprovante e as instruções de retirada do kit foram enviados para <strong>{email}</strong>.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="inscricao" aria-labelledby="titulo-inscricao" className="max-w-lg mx-auto my-20 px-4">

      <div className="bg-primaria text-white p-8 rounded-3xl shadow-xl border border-blue-900">

        <h2 id="titulo-inscricao" className="text-2xl sm:text-3xl font-black text-center uppercase tracking-tight mb-2">
          Inscreva-se Já
        </h2>

        <p className="text-slate-200 text-center text-xs sm:text-sm font-medium max-w-xs mx-auto mb-9 leading-relaxed">
          Garanta seu kit com camiseta refletiva e medalha!
        </p>

        <form onSubmit={lidarEnvio} className="flex flex-col gap-5">

          <div className="flex flex-col gap-1">
            <label htmlFor="nome" className="text-xs uppercase tracking-widest font-bold text-slate-200">
              Nome Completo
            </label>

            <input
              id="nome"
              name="nome"
              type="text"
              required
              autoComplete="name"
              value={nome}
              aria-invalid={erroNome ? 'true' : 'false'}
              aria-describedby={erroNome ? 'erro-nome' : undefined}
              onChange={e => {
                setNome(e.target.value)
                setErroNome('')
              }}
              className={`mt-1 p-3.5 bg-blue-950 border ${erroNome ? 'border-red-500' : 'border-blue-700'} rounded-xl text-white font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 transition-all`}
            />

            {erroNome && (
              <span
                id="erro-nome"
                role="alert"
                className="text-red-300 text-xs font-semibold mt-1"
              >
                {erroNome}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-slate-200">
              E-mail de Contato
            </label>

            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1 p-3.5 bg-blue-950 border border-blue-700 rounded-xl text-white font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 transition-all"
            />
          </div>

          <div className="flex gap-4">

            <div className="flex flex-col gap-1 flex-1">
              <label htmlFor="ingresso" className="text-xs uppercase tracking-widest font-bold text-slate-200">
                Modalidade / Ingresso
              </label>

              <select
                id="ingresso"
                name="ingresso"
                value={ingresso}
                onChange={e => setIngresso(e.target.value)}
                className="mt-1 p-3.5 bg-blue-950 border border-blue-700 rounded-xl text-white font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 transition-all cursor-pointer w-full"
              >
                {ingressos.map(option => (
                  <option
                    key={option.valor}
                    value={option.valor}
                    className="bg-primaria text-white"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1 w-24">
              <label htmlFor="quantidade" className="text-xs uppercase tracking-widest font-bold text-slate-200">
                Qtd.
              </label>

              <input
                id="quantidade"
                name="quantidade"
                type="number"
                min="1"
                max="10"
                required
                value={quantidade}
                onChange={e => {
                  const valor = parseInt(e.target.value, 10) || 1
                  setQuantidade(Math.min(10, Math.max(1, valor)))
                }}
                className="mt-1 p-3.5 bg-blue-950 border border-blue-700 rounded-xl text-white font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 transition-all text-center"
              />
            </div>

          </div>

          <button
            type="submit"
            className="bg-destaque hover:bg-orange-800 text-white font-black py-4 rounded-xl transition-all tracking-wider uppercase mt-4 cursor-pointer text-center shadow-md motion-safe:hover:scale-[1.02]"
          >
            Confirmar Minha Vaga
          </button>

        </form>
      </div>
    </section>
  )
}

export default Inscricao
