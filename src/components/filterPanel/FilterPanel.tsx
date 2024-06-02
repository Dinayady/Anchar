import { useState } from 'react';

import { RangeYear } from '../rangeYear/RangeYear';
import { LabelCheck } from '../labelCheck/LabelCheck';
import { mockGenres } from '@app/mockData/mockFilter/mockGenres';
import { mockStudio } from '@app/mockData/mockFilter/mockStudio';

import style from './filterPanel.module.css';

const yearFrom = 1900;
const yearTo = 2024;

export const FilterPanel = () => {
  let [hide, useHide] = useState(false);
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

    // if (element) {
    //   element.style.display =
    //     element.style.display === 'none' ? 'block' : 'none';
    // }
    // if (elementBtn) {
    //   elementBtn.style.transform =
    //     element?.style.display === 'none' ? 'rotate(90deg)' : 'rotate(270deg)';
    // }
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
          <RangeYear min={yearFrom} max={yearTo} />
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
          {mockGenres.map((props) => (
            <LabelCheck title={props.genres} />
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
          {mockStudio.map((props) => (
            <LabelCheck title={props.studio} />
          ))}
        </ul>
      </div>
    </div>
  );
};
