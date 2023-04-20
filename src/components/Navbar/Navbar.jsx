import { Link } from 'react-router-dom'; //eslint-disable-line
import style from './Navbar.module.css';

export default function Navbar ({ logo, banner, categories }) {
  const handleMenu = () => {
    if (!document.getElementById('menu').classList.value.includes(`${style['show-menu']}`)) {
      document.getElementById('menu').classList.add(`${style['show-menu']}`);
    } else {
      document.getElementById('menu').classList.remove(`${style['show-menu']}`);
    }

    if (!document.getElementById('menu-links').classList.value.includes(`${style['show-menu-links']}`)) {
      document.getElementById('menu-links').classList.add(`${style['show-menu-links']}`);
    } else {
      document.getElementById('menu-links').classList.remove(`${style['show-menu-links']}`);
    }

    window.addEventListener('click', event => {
      if (!document.getElementById('menu').contains(event.target) && !document.getElementById('menu-links').contains(event.target)) {
        document.getElementById('menu-links').classList.remove(`${style['show-menu-links']}`);
        document.getElementById('menu').classList.remove(`${style['show-menu']}`);
      }
    });
  };

  return (
    <nav className={style.navbar_container}>
      <Link to='/'>
        <img className={style.logo} src={logo} alt="logo" width={60}/>
      </Link>
      <Link to='/'>
        <img className={style.img_banner} src={banner} alt='name' width={128}/>
      </Link>
      <div className={style.navbar_content}>
        <button id='menu' className={style.menu} onClick={handleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul id='menu-links' className={style.menu_links}>
          {
            categories.map(({ category, path }) => {
              return (
                <Link className={style.link} key={category} to={path} onClick={handleMenu}>
                  <li>{category}</li>
                </Link>
              );
            })
          }
        </ul>
      </div>
    </nav>
  );
}
