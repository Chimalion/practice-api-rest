import * as React from 'react';
import { CharacterEntity } from './character.vm';
import { getCharacterFromApi } from './api';
import { mapCharacterFromApiToVm } from './character.mapper';

export const useCharacter = () => {
  const [character, setCharacter] = React.useState<CharacterEntity>();

  const loadCharacter = (id: string) => {
    getCharacterFromApi(id).then((characterCollection) => {
      setCharacter(mapCharacterFromApiToVm(characterCollection));
    });
  };

  return { character, loadCharacter };
};
