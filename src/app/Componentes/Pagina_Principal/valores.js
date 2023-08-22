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
            <hr className={styles.linhaValores} />
            <h2 className={styles.tituloMissao}>Valores</h2>
            <ul className={styles.paragrafo}>
              <li className={styles.valoresBullet}><span className={styles.destaque}>Excelência</span> no atendimento aos seus clientes</li>
              <li className={styles.valoresBullet}><span className={styles.destaque}>Comprometimento</span> com o bem-estar da sociedade e do meio ambiente</li>
              <li className={styles.valoresBullet}><span className={styles.destaque}>Inovação</span> e melhoria contínua dos seus serviços</li>
              <li className={styles.valoresBullet}><span className={styles.destaque}>Qualidade</span> absoluta nos serviços executados</li>
            </ul>
            
          </div>
        </div>
      </div>
    )
}