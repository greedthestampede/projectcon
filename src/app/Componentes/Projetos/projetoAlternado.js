import { Carrossel } from "./carrossel";
import styles from '../../page.module.css'
import { Descricao } from "./descricao";

export async function ProjetoAlternado() {
    return (
        <div className={styles.centerAlternado}>
            <div className={styles.conjuntoCarrossel}>
                <Carrossel />
                <Descricao />
            </div>
        </div>
    )
}