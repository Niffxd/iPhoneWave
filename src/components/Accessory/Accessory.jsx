import style from './Accessory.module.css';

export default function Accessory ({ component }) {
  return component.type.map(item => {
    return (
      <div key={item.name} className={style.item_content} style={{ backgroundImage: `url('${item.image}')` }}>
        <div className={style.item_description}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      </div>
    );
  });
}
