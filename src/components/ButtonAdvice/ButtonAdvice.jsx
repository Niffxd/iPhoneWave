import { Link } from 'react-router-dom'; //eslint-disable-line
import style from './ButtonAdvice.module.css';

export default function ButtonAdvice ({ link, question, emoji, textButton }) {
  return (
    <div className={style.tips_content}>
      <h2>{question} {emoji}</h2>
      <Link to={link} target='_blank'>
        <button className={style.request}>{textButton}</button>
      </Link>
    </div>
  );
}
