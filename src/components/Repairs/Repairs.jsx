import { Link } from 'react-router-dom'; //eslint-disable-line
import icons from '../../assets/json/icons.json';
import style from './Repairs.module.css';

export default function Repairs () {
  return (
    <div className={style.home_container}>
      <div className={style.home_content}>
        <h2>Reparaciones</h2>
        <p>Realizamos cualquier tipo de reparaciones en iPhone. Estamos en constante capacitación para mantenernos siempre actualizados, para poder ofrecerte el mejor servicio!</p>
        <p>Tanto en nuestras cualificaciones como en las herramientas y en los repuestos que utilizamos.</p>
        <p>¡Te ofrecemos garantías de hasta 90 días en todas nuestras reparaciones!</p>
      </div>
      <h2>¿Qué reparamos?</h2>
      <div className={style.repairs_container}>
        <div className={style.icons_container}>
          {
            icons.map(({ icon, path, text }) => {
              return (
                <div key={icon} className={style.home_icon}>
                  <img src={path} alt={icon} width={64}/>
                  <h4>{text}</h4>
                </div>
              );
            })
          }
        </div>
        <Link to='/reparaciones'>
          <button className={style.request}>Solicitar Presupuesto</button>
        </Link>
      </div>
    </div>
  );
}
