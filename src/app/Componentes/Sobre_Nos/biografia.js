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
                <p className={styles.paragrafo}>A Projectcon foi fundada em XX de (mês) de XXXX, atualmente está localizada na cidade de São Paulo, com o objetivo de…</p>
                <p className={styles.paragrafo}>Atua fortemente no setor de saneamento, com a elaboração de Termos de Referência, Planos diretores, Planos Municipais de Gestão Integrada de Resíduos Sólidos - PMGIRS, porém, não se limita a esta área de atuação, executando serviços de supervisão e apoio técnico em obras e consultorias.</p>
                <p className={styles.paragrafo}>Nesses XX anos de história, executamos serviços em vários municípios do estado de São Paulo e no Rio de Janeiro, sempre prezando pela qualidade técnica na resolução dos problemas e com uma equipe multidisciplinar capaz de lidar com as diversidades que surgirem ao longo dos projetos.</p>
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