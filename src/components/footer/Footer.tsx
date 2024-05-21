import { Link } from 'react-router-dom';

import { ReactComponent as TelegramIcon } from '@app/icons/tel.svg';
import { ReactComponent as TwiIcon } from '@app/icons/twi.svg';

import style from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <Link to='/'>Anchar</Link>
      <ul className={style.links}>
        <li>
          <Link to='/'>menu</Link>
        </li>
        <li>
          <Link to='/'>anime</Link>
        </li>
        <li>
          <Link to='/'>about us</Link>
        </li>
        <li>
          <Link to='/'>terms & privacy</Link>
        </li>
      </ul>
      <div>
        <Link to='https://t.me/n_hates_you'>
          <TelegramIcon />
        </Link>
        <Link to='https://twitter.com/home?lang=ru'>
          <TwiIcon />
        </Link>
      </div>
    </footer>
  );
};
