function CartaoAtracao({ nome, nivel, descricao }) {
  // Define uma cor dinâmica para cada nível de dificuldade
  const corNivel = 
    nivel === 'Avançado' ? 'bg-red-100 text-red-700' :
    nivel === 'Iniciante' ? 'bg-green-100 text-green-700' :
    nivel === 'Infantil' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-primaria'

  return (
    <article className="bg-white p-5 rounded-2xl shadow-xs border border-slate-100 flex flex-col justify-between hover:shadow-md hover:border-blue-200 transition-all active:scale-98">
      <div>
        <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md mb-3 ${corNivel}`}>
          {nivel}
        </span>
        <h3 className="text-xl font-black text-slate-800 mb-1.5 tracking-tight">
          {nome}
        </h3>
        
        {/* BEM AQUI: Subimos de text-xs/text-sm para text-sm sm:text-base e deixamos text-slate-600 para dar mais nitidez */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
          {descricao}
        </p>
      </div>
    </article>
  )
}

export default CartaoAtracao
