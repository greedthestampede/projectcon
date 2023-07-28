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
              className={styles.valoresImagem}
              src="https://placehold.co/650x150.png"
              alt="Logo Cliente Placeholder"
              width={650}
              height={150}
              priority
            />
          </div>
      </div>
    </div>
    )
}