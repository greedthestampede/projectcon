"use client"
require('dotenv').config();
import styles from '../../page.module.css';
import { resposta } from './Partes/FuncoesForm';

export default function Form() {
  
  async function reset(event) {
    if (event.target.form.name.value == "" || event.target.form.email.value == "" || event.target.form.subject.value == "" || event.target.form.message.value == "" || event.target.form.email.value.includes('@') == false || event.target.form.email.value.includes('.') == false) {
      
    } else {
      alert("Formulário enviado!")
      window.location.reload();
    }
  }

  return(
    <div className={styles.center}>
      <div className={styles.chamada}>
        <div className={styles.container}>
          <form action={resposta}>
            <formgroup className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor='name'>Nome</label>
              <input type='text' name='name' className={styles.inputField} required/>  
            </formgroup>
            <formgroup className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor='email'>Email</label>
              <input type='email' name='email' className={styles.inputField} required/>
            </formgroup>
            <formgroup className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor='subject'>Assunto</label>
              <input type='text' name='subject' className={styles.inputField} required/>
            </formgroup>
            <formgroup className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor='message'>Mensagem</label>
              <textarea type='text-area' name='message' className={styles.inputFieldMessage} required/>
            </formgroup>
            <button type='submit' className={styles.botaoForm} onClick={reset}>Enviar</button>
          </form>
        </div>
      </div>
    </div>
    )
}