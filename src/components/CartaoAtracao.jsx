
function CartaoAtracao({ nome, nivel, descricao }) {

  // Define uma cor para cada nível de dificuldade
  const corNivel =
    nivel === 'Avançado' ? 'bg-red-100 text-red-800' :
    nivel === 'Iniciante' ? 'bg-green-100 text-green-800' :
    nivel === 'Infantil' ? 'bg-purple-100 text-purple-800' :
    'bg-blue-100 text-blue-900'

  return (
    <article className="bg-white p-5 rounded-2xl shadow-xs border border-slate-100 flex flex-col justify-between hover:shadow-md hover:border-blue-200 transition-all motion-safe:active:scale-98">

      <div>
        <span
          className={`inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md mb-3 ${corNivel}`}
        >
          {nivel}
        </span>

        <h3 className="text-xl font-black text-slate-800 mb-1.5 tracking-tight">
          {nome}
        </h3>

        <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold">
          {descricao}
        </p>
      </div>

    </article>
  )
}

export default CartaoAtracao
