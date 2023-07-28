import Link from 'next/link'
import styles from '../../page.module.css'

export default function Footer() {
    return(
        <div className={styles.foot}>
      <div className={styles.footCentro}>
      <div className={styles.chamada_footAlternado}>
        <Link href="/">Página Inicial</Link>
        <Link href="/projetos">Projetos</Link>
        <Link href="/sobre_nos">Sobre Nós</Link>
        <Link href="/contatos">Contatos</Link>
      </div>
      <div className={styles.chamada_foot}>
        <h2>Telefone</h2>
        <p>+55 (11) 3061-4010</p>
        <h2>Endereço</h2>
        <p>R. Cap. Antônio Rosa, 376 - Pinheiros, São Paulo - SP, 01443-010</p>
      </div>
      <div className={styles.chamada_footAlternado}>
        <h2>Redes Sociais</h2>
        <a>Discord</a>
        <a>Instagram</a>
        <a>Twitter</a>
      </div>
    </div>
      </div>
    )
}