import { Link } from 'react-router-dom'; //eslint-disable-line
import style from './DidYouKnow.module.css';

export default function DidYouKnow () {
  return (
    <div className={style.did_you_know_container}>
      <Link to='/encuentra-tu-iphone'>
        <button>Seguí estos pasos 🤓</button>
      </Link>
    </div>
  );
}
