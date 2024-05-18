import { ReactComponent as TelegramIcon } from '../../icons/tel.svg';
import { ReactComponent as TwiIcon } from '../../icons/twi.svg';

import style from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <a href='/'>Anchar</a>
      <ul className={style.links}>
        <li>
          <a href=''>menu</a>
        </li>
        <li>
          <a href=''>anime</a>
        </li>
        <li>
          <a href=''>about us</a>
        </li>
        <li>
          <a href=''>terms & privacy</a>
        </li>
      </ul>
      <div>
        <a href='https://t.me/n_hates_you'>
          <TelegramIcon />
        </a>
        <a href='https://twitter.com/home?lang=ru'>
          <TwiIcon />
        </a>
      </div>
    </footer>
  );
};
