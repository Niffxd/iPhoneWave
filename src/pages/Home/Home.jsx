import { useEffect } from 'react';
import Banner from '../../components/Banner/Banner'; //eslint-disable-line
import Repairs from '../../components/Repairs/Repairs'; //eslint-disable-line
import Map from '../../components/Map/Map'; //eslint-disable-line
import Schedules from '../../components/Schedules/Schedules'; //eslint-disable-line
import AboutUsPage from '../AboutUs/AboutUs'; //eslint-disable-line
import background from '../../assets/images/home/banner.jpg';
import backgroundLarge from '../../assets/images/home/bg-large.jpg';
import backgroundMedium from '../../assets/images/home/bg-md.jpg';
import style from './Home.module.css';

export default function Home ({ logo }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.home_container}>
      <Banner
        background={background}
        backgroundLarge={backgroundLarge}
        backgroundMedium={backgroundMedium}
        title={'¡El mejor servicio para tu iPhone!'}
      />
      <Repairs />
      <AboutUsPage logo={logo} stop={true}/>
      {/* <Reviews logo={logo} stop={true} /> */}
      <h2>Dónde encontrarnos</h2>
      <div className={style.location_container}>
        <Map />
        <Schedules />
      </div>
    </div>
  );
}
