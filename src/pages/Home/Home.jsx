import Banner from '../../components/Banner/Banner'; //eslint-disable-line
import Repairs from '../../components/Repairs/Repairs'; //eslint-disable-line
import Schedules from '../../components/Schedules/Schedules'; //eslint-disable-line
import background1 from '../../assets/images/home/bg-home.png';
import style from './Home.module.css';

export default function Home () {
  return (
    <div className={style.home_container}>
      <Banner
        background={background1}
        title={'¡El mejor servicio para tu iPhone!'}
      />
      <Repairs />
      <Schedules />
    </div>
  );
}
