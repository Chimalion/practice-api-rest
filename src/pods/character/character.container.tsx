import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { Lookup } from 'common/models';
import { useCharacter } from './character.hook';
import { CharacterComponent } from './character.component';
export interface DetailPageParams {
  id: string;
}
export const CharacterContainer: React.FunctionComponent = () => {
  const { character, loadCharacter } = useCharacter();
  const { id } = useParams<DetailPageParams>();

  React.useEffect(() => loadCharacter(id), [id]);

  return <>{character ? <CharacterComponent character={character} /> : null}</>;
};
