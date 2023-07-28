import styles from '../../page.module.css'

export async function Descricao() {
    return(
        <div className={styles.paragrafoDescricao}>
            <h2 className={styles.projetoTitulo}>Título do Projeto</h2>
            <h3 className={styles.projetoSubtitulo}>Cidade/ES</h3>
            <p className={styles.projetoTexto}>Projeto de Um</p>
            <p className={styles.projetoTexto}>Projeto de Dois</p>
            <p className={styles.projetoTexto}>Projeto de Três</p>
            <p className={styles.projetoTexto}>Cliente: Nome do Cliente</p>
            <p className={styles.projetoTexto}>Ano: 20XX</p>
        </div>
    )
}