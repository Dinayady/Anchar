import { ChangeEvent, useState } from 'react';

import { characterList } from '@utils/characterList';
import { Layout } from '@app/components/layout/Layout';
import { Cards } from '@app/components/cards/Cards';

import style from './search.module.css';

export const Search = () => {
  const [data, setData] = useState(characterList);
  const [character, setCharacter] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCharacter(event.target.value);
    filterCharacter(event);
  };

  const filterCharacter = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.trim();
    if (!inputValue) {
      setData(characterList);
    } else {
      const filteredCharacters = characterList.filter((item) => {
        return item.character.toLowerCase().includes(inputValue.toLowerCase());
      });
      setData(filteredCharacters);
    }
  };

  return (
    <Layout>
      <div className={style.search}>
        <h2 className={style.searchTitle}>Search anime character</h2>
        <form className={style.searchForm}>
          <input
            type='text'
            name='text'
            className={style.searchInput}
            placeholder='search...'
            value={character}
            onChange={(e) => handleChange(e)}
          />
        </form>
        {data.length === 0 && (
          <div className={style.notFound}>
            <h1>Not found :(</h1>
            <img src='./img/sad-chibi.png' alt='chibi' />
          </div>
        )}
        <div className={style.searchCards}>
          {data.map((props) => {
            return (
              <Cards id={props.id} img={props.img} title={props.character} />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
