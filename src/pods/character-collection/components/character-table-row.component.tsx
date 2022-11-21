import * as React from 'react';
import { CharacterEntity } from '../character-collection.vm';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    justifyContent: 'space-between' /*
    borderTop: 'black 1px solid', */,
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  cell: {
    borderBottom: 'none',
  },
}));

interface Props {
  character: CharacterEntity;
}

export const CharacterTableRow: React.FunctionComponent<Props> = ({
  character,
}) => {
  const { image, name, status } = character;
  const classes = useStyles();
  return (
    <>
      <TableRow className={classes.row}>
        <TableCell className={classes.cell} align="right">
          <img src={image} alt="" style={{ width: '7rem' }} />
        </TableCell>
        <TableCell className={classes.cell} align="right">
          {name}
        </TableCell>
        <TableCell className={classes.cell} align="right">
          {status}
        </TableCell>
      </TableRow>
    </>
  );
};
