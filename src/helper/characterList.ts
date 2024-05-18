import { narutoCharacter } from './animeСharacter/narutoCharacter';
import { norogamiCharacter } from './animeСharacter/norogamiCharacter';
import { tokyoghoulCharacter } from './animeСharacter/tokyoghoulCharacter';

let combineArrays = <T>(...arrays: T[][]): T[] => {
  let combinedArray: T[] = [];
  let idCounter = 0;
  arrays.forEach((array) => {
    array.forEach((item) => {
      const newItem = {
        ...item,
        id: idCounter++,
      };
      combinedArray.push(newItem);
    });
  });
  return combinedArray;
};

export const characterlist = combineArrays(
  narutoCharacter,
  norogamiCharacter,
  tokyoghoulCharacter
);
