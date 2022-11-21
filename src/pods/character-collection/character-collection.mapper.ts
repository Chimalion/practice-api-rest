import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapCharacterCollectionApiToVm = (
  characterCollection: apiModel.CharacterEntity[]
): viewModel.CharacterEntity[] => characterCollection.map(mapCharacter);

const mapCharacter = (
  character: apiModel.CharacterEntity
): viewModel.CharacterEntity => ({
  id: character.id,
  name: character.name,
  status: character.status,
  type: character.type,
  gender: character.gender,
  origin: character.origin,
  image: character.image,
  bestSentences: character.bestSentences,
});
