import Axios from 'axios';
import { BestSentences, CharacterEntity } from './character.api-model';

export const getCharacterFromApi = async (
  id: string
): Promise<CharacterEntity> => {
  const { data } = await Axios.get(`api/characters//${id}`);
  return data;
};

export const patchBestSentencesCharacter = async (
  id: string,
  data: BestSentences[]
) => {
  await Axios.patch(`http://localhost:3000/characters/${id}`, {
    bestSentences: data,
  });
};
