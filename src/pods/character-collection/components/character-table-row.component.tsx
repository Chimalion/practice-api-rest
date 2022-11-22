import * as React from 'react';
import { CharacterEntity } from '../character-collection.vm';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { generatePath, useHistory } from 'react-router-dom';
import { TableCellCharacter } from './table-cell.component';

export const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between' /*
    borderTop: 'black 1px solid', */,
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  cell: {
    borderBottom: 'none',
  },
  rowLink: {},
}));

interface Props {
  character: CharacterEntity;
}

export const CharacterTableRow: React.FunctionComponent<Props> = ({
  character,
}) => {
  const history = useHistory();
  const { image, name, status, id } = character;
  const classes = useStyles();

  const handleNavigate = (id: string) => {
    history.push(generatePath('/character/:id', { id }));
  };

  return (
    <>
      <TableRow
        className={classes.row}
        onClick={() => handleNavigate(id.toString())}
      >
        <TableCellCharacter>
          <img src={image} alt="" style={{ width: '7rem' }} />
        </TableCellCharacter>
        <TableCellCharacter textField={name} />
        <TableCellCharacter textField={status} />
      </TableRow>
    </>
  );
};
