import { Link } from 'react-router-dom'; //eslint-disable-line
import style from './NotFound.module.css';

export default function NotFound ({ categories }) {
  return (
    <div className={style.not_found_container}>
      <h1>¿Te perdiste?</h1>
      <ul id='menu-links' className={style.menu_links}>
          {
            categories.map(({ category, path }) => {
              return (
                <Link className={style.link} key={category} to={path}>
                  <li>{category}</li>
                </Link>
              );
            })
          }
        </ul>
    </div>
  );
}
