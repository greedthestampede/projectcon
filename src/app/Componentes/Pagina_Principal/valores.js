import styles from '../../page.module.css'

export default function Valores() {
    return (
      <div className={styles.center}>
        <div className={styles.chamada}>
          <div className={styles.ladoalado}>
            <h1 className={styles.titulo}>
              Missão, Visão & Valores
            </h1>
          </div>
          <div className={styles.textolado}>
            <h2 className={styles.tituloMissao}>Missão</h2>
            <p className={styles.paragrafo}>Ser uma empresa reconhecida pela confiabilidade, prestatividade, assertividade e qualidade na implantação e execução das soluções propostas, visando ampliar a área de atuação no país.</p>
            <h2 className={styles.tituloMissao}>Valores</h2>
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