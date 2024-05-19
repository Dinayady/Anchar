import { Link } from 'react-router-dom';

import { ReactComponent as SearchIcon } from '@app/icons/search.svg';
import { ReactComponent as MoonIcon } from '@app/icons/moon.svg';
import { ReactComponent as SunIcon } from '@app/icons/sun.svg';

import style from './navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <a href='/' className={style.logo}>
        Anchar
      </a>
      <div className={style.navigationBtn}>
        <button className={style.switchThemeBtn}>
          <MoonIcon className={style.moonIcon} />
          <SunIcon className={style.sunIcon} />
        </button>
        <Link to='/search' className={style.logoSearch}>
          <SearchIcon />
        </Link>
      </div>
    </nav>
  );
};
