import { useState } from 'react';
import { useSelectItem } from '@app/hooks/useSelectItem';

import { RangeYear } from '../rangeYear/RangeYear';
import { CheckboxField } from '../CheckboxField/CheckboxField';
import { mockGenres } from '@app/mockData/mockFilter/mockGenres';
import { mockStudio } from '@app/mockData/mockFilter/mockStudio';

import style from './filterPanel.module.css';

type Props = {
  yearFrom: number;
  yearTo: number;
  animeFilter: (data: {
    dataMin: number;
    dataMax: number;
    genres: string[];
    studio: string[];
  }) => void;
};

export const FilterPanel = ({ yearFrom, yearTo, animeFilter }: Props) => {
  let [hide, useHide] = useState(false);

  const [dataMin, setDataMin] = useState(yearFrom);
  const [dataMax, setDataMax] = useState(yearTo);
  const [genres, filterGenres] = useSelectItem();
  const [studio, filterStudio] = useSelectItem();
  animeFilter({ dataMax, dataMin, genres, studio });

  const expandList = (id: string, id2: string) => {
    const element = document.getElementById(id);
    const elementBtn = document.getElementById(id2);
    hide = hide ? false : true;
    if (element && elementBtn) {
      if (hide) {
        element.style.display = 'block';
        elementBtn.style.transform = 'rotate(270deg)';
      } else {
        element.style.display = 'none';
        elementBtn.style.transform = 'rotate(90deg)';
      }
    }
  };

  return (
    <div className={style.cat}>
      <h2>Catalog</h2>
      <div className={style.list}>
        <div className={style.listTitle}>
          <p className={style.title}>year</p>
          <button
            className={style.button}
            id='catalog-year__btn'
            onClick={() => expandList('catalog-year', 'catalog-year__btn')}
          ></button>
        </div>
        <div id='catalog-year' className={style.filterList}>
          <RangeYear
            min={yearFrom}
            max={yearTo}
            onDataChange={({ dataMin, dataMax }) => {
              setDataMin(dataMin);
              setDataMax(dataMax);
            }}
          />
        </div>
      </div>

      <div className={style.list}>
        <div className={style.listTitle}>
          <p className={style.title}>genres</p>
          <button
            className={style.button}
            id='catalog-genres__btn'
            onClick={() => expandList('catalog-genres', 'catalog-genres__btn')}
          ></button>
        </div>
        <ul id='catalog-genres' className={style.filterList}>
          <button className={style.clear}>clear</button>
          {mockGenres.map((props) => (
            <li className={style.listSection}>
              <CheckboxField title={props.genres} filtered={filterGenres} />
            </li>
          ))}
        </ul>
      </div>

      <div className={style.list}>
        <div className={style.listTitle}>
          <p className={style.title}>studio</p>
          <button
            className={style.button}
            id='catalog-studio__btn'
            onClick={() => expandList('catalog-studio', 'catalog-studio__btn')}
          ></button>
        </div>
        <ul id='catalog-studio' className={style.filterList}>
          <button className={style.clear}>clear</button>
          {mockStudio.map((props) => (
            <li className={style.listSection}>
              <CheckboxField title={props.studio} filtered={filterStudio} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
