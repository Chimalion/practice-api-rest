import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  container: {
    display: 'flex',
  },
  input: { flexGrow: 2 },
}));
interface Props {
  value: string;
  quotePosition: number;
  handleDeleteSentence: () => void;
  handleEditSentence: (e) => void;
}

export const SentenceField: React.FunctionComponent<Props> = ({
  value,
  quotePosition,
  handleDeleteSentence,
  handleEditSentence,
}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<DeleteIcon />}
          onClick={handleDeleteSentence}
        >
          Delete
        </Button>
        <TextField
          className={classes.input}
          id="outlined-basic"
          variant="outlined"
          value={value}
          label={`Sentence number ${quotePosition + 1}`}
          onChange={(e) => handleEditSentence(e)}
        />
      </div>
    </>
  );
};
