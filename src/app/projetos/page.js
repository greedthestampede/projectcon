import Footer from '../Componentes/Gerais/footer';
import Grid from '../Componentes/Gerais/grid';
import { Projeto } from '../Componentes/Projetos/projeto';
import { ProjetoAlternado } from '../Componentes/Projetos/projetoAlternado';
import styles from '../page.module.css'

export default function Projetos() {
  return (
    <main className={styles.main}>
      <Grid />
      <h1 className={styles.tituloHorizontal}>Projetos</h1>
      <Projeto />
      <ProjetoAlternado />
      <Projeto />
      <ProjetoAlternado />
      <Footer />
    </main>
  );
}