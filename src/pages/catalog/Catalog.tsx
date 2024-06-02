import { Layout } from '@app/components/layout/Layout';

import style from './catalog.module.css';
import { FilterPanel } from '@app/components/filterPanel/FilterPanel';
import { mockAnime } from '@app/mockData/mockAnime';
import { Cards } from '@app/components/cards/Cards';

export const Catalog = () => {
  return (
    <Layout>
      <div className={style.animeWrapper}>
        <div className={style.filterPanel}>
          <FilterPanel />
        </div>
        <div className={style.animeList}>
          {mockAnime.map((props) => (
            <Cards id={props.id} img={props.img} title={props.title} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
