import { NavLink } from 'react-router-dom';

import style from './cardMin.module.css';

type Props = {
  id: number;
  img: string;
  title: string;
};

export const CardMin = ({ id, img, title }: Props) => {
  return (
    <NavLink to={`/${id}`}>
      <div className={style.card}>
        <img src={img} alt='' className={style.cardImg} />
        <p className={style.cardTitle}>{title}</p>
      </div>
    </NavLink>
  );
};
