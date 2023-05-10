import style from './Advice.module.css';

export default function Advice ({ categories }) {
  return (
    <div className={style.advice_container}>
      {
        categories.map(({ icon, path, path2, text, tips }) => {
          return tips
            ? <div key={icon} className={style.advice}>
                <div className={style.advice_icon}>
                  <img src={path} alt={icon} />
                  {path2 && <img src={path2} alt={icon}/>}
                </div>
                <h2>{text}</h2>
                {
                  tips.map(({ title, image, description, recommendations }) => {
                    return (
                      <div key={title} className={style.advice_content}>
                        <h3>{title}</h3>
                        <img src={image} alt={icon} />
                        <p>{description}</p>
                        <ul>
                          {
                            recommendations.map(recommendation => {
                              return (
                                <li key={recommendation}>
                                  {recommendations.indexOf(recommendation) + 1}. {recommendation}
                                </li>
                              );
                            })
                          }
                        </ul>
                      </div>
                    );
                  })
                }
              </div>
            : '';
        })
      }
    </div>
  );
}
