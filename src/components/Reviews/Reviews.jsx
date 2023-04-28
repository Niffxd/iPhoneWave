import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; //eslint-disable-line
import infoDb from '../../assets/json/reviews.json';
import Loader from '../Loader/Loader.jsx'; //eslint-disable-line
import style from './Reviews.module.css';

export default function Reviews ({ logo }) {
  const [data, setData] = useState({});
  const [endRev, setEndRev] = useState(10);

  // const link = 'https://serpapi.com/search?engine=google_maps_reviews';
  // const dataId = '&data_id=0x94225defd95b52ef%3A0x8574f08269ff7554';
  // const lang = '&hl=es';
  // const API_KEY = '&key=6e3e23ff630bc8072a348cae3b7fe1d9a2062798271d8741802c4133449e2d62';
  // const sort = '&sort_by=ratingHigh';
  // const api = link + dataId + lang + sort + API_KEY;

  // const getData = async (url) => {
  //   const info = await fetch(url).then(res => res.json());
  //   info.error
  //     ? setData(infoDb.reviews)
  //     : setData(info.reviews);
  // };

  const setSlice = () => {
    if (endRev >= 60) {
      document.getElementById('load_comments').classList.add(style.show_button);
      document.getElementById('live_comments').classList.add(style.live_button);
    } else {
      setEndRev(endRev + 10);
    }
  };

  useEffect(() => {
    // getData(api);
    setData(infoDb.reviews);
  }, [data]);

  return !data.length
    ? <Loader />
    : <div className={style.reviews_container}>
        <h1>Que te lo cuenten nuestros clientes 😉</h1>
        {
          data.slice(0, endRev).map(review => {
            return (
              <Link key={review.link} to={review.link} className={style.review_container} target='_blank'>
                <div className={style.user_container}>
                  <img src={review.user.thumbnail} alt={review.user.name} />
                  <div className={style.user_info}>
                    <h3>{review.user.name}</h3>
                    <p>{review.user.local_guide ? 'Guía local · ' : ''}{review.user.reviews} opiniones</p>
                  </div>
                </div>
                <div className={style.score}>
                  {
                    Array.apply(0, Array(review.rating)).map(star => {
                      return <span>⭐</span>;
                    })
                  }
                  <p>- {review.date}</p>
                </div>
                <div className={style.review_content}>
                  <p>{review.snippet ? review.snippet : <em>Sin comentarios...</em>}</p>
                </div>
                <span>{review.likes ? `❤️${review.likes}` : '❤️ 0'}</span>
                {
                  review.response
                    ? <div className={style.response_container}>
                        <div className={style.user_container_response}>
                          <img src={logo} alt='logo'/>
                          <div className={style.user_info_response}>
                            <h3>{infoDb.place_info.title}</h3>
                            <p>{infoDb.place_info.rating} ⭐ · {infoDb.place_info.reviews} opiniones</p>
                          </div>
                        </div>
                        <p>{review.response.snippet}</p>
                    </div>
                    : ''
                }
              </Link>
            );
          })
        }
        <button id='load_comments' className={style.load_comments} onClick={() => setSlice()}>Cargar mas comentarios 👇</button>
        <div id='live_comments' className={style.live_comments_container}>
          <p>Ups! Son todos hasta el momento 😅</p>
          <Link to={''} className={style.live_comments}>👉 Dejanos tu comentario 👈</Link>
        </div>
      </div>;
}
