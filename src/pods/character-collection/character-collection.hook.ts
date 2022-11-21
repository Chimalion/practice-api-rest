import * as React from 'react';
import { CharacterEntity } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapCharacterCollectionApiToVm } from './character-collection.mapper';

export const useCharacterCollection = () => {
  const [characterCollection, setcharacterCollection] = React.useState<
    CharacterEntity[]
  >([]);

  const loadCharacterCollection = () => {
    getCharacterCollection().then((characterCollection) => {
      setcharacterCollection(
        mapCharacterCollectionApiToVm(characterCollection)
      );
    });
  };

  return { characterCollection, loadCharacterCollection };
};
