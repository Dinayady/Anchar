import { CardMin } from '../../components/cardMin/CardMin';
import { Layout } from '../../components/layout/Layout';
import { animeTitle } from '../../helper/animeTitle';

import style from './main.module.css';

const animeFirstNine = Object.values(animeTitle).slice(0, 9);
animeFirstNine.map((props) => console.log(props));

export const Main = () => {
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
        {animeFirstNine.map((props) => {
          return <CardMin id={props.id} img={props.img} title={props.title} />;
        })}
      </div>
    </Layout>
  );
};
