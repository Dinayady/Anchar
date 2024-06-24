import { CharacterType } from './typeCharacter';

export type AnimeType = {
  id: number;
  title: string;
  studio: string;
  year: number;
  genres: string[];
  img: string;
  posterImg?: string;
  characters?: CharacterType[];
};
