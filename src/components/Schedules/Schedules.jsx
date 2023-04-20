import style from './Schedules.module.css';

export default function Schedules () {
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
  return (
    <div className={style.schedules_container}>
      <h2>Horarios de atención</h2>
      {
        days.map(day => {
          return (
            <span key={day} className={style.schedules}>
              <p>{day}</p>
              <p>{
                day !== 'Sábado'
                  ? '9:00 - 21:00 hs'
                  : '10:00 - 15:00 hs'
              }</p>
            </span>
          );
        })
      }
    </div>
  );
}
