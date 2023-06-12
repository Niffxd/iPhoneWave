import { useState, useEffect } from 'react';
import style from './Banner.module.css/'; //eslint-disable-line

export default function Banner ({ background, backgroundMedium, backgroundLarge, title, text }) {
  const [bgImage, setBgImage] = useState(null);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    windowSize > 1200
      ? setBgImage(backgroundLarge)
      : windowSize > 600
        ? setBgImage(backgroundMedium)
        : setBgImage(background);
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [window.innerWidth]);

  return (
    <div className={style.banner} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={style.info}>
        <h1>{title}</h1>
        { text ? <p>{text}</p> : '' }
      </div>
    </div>
  );
}
