import { NavLink } from 'react-router-dom';

import { Paths } from '@app/paths';

import style from './cards.module.css';

type Props = {
  id: number;
  img: string;
  title: string;
};

export const Cards = ({ id, img, title }: Props) => {
  return (
    <NavLink to={Paths.anime + '/' + id}>
      <div className={style.card}>
        <img src={img} alt={title} className={style.cardImg} />
        <p className={style.cardTitle}>{title}</p>
      </div>
    </NavLink>
  );
};
