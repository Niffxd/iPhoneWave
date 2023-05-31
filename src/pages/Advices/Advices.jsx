import Advice from '../../components/Advice/Advice'; //eslint-disable-line
import ButtonAdvice from '../../components/ButtonAdvice/ButtonAdvice'; //eslint-disable-line
import categories from '../../assets/json/icons.json';
import style from './Advices.module.css';

export default function Advices () {
  return (
    <div className={style.advices_container}>
      <h1>Recomedaciones para cuidar tu iPhone 😄</h1>
      <Advice categories={categories} />
      <section className={style.questions_section}>
        <ButtonAdvice
          link={'https://www.instagram.com/stories/highlights/17896686550819663/'}
          question={'¿Querés ver más tips para tu iPhone?'}
          emoji={'😃'}
          textButton={'Presioná aquí 👈'}
        />
        <ButtonAdvice
          link={'https://api.whatsapp.com/message/2INV3MBYA7HVP1?autoload=1&app_absent=0'}
          question={'¿Conoces algún otro cuidado?'}
          emoji={'🤔'}
          textButton={'¡Comentanos! 😍'}
        />
      </section>
      <section className={style.questions_section}>
        <ButtonAdvice
          link={'https://api.whatsapp.com/message/2INV3MBYA7HVP1?autoload=1&app_absent=0'}
          question={'¿Necesitas asesoramiento?'}
          emoji={'😄'}
          textButton={'Envianos un mensaje 🔧'}
        />
        <ButtonAdvice
          link={'/reparaciones'}
          question={'¿Te gustaría reparar tu equipo?'}
          emoji={'🤓'}
          textButton={'Solicitar Presupuesto 📱'}
        />
      </section>
    </div>
  );
}
