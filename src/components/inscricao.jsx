import { useState } from 'react' // Importa o hook para controlar os campos

function Inscricao() { // Mudamos o nome para bater com o seu arquivo Inscricao.jsx
    const [email, setEmail] = useState('')
    const [enviado, setEnviado] = useState(false)

    function enviar(e) {
        e.preventDefault() // Impede a página de recarregar
        setEnviado(true)
    }

    if (enviado) {
        return <p role="status">Pronto! Vamos avisar {email} sobre a próxima feira.</p>
    }

    return (
        <form onSubmit={enviar}>
            <label>
                E-mail
                <input
                    type="email"
                    required
                    value={email} // Campo controlado: o valor vem do estado
                    onChange={(e) => setEmail(e.target.value)} // Atualiza o estado ao digitar
                />
            </label>
            <button type="submit">Quero receber</button>
        </form>
    )
}

export default Inscricao // Exporta para que o App.jsx consiga ler
