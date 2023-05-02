import style from './Contact.module.css';
import ContactForm from '../../components/ContactForm/ContactForm.jsx'; //eslint-disable-line

export default function Contact () {
  return (
    <div className={style.contact_container}>
      <h1>Contact</h1>
      <ContactForm />
    </div>
  );
}
