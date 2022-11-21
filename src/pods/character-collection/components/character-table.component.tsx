import * as React from 'react';
import { generatePath, Link, useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar/Avatar';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import * as classes from './character-table-row.component';
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
  rowLink: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
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
              <TableCell className={classes.cell} align="right">
                Picture
              </TableCell>
              <TableCell className={classes.cell} align="right">
                Name
              </TableCell>
              <TableCell className={classes.cell} align="right">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.table}>
            {collection.map((character) => (
              <>
                <Link
                  className={classes.rowLink}
                  to={generatePath('/character/:id', { id: character.id })}
                >
                  <CharacterTableRow character={character} key={character.id} />
                </Link>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
