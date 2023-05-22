import { useEffect } from 'react';
import { Link } from 'react-router-dom'; //eslint-disable-line
import style from './FindYourPhone.module.css';

export default function FindYourPhone () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.find_your_phone_container}>
      <h1>Pasos para identificar tu iPhone</h1>
      <div className={style.video_container}>
        <iframe className={style.video} src='https://www.youtube.com/embed/82Nzx0nk7U4' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowFullScreen></iframe>
        <div className={style.buttons}>
          <h2>¿Necesitas más info?</h2>
          <Link to='https://support.apple.com/es-es/HT201296' target='_blank'>
            👉 Ingresa aquí 👈
          </Link>
          <Link to='/reparaciones'>
            <button>
              Volver
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
