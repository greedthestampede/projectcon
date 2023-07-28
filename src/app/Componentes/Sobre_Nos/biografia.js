import styles from '../../page.module.css'

export async function Biografia() {
    return(
        <div>
            <div className={styles.center}>
            <div className={styles.chamada}>
                <div className={styles.ladoalado}>
                <h2 className={styles.titulo}>Biografia</h2>
                </div>
                <div className={styles.textolado}>
                <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate nibh eu tincidunt commodo. Sed in lectus nulla. In quis tempor lacus, ac ornare velit. Proin quis sodales arcu, vitae euismod justo. Mauris lorem augue, aliquam nec malesuada cursus, sollicitudin vitae tellus. Integer ipsum nisl, egestas sit amet accumsan quis.</p>
                <p className={styles.paragrafo}>Suspendisse semper eros a ante condimentum, sollicitudin commodo tortor condimentum. Praesent nec sagittis lacus, non sollicitudin metus. Pellentesque interdum massa sit amet scelerisque viverra. Fusce eu nulla erat. Donec porttitor euismod commodo. Quisque dictum vitae felis id imperdiet. Nunc sit amet dictum ligula, id dictum sapien. Fusce consectetur magna vel.</p>
                <p className={styles.paragrafo}>Pellentesque lectus felis, varius sit amet mauris in, consectetur convallis velit. Vestibulum dictum feugiat egestas. Maecenas aliquet ultrices lorem a vulputate. Cras et ligula leo. Aliquam nisl elit, viverra ut quam consectetur, faucibus maximus leo. Curabitur mollis eu est ac varius. Nullam ut libero nisl. Etiam scelerisque erat eu arcu.</p>
                </div>
            </div>
            </div>
            <div className={styles.centerAlternado}>
            <div className={styles.chamada}>
                <div className={styles.ladoalado}>
                <h2 className={styles.titulo}>Ultimo Trabalho</h2>
                </div>
                <div className={styles.textolado}>
                <img src='https://placehold.co/600x400.png' className={styles.ultimoProjetoImagem} />
                <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate nibh eu tincidunt commodo. Sed in lectus nulla. In quis tempor lacus, ac ornare velit. Proin quis sodales arcu, vitae euismod justo. Mauris lorem augue, aliquam nec malesuada cursus, sollicitudin vitae tellus. Integer ipsum nisl, egestas sit amet accumsan quis.</p>
                <p className={styles.paragrafo}>Suspendisse semper eros a ante condimentum, sollicitudin commodo tortor condimentum. Praesent nec sagittis lacus, non sollicitudin metus. Pellentesque interdum massa sit amet scelerisque viverra. Fusce eu nulla erat. Donec porttitor euismod commodo. Quisque dictum vitae felis id imperdiet. Nunc sit amet dictum ligula, id dictum sapien. Fusce consectetur magna vel.</p>
                <p className={styles.paragrafo}>Nullam ipsum nisi, pharetra id est id, condimentum placerat orci. Etiam sagittis justo venenatis, egestas nibh vel, rhoncus mauris. Mauris vitae tellus arcu. Vivamus congue velit quis luctus pharetra. Donec at pellentesque nisi. Aliquam malesuada eget ligula id commodo. Curabitur fringilla ipsum a augue porttitor fringilla. Suspendisse potenti. Curabitur facilisis.</p>
                <p className={styles.paragrafo}>Nulla vulputate nisi sed diam mattis volutpat. Phasellus eu nisl dictum, vestibulum eros varius, maximus libero. Vivamus pellentesque augue ut dui sodales, et blandit arcu scelerisque. Quisque sed ipsum ac libero scelerisque ultrices ac et turpis. Fusce nec nunc vitae nulla tempus dapibus. Morbi dignissim eget erat id commodo. Ut.</p>
                </div>
            </div>
            </div>
        </div>
    )
}