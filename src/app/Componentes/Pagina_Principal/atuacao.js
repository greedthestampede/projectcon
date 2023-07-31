'use client'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import styles from '../../page.module.css'
import '@splidejs/react-splide/css/skyblue';

export default function Atuacao() {
    return (
        <div className={styles.centerAlternado}>
      <div className={styles.chamada}>
        <div className={styles.ladoalado}>
          <h1 className={styles.titulo}>
            Áreas de Atuação
          </h1>
        </div>
        <div className={styles.textolado}>
          <Splide className={styles.conjuntoSplide} options={{type: 'loop', perPage: 3, focus: 'center', autoplay: true, snap: true, padding: { left: '1rem', right: '1rem' }, gap: "2rem", arrows: false}} aria-label="My Favorite Images">
            <SplideSlide>
              <div className={styles.cartaoAtuacao}>
                <h2 className={styles.cartaoTitulo}>Atuação</h2>
                <img src="https://placehold.co/200x100.png" className={styles.cartaoImagem} alt="Image 1"/>
                <p className={styles.cartaoTexto}>Nam accumsan sollicitudin orci, nec dictum nisi pellentesque at. Cras ut consequat augue. Sed gravida dui ac consequat volutpat.</p>
              </div>
            </SplideSlide>
            <SplideSlide>
            <div className={styles.cartaoAtuacao}>
                <h2 className={styles.cartaoTitulo}>Atuação</h2>
                <img src="https://placehold.co/200x100.png" className={styles.cartaoImagem} alt="Image 2"/>
                <p className={styles.cartaoTexto}>Cras ut consequat augue. Sed gravida dui ac consequat volutpat. In posuere sapien ac arcu placerat vulputate. Sed gravida dui ac consequat volutpat.</p>
              </div>
            </SplideSlide>
            <SplideSlide>
            <div className={styles.cartaoAtuacao}>
                <h2 className={styles.cartaoTitulo}>Atuação</h2>
                <img src="https://placehold.co/200x100.png" className={styles.cartaoImagem} alt="Image 3"/>
                <p className={styles.cartaoTexto}>Cras ut consequat aug. Sed gravida dui ac consequat volutpat. In posuere sapien ac arcu placerat vulputate.</p>
              </div>
            </SplideSlide>
            <SplideSlide>
            <div className={styles.cartaoAtuacao}>
                <h2 className={styles.cartaoTitulo}>Atuação</h2>
                <img src="https://placehold.co/200x100.png" className={styles.cartaoImagem} alt="Image 4"/>
                <p className={styles.cartaoTexto}>Cras ut consequat aug. Sed gravida dui ac consequat volutpat. In posuere sapien ac arcu placerat vulputate.</p>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
    )
}