import BuyDevice from '../../components/BuyDevice/BuyDevice'; //eslint-disable-line
import sales from '../../assets/json/sales.json';
import style from './Devices.module.css';

export default function Devices () {
  return (
    <div className={style.devices_container}>
      <h1>{sales.category}</h1>
      <p>Todos los equipos nuevos están sellados de fábrica con un año de garantía Apple. Te presentamos algunos equipos que tenemos disponibles.</p>
      {
        sales.devices.map(device => {
          return (
            <div key={device.model}>
              <BuyDevice device={device} order={sales.devices.indexOf(device)}/>
            </div>
          );
        })
      }
    </div>
  );
}
