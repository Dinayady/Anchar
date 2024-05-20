import { Link } from 'react-router-dom';

import { Paths } from '@app/paths';

import { ReactComponent as TelegramIcon } from '@app/icons/tel.svg';
import { ReactComponent as TwiIcon } from '@app/icons/twi.svg';

import style from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Link to={Paths.main}>Anchar</Link>
      <ul className={style.links}>
        <li>
          <Link to={Paths.main}>menu</Link>
        </li>
        <li>
          <Link to={Paths.catalog}>anime</Link>
        </li>
        <li>
          <Link to={Paths.main}>about us</Link>
        </li>
        <li>
          <Link to={Paths.main}>terms & privacy</Link>
        </li>
      </ul>
      <div>
        <Link to={Paths.tgLink}>
          <TelegramIcon />
        </Link>
        <Link to={Paths.twiLink}>
          <TwiIcon />
        </Link>
      </div>
    </footer>
  );
};
