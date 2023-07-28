import { Carrossel } from "./carrossel";
import styles from '../../page.module.css'
import { Descricao } from "./descricao";

export async function Projeto() {
    return (
        <div className={styles.center}>
            <div className={styles.conjuntoCarrossel}>
                <Carrossel />
                <Descricao />
            </div>
        </div>
    )
}