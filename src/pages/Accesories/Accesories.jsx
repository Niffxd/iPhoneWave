import Accessory from '../../components/Accessory/Accessory'; //eslint-disable-line
import accessories from '../../assets/json/accessories.json';
import style from './Accesories.module.css';

export default function Accessories ({ loader }) {
  const components = [];

  for (const item in accessories) {
    components.push(accessories[item]);
  }

  return !components.length
    ? <div className={style.loader_container}>
        <img src={loader} alt='loading...' />
      </div>
    : components.map(component => {
      return (
        <div key={component.category} className={style.category_container}>
          <h1>{component.category}</h1>
          <Accessory component={component}/>
        </div>
      );
    });
}
