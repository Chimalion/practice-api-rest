import React from 'react';
import { CharacterEntity } from './character.vm';
import { SentenceField } from './text-field.component';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { patchBestSentencesCharacter } from './api/character.api';

export const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '30px',
  },
}));

interface Props {
  character: CharacterEntity;
}

export const CharacterComponent: React.FunctionComponent<Props> = ({
  character,
}) => {
  const classes = useStyles();
  const [dirtyCharacter, setDirtyCharacter] =
    React.useState<CharacterEntity>(character);

  const handleEditSentence = (id: string) => (e) => {
    const { value } = e.target;
    setDirtyCharacter((c) => ({
      ...c,
      bestSentences: c.bestSentences.map((sentence) =>
        sentence.id === id ? { id: sentence.id, sentence: value } : sentence
      ),
    }));
  };

  const handleAddSentence = () => {
    setDirtyCharacter((c) => ({
      ...c,
      bestSentences: [
        ...c.bestSentences,
        { id: (c.bestSentences.length + 1).toString(), sentence: '' },
      ],
    }));
  };

  const handleDeleteSentence = (id: string) => () => {
    setDirtyCharacter((c) => ({
      ...c,
      bestSentences: c.bestSentences.filter((sentence) => sentence.id !== id),
    }));
  };

  return (
    <>
      <h2>{dirtyCharacter.name}</h2>
      <div className={classes.container}>
        {dirtyCharacter.bestSentences && dirtyCharacter.bestSentences.length > 0
          ? dirtyCharacter.bestSentences.map((sentence, key) => {
              return (
                <SentenceField
                  key={key}
                  value={sentence?.sentence}
                  quotePosition={key}
                  handleDeleteSentence={handleDeleteSentence(sentence.id)}
                  handleEditSentence={handleEditSentence(sentence.id)}
                />
              );
            })
          : null}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button
            style={{ flexGrow: 1 }}
            variant="contained"
            onClick={handleAddSentence}
          >
            Add sentence
          </Button>
          <Button
            style={{ flexGrow: 1 }}
            variant="contained"
            color="primary"
            onClick={() =>
              patchBestSentencesCharacter(
                character.id.toString(),
                dirtyCharacter.bestSentences
              )
            }
          >
            ¡Submit!
          </Button>
        </div>
      </div>
    </>
  );
};
