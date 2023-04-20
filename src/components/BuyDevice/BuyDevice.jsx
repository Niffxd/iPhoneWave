import { Link } from 'react-router-dom'; //eslint-disable-line
import Loader from '../Loader/Loader.jsx'; //eslint-disable-line
import style from './BuyDevice.module.css';

export default function BuyDevice ({ device, order }) {
  return !device
    ? <Loader />
    : <div id={style[`device-${order}`]} className={style.device_content} style={{ backgroundImage: `url('${device.image}')` }}>
        <h1>{device.model}</h1>
        <Link className={style.more_help} to='https://api.whatsapp.com/message/2INV3MBYA7HVP1?autoload=1&app_absent=0' target='_blank'>
          Consultar disponibilidad
        </Link>
      </div>;
}
