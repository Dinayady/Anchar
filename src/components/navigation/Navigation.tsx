import { ReactComponent as SearchIcon } from '../../icons/search.svg';
import { ReactComponent as MoonIcon } from '../../icons/moon.svg';
import { ReactComponent as SunIcon } from '../../icons/sun.svg';

import style from './navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={style.navigation}>
      <a href='/' className={style.logo}>
        Anchar
      </a>
      <div style={{ display: 'flex', gap: '20px' }}>
        <button>
          <MoonIcon />
        </button>
        <a href='/' className={style.logoSearch}>
          {/* <input type='text' /> */}
          <SearchIcon />
        </a>
      </div>
    </nav>
  );
};
