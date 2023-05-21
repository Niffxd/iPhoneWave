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
    : <div className={style.accessories_container}>
      {
        components.map(component => {
          return (
            <div key={component.category} className={style.category_title_content}>
              <h1>{component.category}</h1>
              <div className={style.category_container}>
                <Accessory component={component}/>
              </div>
            </div>
          );
        })
      }
      </div>;
}
