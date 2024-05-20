import { Link } from 'react-router-dom';

import { Paths } from '@app/paths';
import { mockAnime } from '@app/mockData/mockAnime';
import { getArrayFromTo } from '@app/utils/getArrayFromTo';
import { Cards } from '@components/cards/Cards';
import { Layout } from '@components/layout/Layout';
import { ReactComponent as BtnArrowIcon } from '@app/icons/btn-arrow.svg';

import style from './main.module.css';

export const Main = () => {
  const SHIFT_TO_END = 8;
  const START_ANIME_FROM = mockAnime.length - SHIFT_TO_END;
  const END_ANIME_TO = mockAnime.length;

  const lastAnime = getArrayFromTo(mockAnime, START_ANIME_FROM, END_ANIME_TO);

  return (
    <Layout>
      <div className={style.header}>
        <img src='./img/mainBgr.gif' alt='mainBgr' className={style.img} />
        <div className={style.headerAbout}>
          <h1 className={style.title}>Find your loved one</h1>
          <p className={style.subtitle}>
            Choose an anime or write your favorite character
          </p>
          <span className={style.btn}>
            <Link to={Paths.search}>find character</Link>
          </span>
        </div>
      </div>
      <div className={style.lastAnime}>
        <h2 className={style.lastAnimeTitle}>Last Anime</h2>
        <div className={style.lastAnimeCards}>
          {lastAnime.map((props) => {
            return <Cards id={props.id} img={props.img} title={props.title} />;
          })}
        </div>
        <Link to={Paths.catalog}>
          <div className={style.lastAnimeBtn}>
            <p className={style.lastAnimeBtnTitle}>See more</p>
            <BtnArrowIcon />
          </div>
        </Link>
      </div>
    </Layout>
  );
};
