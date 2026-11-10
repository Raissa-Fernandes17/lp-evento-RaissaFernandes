
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
      {/* Link para pular diretamente ao conteúdo */}
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:text-primaria focus:px-4 focus:py-3 focus:rounded-lg focus:font-bold focus:shadow-lg"
      >
        Pular para o conteúdo
      </a>

      <Cabecalho />

      <main id="conteudo">
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
