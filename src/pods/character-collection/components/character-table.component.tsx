import * as React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { CharacterEntity } from '../character-collection.vm';
import { makeStyles } from '@material-ui/core/styles';
import { CharacterTableRow } from './character-table-row.component';
import { TableCellCharacter } from './table-cell.component';

export const useStyles = makeStyles((theme) => ({
  table: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cell: {
    borderBottom: 'none',
  },
}));

interface Props {
  collection: CharacterEntity[];
}

export const CharacterTable: React.FunctionComponent<Props> = ({
  collection,
}) => {
  const classes = useStyles();
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow className={classes.row}>
              <TableCellCharacter textField="Picture" />
              <TableCellCharacter textField="Name" />
              <TableCellCharacter textField="Status" />
            </TableRow>
          </TableHead>
          <TableBody className={classes.table}>
            {collection.map((character) => (
              <CharacterTableRow character={character} key={character.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
