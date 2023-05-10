import { Link } from 'react-router-dom'; //eslint-disable-line
import Advice from '../../components/Advice/Advice'; //eslint-disable-line
import categories from '../../assets/json/icons.json';
import style from './Advices.module.css';

export default function Advices () {
  return (
    <div className={style.advices_container}>
      <h1>Recomedaciones para cuidar tu iPhone 😄</h1>
      <Advice categories={categories} />
      <h2>¿Necesitas asesoramiento?</h2>
      <Link to='https://api.whatsapp.com/message/2INV3MBYA7HVP1?autoload=1&app_absent=0' target='_blank'>
        <button className={style.request}>Envianos un mensaje 😄</button>
      </Link>
      <h2>¿Te gustaría reparar tu equipo?</h2>
      <Link to='/reparaciones'>
        <button className={style.request}>Solicitar Presupuesto 🤓</button>
      </Link>
    </div>
  );
}
