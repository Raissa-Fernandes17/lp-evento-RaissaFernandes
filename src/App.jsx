import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Programacao from './components/Programacao'
import Atracoes from './components/Atracoes'
import Faq from './components/Faq'
import Inscricao from './components/Inscricao'
import Rodape from './components/Rodape'

function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Faq />
        <Inscricao />
      </main>
      <Rodape />
    </>
  )
}

export default App
