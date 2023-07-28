import Footer from '../Componentes/Gerais/footer';
import Grid from '../Componentes/Gerais/grid';
import Form from '../Componentes/Contato/form';
import Mapa from '../Componentes/Contato/map';
import styles from '../page.module.css';

export default function Contatos() {
  return (
    <main className={styles.main}>
      <Grid />
      <h1 className={styles.tituloHorizontal}>Contatos</h1>
      <Form />
      <Mapa />
      <Footer />
    </main>
  );
}