import style from './Banner.module.css/'; //eslint-disable-line

export default function Banner ({ background, title, text }) {
  return (
    <div className={style.banner} style={{ backgroundImage: `url(${background})` }}>
      <div className={style.info}>
        <h1>{title}</h1>
        { text ? <p>{text}</p> : '' }
      </div>
    </div>
  );
}
