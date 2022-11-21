import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterTable } from './components/hotel-card.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } =
    useCharacterCollection();

  const history = useHistory();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);
  console.log(characterCollection);
  /*


  const handleEdit = (id: string) => {
    history.push(linkRoutes.editHotel(id));
  };

   */

  return <CharacterTable collection={characterCollection} />;
};
