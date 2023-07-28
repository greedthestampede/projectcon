import Image from 'next/image'
import styles from '../../page.module.css'
import Link from 'next/link'


export default function Grid() {
    return (
      <div className={styles.grid}>
         <nav className={styles.navBar}>
        <Link
              href="/"
              className={styles.navLogo}
              rel="noopener noreferrer"
            >
              <Image
                src="/Projectcon.png"
                alt="Logo Projectcon"
                className={styles.novoLogo}
                width={300}
                height={94}
                priority
              />
        </Link>
        <Link
          href="/projetos"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Projetos
          </h2>
        </Link>
  
        <Link
          href="/sobre_nos"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Sobre Nós
          </h2>
        </Link>
  
        <Link
          href="/contatos"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Contatos
          </h2>
        </Link>
        </nav>
      </div>
    )
}