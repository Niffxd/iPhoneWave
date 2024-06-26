import { useState, useEffect } from 'react'; //eslint-disable-line
import { Link, useLocation, useNavigate } from 'react-router-dom'; //eslint-disable-line
import style from './DeviceBudget.module.css';

export default function DeviceBudget ({ loader }) {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [device, setDevice] = useState({});
  const [variation, setVariation] = useState(0);

  const handleColorDevice = (index, length, color, colors) => {
    setVariation(index);
    for (let i = 0; i < length; i++) {
      document.getElementById(i).classList?.remove(style.active);
    }
    for (let i = 0; i < colors.length; i++) {
      document.getElementById(colors[i]).classList?.remove(style.active_color);
    }
    document.getElementById(index).classList.add(style.active);
    document.getElementById(color).classList.add(style.active_color);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    state && setDevice(state);
    if (state === null) navigate('*');
    document.getElementById(0)?.classList?.add(style.active);
    document.getElementById(device.images?.variations[0])?.classList?.add(style.active_color);
  }, [device]);

  return !device.model
    ? <div className={style.loader_container}>
        <img src={loader} alt='loading...' />
      </div>
    : <div className={style.device_detail_container}>
        <div className={style.device_detail_container_header}>
          <Link to='/reparaciones'>
            <h3>{'<'} Listado</h3>
          </Link>
          {/* <Link to='specs'>
            <h3>Especificaciones{' >'}</h3>
          </Link> */}
        </div>
        <div className={style.device_container}>
          <div className={style.device_container_info}>
            <div className={style.device_img_container}>
              <div className={style.device_color_chooser}>
                {
                  device.images.variations.map(color => {
                    return (
                      <div className={style.color_container} key={color}>
                        <span id={device.images.variations.indexOf(color)} className={style.device_color} style={{ backgroundColor: `${device.images.variations_colors[color]}` }} onClick={() => handleColorDevice(device.images.variations.indexOf(color), device.images.variations.length, color, device.images.variations)}></span>
                        <p id={color} className={style.name_color}>{color.replace(/_/gi, ' ')}</p>
                      </div>
                    );
                  })
                }
              </div>
              <div className={style.img_container}>
                <img className={style.device_img} src={`/${device.images.path}/${device.model}/${device.model}_${device.images.variations[variation]}.png`} alt={device.model} />
              </div>
            </div>
            <h1>iPhone {device.model}</h1>
          </div>
          {
            device.parts
              ? <div className={style.parts_container}>
                  <div className={style.parts_title}>
                    <h2>Repuestos</h2>
                    <p>Precios</p>
                  </div>
                  <ul className={style.parts}>
                    {
                      device.parts.lcd && Object.entries(device.parts.lcd).toReversed().map(lcd => {
                        return (
                          <li key={lcd[0]} className={style.parts_item}>
                            <p>
                              Pantalla
                              {
                                lcd[0] === 'alternative'
                                  ? ' alternativa'
                                  : lcd[0] === 'medium'
                                    ? ' calidad original'
                                    : ' original'
                              }
                            </p>
                            <p>
                              {new Intl.NumberFormat('de-DE').format(lcd[1])} USD
                            </p>
                          </li>
                        );
                      })
                    }
                    {
                      device.parts.battery &&
                        <li className={style.parts_item}>
                          <p>Batería</p>
                          <p>{new Intl.NumberFormat('de-DE').format(device.parts.battery)} USD</p>
                        </li>
                    }
                    {
                      device.parts.glass &&
                        <li className={style.parts_item}>
                          <p>Vidrio trasero</p>
                          <p>{new Intl.NumberFormat('de-DE').format(device.parts.glass)} USD</p>
                        </li>
                    }
                    {
                      device.parts.case &&
                        <li className={style.parts_item}>
                          <p>Carcasa</p>
                          <p>{new Intl.NumberFormat('de-DE').format(device.parts.case)} USD</p>
                        </li>
                    }
                    {
                      device.parts.camera && Object.entries(device.parts.camera).toReversed().map(cam => {
                        return (
                          <li key={cam[0]} className={style.parts_item}>
                            <p>
                              Cámara
                              {
                                cam[0] === 'front'
                                  ? ' frontal'
                                  : ' trasera'
                              }
                            </p>
                            <p>{new Intl.NumberFormat('de-DE').format(cam[1])} USD</p>
                          </li>
                        );
                      })
                    }
                    {
                      device.parts.lens &&
                        <li className={style.parts_item}>
                          <p>Lente de cámara</p>
                          <p>{new Intl.NumberFormat('de-DE').format(device.parts.lens)} USD</p>
                        </li>
                    }
                  </ul>
                  <h4 className={style.warranty_adviser}>
                    Todos los arreglos cuentan con 90 días de garantia.*
                  </h4>
                  <h4 className={style.warranty_adviser}>
                    20 % de descuento abonando en efectivo
                  </h4>
                  <h4 className={style.change_adviser}>
                    (Consultar cotización del día)
                  </h4>
                  <Link className={style.more_help} to='https://api.whatsapp.com/message/2INV3MBYA7HVP1?autoload=1&app_absent=0' target='_blank'>
                    Tengo otro problema 😢
                  </Link>
                </div>
              : <div className={style.adviser_container}>
                  <h4 className={style.adviser}>
                      Por el momento no contamos con reparaciones para este equipo. Vuelve más tarde 😄
                    </h4>
                    <Link className={style.more_help} to='https://api.whatsapp.com/message/2INV3MBYA7HVP1?autoload=1&app_absent=0' target='_blank'>
                      Tengo otra consulta 🤓
                    </Link>
                </div>
          }
        </div>
      </div>;
}
