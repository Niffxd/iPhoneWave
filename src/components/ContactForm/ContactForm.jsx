import { useState } from 'react';
import style from './ContactForm.module.css';

export default function ContactForm () {
  const [sending, setSending] = useState(false);
  const [messageDialog, setMessageDialog] = useState('Por favor complete los campos.');
  const [form, setForm] = useState({
    Nombre: '',
    Cliente: 'no',
    Email: '',
    Mensaje: ''
  });

  const handlerCheckName = event => {
    setForm({
      ...form,
      Nombre: event.target.value
    });

    if (!event.target.value.length) document.getElementById('name').classList.add(style.show_warning);
    else document.getElementById('name').classList?.remove(style.show_warning);
  };

  const handlerCheckEmail = event => {
    setForm({
      ...form,
      Email: event.target.value
    });

    if (!event.target.value.length) document.getElementById('email').classList.add(style.show_warning);
    else document.getElementById('email').classList?.remove(style.show_warning);
    if (!event.target.value.includes('@')) document.getElementById('emailCheck').classList.add(style.show_warning);
    else document.getElementById('emailCheck').classList?.remove(style.show_warning);
    if (!event.target.value.includes('.com')) document.getElementById('emailCheck').classList.add(style.show_warning);
  };

  const handleCheckClient = event => {
    if (event.target.value === 'client') {
      setForm({
        ...form,
        Cliente: 'si'
      });
      document.getElementById('not-client').checked = false;
    } else {
      setForm({
        ...form,
        Cliente: 'no'
      });
      document.getElementById('client').checked = false;
    }
  };

  const handlerCheckMessage = event => {
    setForm({
      ...form,
      Mensaje: event.target.value
    });

    if (!event.target.value.length) document.getElementById('message').classList.add(style.show_warning);
    else document.getElementById('message').classList?.remove(style.show_warning);
  };

  const handlerEmailSend = event => {
    event.preventDefault();
    if (!form.Nombre.length || !form.Email.length || !form.Mensaje.length) {
      handlerShowModal();
    } else {
      setSending(true);
      fetch('https://formsubmit.co/ajax/iphonewavetuc@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
        .then(res => res.json())
        .then(() => {
          setMessageDialog('¡Gracias por tu mensaje!');
          handlerShowModal();
          setForm({
            Nombre: '',
            Cliente: 'no',
            Email: '',
            Mensaje: ''
          });
        })
        .catch(error => console.log(error));
    }
  };

  const handlerPCEmail = event => {
    event.preventDefault();
    window.location.href = 'mailto:iphonewavetuc@gmail.com';
  };

  const handlerShowModal = () => {
    document.getElementById('failEmail').showModal();
    document.getElementById('failEmail').classList.add(`${style.showModal}`);
  };

  const handlerExitModal = () => {
    document.getElementById('failEmail').close();
    setMessageDialog('Please, complete the fields');
    setSending(false);
    document.getElementById('failEmail').classList.remove(`${style.showModal}`);
  };

  return (
    <div className={style.form_container}>
      <form className={style.form}>
        <h2>Mandanos un mensaje 😄</h2>
        <p className={style.client_title}>¿Ya sos cliente? 😎 </p>
        <div className={style.client_form_container}>
          <label htmlFor="client">Si</label>
          <input id='client' type='radio' name='client' value='client' style={{ width: '20px', height: '20px' }} onClick={handleCheckClient}/>
          <label htmlFor="not-client">No</label>
          <input id='not-client' type='radio' name='not-client' defaultChecked={true} value='not-client' style={{ width: '20px', height: '20px' }} onClick={handleCheckClient}/>
        </div>
        <input type='text' name='name' placeholder='Nombre y Apellido' value={form.name} onChange={handlerCheckName}/>
        <p id='name' className={style.warning}>* Este campo no puede estar vacío *</p>
        <input type='text' name='email' placeholder='Email' value={form.email} onChange={handlerCheckEmail}/>
        <p id='email' className={style.warning}>* Este campo no puede estar vacío *</p>
        <p id='emailCheck' className={style.warning}>* Ingrese un correo electrónico válido *</p>
        <input type='text' id={style.message} name='message' placeholder='¿En qué podemos ayudarte?' value={form.message} onChange={handlerCheckMessage}/>
        <p id='message' className={style.warning}>* Este campo no puede estar vacío *</p>
        <button onClick={handlerEmailSend} disabled={sending}>{ sending ? 'Enviando...' : 'Enviar'}</button>
      </form>
      <dialog id='failEmail'>
        <div className={style.warning_fields}>
          <h2>{messageDialog}</h2>
          <button
            id='exitModal'
            onClick={() => handlerExitModal()}
            >Atrás
          </button>
        </div>
      </dialog>
      <p>O tal vez prefieras 👇</p>
      <button onClick={handlerPCEmail}>Enviar mail desde tu aplicación de correo</button>
    </div>
  );
}
