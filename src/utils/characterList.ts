import { mockNaruto } from '@app/mockData/mockCharacter/mockNaruto';
import { mockNorogami } from '@app/mockData/mockCharacter/mockNorogami';
import { mockTokyoghoul } from '@app/mockData/mockCharacter/mockTokyoghoul';

const combineArrays = <T>(...arrays: T[][]): T[] => {
  const combinedArray: T[] = [];

  arrays.forEach((array) => {
    const id = Math.random() * 1000;

    array.forEach((item) => {
      const newItem = {
        ...item,
        id,
      };
      combinedArray.push(newItem);
    });
  });
  return combinedArray;
};

export const characterList = combineArrays(
  mockNaruto,
  mockNorogami,
  mockTokyoghoul
);
