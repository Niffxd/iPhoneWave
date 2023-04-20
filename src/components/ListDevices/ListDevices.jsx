import { Link } from 'react-router-dom'; //eslint-disable-line
import Loader from '../Loader/Loader.jsx'; //eslint-disable-line
import info from '../../assets/json/devices.json';
import style from './ListDevices.module.css';

export default function ListDevices () {
  return !info
    ? <Loader />
    : <div className={style.list_devices_container}>
        {
          info.devices.toReversed().map(device => {
            return (
              <Link key={device.model} to={`${device.model}`} state={ device } preventScrollReset={false}>
                <div className={style.device_container}>
                  <img className={style.device_img} src={`${device.images.path}/${device.model}/${device.model}_${device.images.variations[0]}.png`} alt={device.model} />
                  <h3>iPhone {device.model}</h3>
                </div>
              </Link>
            );
          })
        }
      </div>;
}
