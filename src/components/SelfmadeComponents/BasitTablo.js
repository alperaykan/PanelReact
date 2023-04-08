import React from 'react'
import { withStyles } from '@material-ui/styles';
import {Button , Table} from '@material-ui/core'

import { TableBody, TableCell, TableContainer, TableHead, TableRow, Box } from '@material-ui/core';

export default function BasitTablo({
    divStyle,
    show,
    columns,
    data
}) {
  return (
    <div style={divStyle}>
      {show ? (
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              {columns.map((column) => (
                <TableRow>
                  <TableCell>{column}</TableCell>
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {data === []
                ? data.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell scope="row">{row.children}</TableCell>
                    </TableRow>
                  ))
                : null}
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </div>
  );
}

