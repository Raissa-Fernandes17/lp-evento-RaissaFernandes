import { evento } from '../data/evento' //

function Rodape() { //
    return (
        <footer className="bg-neutral-900 text-white text-center py-6 mt-10">
            {evento.nome} · {evento.data}
        </footer>
    )
} //

export default Rodape // Adicione isso no fim para permitir que o App.jsx use o componente!
