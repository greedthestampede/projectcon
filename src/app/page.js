import styles from './page.module.css'
import Grid from './Componentes/Gerais/grid'
import Footer from './Componentes/Gerais/footer'
import Biografia from './Componentes/Pagina_Principal/biografia'
import Atuacao from './Componentes/Pagina_Principal/atuacao'
import Valores from './Componentes/Pagina_Principal/valores'
import Clientes from './Componentes/Pagina_Principal/clientes'

export default function Home() {
  return (
  <main className={styles.main}>
    <Grid />
    <Biografia />
    <Atuacao />
    <Valores />
    <Clientes />
    <Footer />
  </main>
  )
}
