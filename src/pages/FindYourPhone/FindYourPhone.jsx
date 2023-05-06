import { Link } from 'react-router-dom'; //eslint-disable-line
import style from './FindYourPhone.module.css';

export default function FindYourPhone () {
  return (
    <div className={style.find_your_phone_container}>
      <h1>Pasos para identificar tu iPhone</h1>
      <iframe className={style.video} src='https://www.youtube.com/embed/82Nzx0nk7U4' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
      <Link to='/reparaciones'>
        <button>
          Volver
        </button>
      </Link>
      <h2>¿Necesitas más info?</h2>
      <Link to='https://support.apple.com/es-es/HT201296' target='_blank'>
        👉 Ingresa aquí 👈
      </Link>
    </div>
  );
}
