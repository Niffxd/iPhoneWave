import { useEffect } from 'react';
import ListDevices from '../../components/ListDevices/ListDevices.jsx'; //eslint-disable-line
import DidYouKnow from '../../components/DidYouKnow/DidYouKnow.jsx'; //eslint-disable-line
import style from './Repairs.module.css';

export default function Repairs () {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className={style.repairs_container}>
      <h1>¿No encontrás tu modelo?</h1>
      <DidYouKnow />
      <h1>¿Qué modelo de iPhone tenés?</h1>
      <ListDevices />
    </div>
  );
}
