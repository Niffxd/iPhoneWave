import Reviews from '../../components/Reviews/Reviews.jsx'; //eslint-disable-line
import style from './AboutUs.module.css';

export default function AboutUs ({ logo }) {
  return (
    <div className={style.about_us_container}>
      <div className={style.about_us_content}>
        <img src='/service/team.jpg' alt='iphone-wave' />
        <div className={style.photo_description}>
          <h2>¡Gracias por acompañarnos en este camino!</h2>
          <p>Somos familia y amigos, los valores que heredamos. Somos un equipo de técnicos especializadas en iPhone, comprometidos y apasionados con nuestro trabajo. Ofrecemos un servicio personalizado, profesional y confiable.</p>
        </div>
      </div>
      <Reviews logo={logo} />
    </div>
  );
}
