import loader from '../../assets/loaders/oval.svg';
import style from './Loader.module.css';

export default function Loader () {
  return (
    <div className={style.loader_container}>
      <img src={loader} alt='loading...' />
    </div>
  );
}
