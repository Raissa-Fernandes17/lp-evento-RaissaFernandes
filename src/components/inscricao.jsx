import { useState } from 'react'
import { ingressos, evento } from '../data/evento'

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
      <section
        id="inscricao"
        aria-labelledby="titulo-confirmacao"
        className="py-20 sm:py-24 bg-white"
      >
        <div className="section-shell max-w-2xl">
          <div
            role="status"
            aria-live="polite"
            className="bg-green-50 border-2 border-green-200 p-8 sm:p-10 rounded-3xl text-center text-green-900 shadow-xl animate-fade-in"
          >
            <div
              aria-hidden="true"
              className="w-16 h-16 bg-green-700 rounded-2xl flex items-center justify-center mx-auto mb-5 text-white text-3xl font-bold shadow-md"
            >
              ✓
            </div>

            <h2
              id="titulo-confirmacao"
              className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight mb-2"
            >
              Inscrição Confirmada!
            </h2>

            <p className="text-lg font-medium">
              Preparado para correr, <span className="font-extrabold text-green-800">{nome}</span>?
            </p>

            <div className="bg-white border border-green-200/80 p-5 rounded-2xl my-6 text-sm font-semibold flex flex-col gap-2 items-center shadow-2xs">
              <div className="text-base font-bold text-primaria">
                <span aria-hidden="true">🎟️ </span>
                Categoria: {ingressoSelecionado}
              </div>

              <div className="text-xs uppercase tracking-wider font-bold text-slate-600">
                Quantidade: {quantidade}x
              </div>

              <div className="text-lg font-black text-green-800 mt-1 border-t border-green-100 pt-2 w-full text-center">
                Total: R$ {valorTotal},00
              </div>
            </div>

            <p className="text-sm text-green-900 leading-relaxed">
              O comprovante e as instruções de retirada do kit foram enviados para <strong>{email}</strong>.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="inscricao"
      aria-labelledby="titulo-inscricao"
      className="py-20 sm:py-24 bg-white"
    >
      <div className="section-shell reveal">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Coluna informativa à esquerda */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="section-kicker">Garanta seu Lugar</span>
              <h2
                id="titulo-inscricao"
                className="section-title text-left mt-2"
              >
                Inscreva-se Já
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
                Garanta seu kit com camiseta refletiva e medalha!
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/90 bg-slate-50 p-6 space-y-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-destaque">
                O que está incluído no kit oficial
              </p>
              <ul className="space-y-3 text-sm font-bold text-primaria">
                {[
                  'Camiseta oficial com detalhes refletivos',
                  'Número de peito personalizado',
                  'Chip de cronometragem eletrônica',
                  'Medalha pós-prova para todos os concluintes',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-destaque text-white text-xs font-black"
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200/80 text-xs font-semibold text-slate-600 space-y-1">
                <p className="text-primaria font-extrabold">{evento.data}</p>
                <p>{evento.local}</p>
              </div>
            </div>
          </div>

          {/* Card do formulário em azul-marinho */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden bg-primaria text-white p-6 sm:p-9 rounded-3xl shadow-2xl border border-white/10">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-destaque via-orange-400 to-destaque"
              />

              <div className="flex items-center justify-between gap-4 mb-7 pb-5 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-orange-300">
                    Ficha do Atleta
                  </span>
                  <p className="font-display text-2xl sm:text-3xl font-black uppercase text-white mt-0.5">
                    Dados da Inscrição
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-destaque/20 text-orange-400 ring-1 ring-orange-400/30"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <rect x="8" y="2" width="8" height="4" rx="1" />
                    <path d="M9 14l2 2 4-4" />
                  </svg>
                </span>
              </div>

              <form onSubmit={lidarEnvio} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="nome"
                    className="text-xs uppercase tracking-[0.14em] font-bold text-slate-200"
                  >
                    Nome Completo
                  </label>

                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Digite seu nome completo"
                    value={nome}
                    aria-invalid={erroNome ? 'true' : 'false'}
                    aria-describedby={erroNome ? 'erro-nome' : undefined}
                    onChange={e => {
                      setNome(e.target.value)
                      setErroNome('')
                    }}
                    className={`w-full px-4 py-3.5 bg-white/[0.06] border ${
                      erroNome ? 'border-red-400' : 'border-white/15 hover:border-white/30'
                    } rounded-xl text-white placeholder:text-slate-400 font-medium focus:border-orange-400 focus:bg-white/[0.09] transition-all`}
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

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-[0.14em] font-bold text-slate-200"
                  >
                    E-mail de Contato
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="voce@exemplo.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/15 hover:border-white/30 rounded-xl text-white placeholder:text-slate-400 font-medium focus:border-orange-400 focus:bg-white/[0.09] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="flex flex-col gap-1.5 sm:col-span-8">
                    <label
                      htmlFor="ingresso"
                      className="text-xs uppercase tracking-[0.14em] font-bold text-slate-200"
                    >
                      Modalidade / Ingresso
                    </label>

                    <select
                      id="ingresso"
                      name="ingresso"
                      value={ingresso}
                      onChange={e => setIngresso(e.target.value)}
                      className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/15 hover:border-white/30 rounded-xl text-white font-semibold focus:border-orange-400 focus:bg-white/[0.09] transition-all cursor-pointer"
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

                  <div className="flex flex-col gap-1.5 sm:col-span-4">
                    <label
                      htmlFor="quantidade"
                      className="text-xs uppercase tracking-[0.14em] font-bold text-slate-200"
                    >
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
                      className="w-full px-4 py-3.5 bg-white/[0.06] border border-white/15 hover:border-white/30 rounded-xl text-white font-bold focus:border-orange-400 focus:bg-white/[0.09] transition-all text-center"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="button-primary w-full mt-3 py-4 text-sm sm:text-base cursor-pointer"
                >
                  <span>Confirmar Minha Vaga</span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Inscricao
