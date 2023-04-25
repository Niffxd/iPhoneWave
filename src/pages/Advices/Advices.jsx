import Advice from '../../components/Advice/Advice'; //eslint-disable-line
import style from './Advices.module.css';

export default function Advices () {
  return (
    <div className={style.advices_container}>
      <h1>Advices</h1>
      <Advice />
    </div>
  );
}
