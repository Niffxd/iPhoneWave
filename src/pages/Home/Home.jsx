import Banner from '../../components/Banner/Banner'; //eslint-disable-line
import Reviews from '../../components/Reviews/Reviews'; //eslint-disable-line
import Repairs from '../../components/Repairs/Repairs'; //eslint-disable-line
import Map from '../../components/Map/Map'; //eslint-disable-line
import Schedules from '../../components/Schedules/Schedules'; //eslint-disable-line
import background1 from '../../assets/images/home/banner.jpg';
import style from './Home.module.css';

export default function Home ({ logo }) {
  return (
    <div className={style.home_container}>
      <Banner
        background={background1}
        title={'¡El mejor servicio para tu iPhone!'}
      />
      <Reviews logo={logo} text={'Algunos de nuestros clientes 😉'} stop={true} />
      <Repairs />
      <h2>Dónde encontrarnos</h2>
      <Map />
      <Schedules />
    </div>
  );
}
