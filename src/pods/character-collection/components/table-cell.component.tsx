import * as React from 'react';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  cell: {
    borderBottom: 'none',
  },
}));

interface Props {
  textField?: string;
}

export const TableCellCharacter: React.FunctionComponent<Props> = ({
  textField,
  children,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <TableCell className={classes.cell} align="right" {...rest}>
      {textField ?? null}
      {children ?? null}
    </TableCell>
  );
};
