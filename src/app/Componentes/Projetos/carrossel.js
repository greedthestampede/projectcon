'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from '../../page.module.css'

export const Carrossel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true , }, [Autoplay()])

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}><img src='https://placehold.co/600x400.png' className={styles.carrosselImagem} /></div>
        <div className={styles.embla__slide}><img src='https://placehold.co/600x400.png' className={styles.carrosselImagem} /></div>
        <div className={styles.embla__slide}><img src='https://placehold.co/600x400.png' className={styles.carrosselImagem} /></div>
      </div>
    </div>
  )
}
