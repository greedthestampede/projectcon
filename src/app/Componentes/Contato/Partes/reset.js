"use client"

export async function reset(event) {
    if (event.target.form.name.value == "" || event.target.form.email.value == "" || event.target.form.subject.value == "" || event.target.form.message.value == "" || event.target.form.email.value.includes('@') == false || event.target.form.email.value.includes('.') == false) {
      
    } else {
      alert("Formulário enviado!")
      window.location.reload();
    }
  }