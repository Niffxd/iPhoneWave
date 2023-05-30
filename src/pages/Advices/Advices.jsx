import { Link } from 'react-router-dom'; //eslint-disable-line
import Advice from '../../components/Advice/Advice'; //eslint-disable-line
import categories from '../../assets/json/icons.json';
import style from './Advices.module.css';

export default function Advices () {
  return (
    <div className={style.advices_container}>
      <h1>Recomedaciones para cuidar tu iPhone 😄</h1>
      <Advice categories={categories} />
      <div className={style.tips_content}>
        <h2>¿Querés ver más tips para tu iPhone? 😃</h2>
        <Link to='https://www.instagram.com/stories/highlights/17896686550819663/' target='_blank'>
          <button className={style.request}>Presioná aquí 👈</button>
        </Link>
      </div>
      <section className={style.questions_section}>
        <div className={style.question_content}>
          <h2>¿Necesitas asesoramiento? 😄</h2>
          <Link to='https://api.whatsapp.com/message/2INV3MBYA7HVP1?autoload=1&app_absent=0' target='_blank'>
            <button className={style.request}>Envianos un mensaje 🔧</button>
          </Link>
        </div>
        <div className={style.question_content}>
          <h2>¿Te gustaría reparar tu equipo? 🤓</h2>
          <Link to='/reparaciones'>
            <button className={style.request}>Solicitar Presupuesto 📱</button>
          </Link>
        </div>
      </section>
    </div>
  );
}
