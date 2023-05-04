import style from './Contact.module.css';
import ContactForm from '../../components/ContactForm/ContactForm.jsx'; //eslint-disable-line
import SocialMedia from '../../components/SocialMedia/SocialMedia.jsx'; //eslint-disable-line

export default function Contact () {
  return (
    <div className={style.contact_container}>
      <SocialMedia />
      <ContactForm />
    </div>
  );
}
