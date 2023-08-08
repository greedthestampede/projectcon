import styles from '../../page.module.css';
import { resposta } from './Partes/FuncoesForm';
import { reset } from './Partes/reset';

export default function Form() {
  
  return(
    <section className={styles.center}>
      <div className={styles.chamada}>
        <div className={styles.container}>
          <form action={resposta}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor='name'>Nome</label>
              <input type='text' name='name' className={styles.inputField} required/>  
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor='email'>Email</label>
              <input type='email' name='email' className={styles.inputField} required/>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor='subject'>Assunto</label>
              <input type='text' name='subject' className={styles.inputField} required/>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor='message'>Mensagem</label>
              <textarea type='text-area' name='message' className={styles.inputFieldMessage} required/>
            </div>
            <button type='submit' className={styles.botaoForm} onClick={reset}>Enviar</button>
          </form>
        </div>
      </div>
    </section>
    )
}