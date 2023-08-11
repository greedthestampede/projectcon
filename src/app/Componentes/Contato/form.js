"use client"
import styles from '../../page.module.css'
import React, { useState } from 'react';
import axios from 'axios';

export default function Form() {
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xoqoedbn',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Seu formulário foi enviado!',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return(
    <section className={styles.center}>
      <div className={styles.chamada}>
        <div className={styles.container}>
          <form onSubmit={handleOnSubmit}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor='name'>Nome</label>
              <input type='text' id='name' name='name' onChange={handleOnChange} className={styles.inputField} required value={inputs.name}/>  
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor='email'>Email</label>
              <input type='email' id='email' name='_replyto' onChange={handleOnChange} className={styles.inputField} required value={inputs.email}/>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor='subject'>Assunto</label>
              <input type='text' id='subject' name='subject' onChange={handleOnChange} className={styles.inputField} required value={inputs.subject}/>
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel} htmlFor='message'>Mensagem</label>
              <textarea type='text-area' id='message' name='message' onChange={handleOnChange} className={styles.inputFieldMessage} required value={inputs.message}/>
            </div>
            <button type='submit' className={styles.botaoForm} disabled={status.submitting}>{!status.submitting
              ? !status.submitted
                ? 'Enviar'
                : 'Enviado'
              : 'Enviando...'}</button>
          </form>
          {status.info.error && (
            <div className="error">Error: {status.info.msg}</div>
          )}
          {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
        </div>
      </div>
    </section>
    )
}