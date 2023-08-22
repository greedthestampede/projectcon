import styles from '../../page.module.css'

export default function Biografia() {
    return (
      <div className={styles.center}>
        <div className={styles.chamada}>
          <div className={styles.ladoalado}>
            <h1 className={styles.titulo}>
              Biografia
            </h1>
          </div>
          <div className={styles.textolado}>
            <p className={styles.paragrafo}>
            A empresa Projectcon Consultoria e Projetos LTDA, atua no mercado de gerenciamento desde XXXX, atualmente comandada por XXX(nome da pessoa), formado em XXX(Formação acadêmica).</p>
            <p className={styles.paragrafo}>
            Foi criada com o propósito de atender as expectativas dos seus clientes oferecendo um serviço de qualidade, no prazo esperado, apresentando soluções inovadoras e de forma sustentável.</p>
          </div>          
        </div>
      </div>
    )
}