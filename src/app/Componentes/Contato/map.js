import styles from '../../page.module.css';

export default function Mapa() {
    return (
        <section className={styles.centerAlternado}>
            <div className={styles.mapa}>
                <iframe src="https://storage.googleapis.com/maps-solutions-x3kuqb1oht/locator-plus/3iah/locator-plus.html"
                    height="100%" width="100%" style={{border: 0}}>
                </iframe>
            </div>
        </section>
    )
}