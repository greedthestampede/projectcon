import Footer from '../Componentes/Gerais/footer';
import Grid from '../Componentes/Gerais/grid';
import { Biografia } from '../Componentes/Sobre_Nos/biografia';
import styles from '../page.module.css'

export default function Sobre_Nos() {
  return (
    <main className={styles.main}>
      <Grid />
      <h1 className={styles.tituloHorizontal}>Sobre Nós</h1>
      <Biografia />
      <Footer />
    </main>
  );
}