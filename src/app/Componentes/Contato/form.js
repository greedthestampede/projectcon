"use client"
require('dotenv').config();
import styles from '../../page.module.css';
import { resposta } from './Partes/FuncoesForm';

export default function Form() {
  
  async function enviar() {
    if (input.value.lenght == 0) {
      alert("Preencha os campos do formulário!");
    }
    alert("Dados enviados!");
    window.location.reload();
  }

  return(
    <div className={styles.center}>
      <div className={styles.chamada}>
        <div className={styles.container}>
          <form action={resposta}>
            <formgroup className={styles.inputGroup}>
              <label htmlFor='name'>Nome</label>
              <input type='text' name='name' className={styles.inputField} required/>  
            </formgroup>
            <formgroup className={styles.inputGroup}>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' className={styles.inputField} required/>
            </formgroup>
            <formgroup className={styles.inputGroup}>
              <label htmlFor='message'>Mensagem</label>
              <textarea type='text-area' name='message' className={styles.inputFieldMessage} required/>
            </formgroup>
            <button type='submit' className={styles.botaoForm} onClick={enviar}>Enviar</button>
          </form>
        </div>
      </div>
    </div>
    )
}