import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';

interface InforListComponentProps {
    itemName: string;
}

const InforListComponent: React.FC<InforListComponentProps> = ({ itemName }) => {
  const rows = [
    { data: 'row 1' },
    { data: 'row 2' },
    { data: 'row 3' },
    { data: 'row 4' },
    { data: 'row 5' },
    { data: 'row 6' },
  ];

  return (
    <Box sx={{ width: '100%', padding: 0, backgroundColor: 'white' }}>
      <Typography gutterBottom sx={{ marginBottom: 0, fontSize: '14px' }} >
        {itemName}
      </Typography>
      <TableContainer>
        <Table sx={{ border: '1px solid black' }}>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ border: '1px solid black', padding: '0px 0 0px 5px', fontSize: '14px' }}>{row.data}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InforListComponent;