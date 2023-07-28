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
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu tincidunt velit. Maecenas eget rutrum mi. Proin egestas enim a malesuada venenatis. Cras placerat diam augue, maximus hendrerit nulla fermentum in. Duis sed tortor sed nisi sollicitudin cursus. Donec et vulputate nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className={styles.paragrafo}>Morbi porta dignissim libero. Donec faucibus cursus nibh. Nam accumsan sollicitudin orci, nec dictum nisi pellentesque at. Cras ut consequat augue. Sed gravida dui ac consequat volutpat. In posuere sapien ac arcu placerat vulputate. Morbi lobortis leo quis justo tincidunt eleifend. Duis quis diam erat.</p>
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