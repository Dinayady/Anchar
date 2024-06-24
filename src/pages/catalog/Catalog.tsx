import { Layout } from '@app/components/layout/Layout';

import { FilterPanel } from '@app/components/filterPanel/FilterPanel';
import { mockAnime } from '@app/mockData/mockAnime';
import { Cards } from '@app/components/cards/Cards';

import style from './catalog.module.css';
import { useState } from 'react';
import { AnimeType } from '@app/mockData/type/typeAnime';

const yearFrom = 1900;
const yearTo = 2024;

export const Catalog = () => {
  const [dataMin, setDataMin] = useState(yearFrom);
  const [dataMax, setDataMax] = useState(yearTo);
  const [genres, setGenres] = useState<string[]>([]);
  const [studio, setStudio] = useState<string[]>([]);

  const filterByData = () => {
    const filteredAnime = mockAnime.reduce((acc, item) => {
      const isData = item.year >= dataMin && item.year <= dataMax;
      const isGenres =
        genres.length === 0 ||
        genres.some((elem) => item.genres.includes(elem));
      const isStudio =
        studio.length === 0 ||
        studio.some((elem) => item.studio.includes(elem));

      if (isData && isGenres && isStudio) {
        acc.push(item);
      }

      return acc;
    }, [] as AnimeType[]);

    return filteredAnime;
  };

  // filterByData();

  return (
    <Layout>
      <div className={style.animeWrapper}>
        <div className={style.filterPanel}>
          <FilterPanel
            yearFrom={yearFrom}
            yearTo={yearTo}
            animeFilter={({ dataMin, dataMax, genres, studio }) => {
              setDataMax(dataMax);
              setDataMin(dataMin);
              setGenres(genres);
              setStudio(studio);
            }}
          />
        </div>
        <div className={style.animeList}>
          {filterByData().map((props) => (
            <Cards id={props.id} img={props.img} title={props.title} />
          ))}
        </div>
        <div></div>
      </div>
    </Layout>
  );
};
