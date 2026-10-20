function CartaoAutor({ nome, genero }) {
    return (
        <article className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-xl font-bold">{nome}</h3>
            <p>{genero}</p>
        </article>
    )
}
export default CartaoAutor