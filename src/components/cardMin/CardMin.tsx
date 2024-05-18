import { NavLink } from 'react-router-dom';

type Props = {
  id: number;
  img: String;
  title: String;
};

export const CardMin = ({ id, img, title }: Props) => {
  return (
    <NavLink to='/'>
      <div>
        CardMin
        <p>{id}</p>
        <img src={img} alt='' />
        <p>{title}</p>
      </div>
    </NavLink>
  );
};
