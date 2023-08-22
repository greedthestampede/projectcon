import styles from '../../page.module.css'

export default function Clientes() {
    return (
      <div className={styles.centerAlternado}>
        <div className={styles.chamada}>
          <div className={styles.ladoalado}>
            <h1 className={styles.titulo}>
              Clientes
            </h1>
          </div>
          <div className={styles.textolado}>
            <img
              className={styles.clientesImagem}
              src="/logos.png"
              alt="Logo Cliente Placeholder"
              width={2992}
              height={2011}
              priority
            />
          </div>
      </div>
    </div>
    )
}