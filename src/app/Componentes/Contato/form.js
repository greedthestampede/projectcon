import styles from '../../page.module.css';
import { reset } from './Partes/reset';

export default function Form() {
  
  return(
    <section className={styles.center}>
      <div className={styles.chamada}>
        <div className={styles.container}>
          <form action="https://docs.google.com/forms/u/3/d/e/1FAIpQLScmCfYptBZk8VUjrXUk3qQ16TP-2-oHN6aT4DqeBzxxailBEw/formResponse">
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor='entry.184592984'>Nome</label>
              <input type='text' id='formName' name='entry.184592984' className={styles.inputField} required/>  
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor='entry.1775019266'>Email</label>
              <input type='text' name='entry.1775019266' className={styles.inputField} required/>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor='entry.1874650118'>Assunto</label>
              <input type='text' name='entry.1874650118' className={styles.inputField} required/>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor='entry.1658217200'>Mensagem</label>
              <textarea type='text-area' name='entry.1658217200' className={styles.inputFieldMessage} required/>
            </div>
            <button type='submit' className={styles.botaoForm} onClick={reset}>Enviar</button>
          </form>
        </div>
      </div>
    </section>
    )
}