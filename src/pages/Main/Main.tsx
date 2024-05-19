import { Link } from 'react-router-dom';

import { Cards } from '@components/cards/Cards';
import { Layout } from '@components/layout/Layout';
import { mockAnime } from '@app/mockData/mockAnime';
import { ReactComponent as BtnArrowIcon } from '@app/icons/btn-arrow.svg';

import style from './main.module.css';

export const Main = () => {
  const lastAnime = Object.values(mockAnime).slice(
    mockAnime.length - 8,
    mockAnime.length
  );

  return (
    <Layout>
      <div className={style.header}>
        <img src='./img/mainBgr.gif' alt='' className={style.img} />
        <div className={style.headerAbout}>
          <h1 className={style.title}>Find your loved one</h1>
          <p className={style.subtitle}>
            Choose an anime or write your favorite character
          </p>
          <span className={style.btn}>
            <a href='/'>find character</a>
          </span>
        </div>
      </div>
      <div className={style.lastAnime}>
        <h2 className={style.lastAnime__title}>Last Anime</h2>
        <div className={style.lastAnime__cards}>
          {lastAnime.map((props) => {
            return <Cards id={props.id} img={props.img} title={props.title} />;
          })}
        </div>
        <Link to='/'>
          <div className={style.lastanime__btn}>
            <p className={style.lastanime__btnTitle}>See more</p>
            <BtnArrowIcon />
          </div>
        </Link>
      </div>
    </Layout>
  );
};
