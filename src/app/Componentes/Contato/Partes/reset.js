"use client"

export async function reset(event) {
  console.log(event.target.form[1].value);
  if (event.target.form[0].value == "" || event.target.form[1].value == "" || event.target.form[2].value == "" || event.target.form[3].value == "" || event.target.form[1].value.includes('@') == false || event.target.form[1].value.includes('.') == false) {
      
    } else {
      setTimeout(function(){
        window.location.reload();
      }, 2000);
      alert("Formulário enviado!")
    }
  }

