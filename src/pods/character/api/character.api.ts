import Axios from 'axios';
import { CharacterEntity } from './character.api-model';

const url = 'api/characters/';

export const getCharacterFromApi = async (
  id: string
): Promise<CharacterEntity> => {
  const { data } = await Axios.get(`${url}/${id}`);
  return data;
};
