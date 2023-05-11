import style from './Map.module.css';

export default function Map () {
  return (
    <div className={style.map_container}>
      <iframe className={style.map} src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.702959834965!2d-65.27066382374724!3d-26.81758518923723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225defd95b52ef%3A0x8574f08269ff7554!2sIphone%20Wave!5e0!3m2!1ses-419!2sar!4v1683841541068!5m2!1ses-419!2sar' allowFullScreen={false} loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
    </div>
  );
}
