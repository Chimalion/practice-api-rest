import * as React from 'react';
import { CharacterEntityVm } from './hotel-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './hotel-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setcharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) => {
      console.log(result);
    });
  };

  return { characterCollection, loadCharacterCollection };
};
