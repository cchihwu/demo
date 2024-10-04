import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const PrePurchaseInfo: React.FC = () => {
  const columnNames = ['選択', '商品', '商品名', '前回受注日', 'ケース', 'バラ', '順序'];

  const rows = Array.from({ length: 5 }, (_, rowIndex) => (
    Array.from({ length: columnNames.length }, (_, colIndex) => `date${rowIndex + 1}-${colIndex + 1}`)
  ));

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      height: '100%',
    }}>
      <Typography variant="h6" sx={{ marginBottom: '0px', flexShrink: 0 }}>
        前買情報
      </Typography>
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'row',
          gap: '100px',
          flexGrow: 1,
          paddingLeft: '50px',
          paddingRight: '50px',
        }}
      >
        <TableContainer sx={{ maxHeight: '100%' }}>
          <Table sx={{ border: '1px solid black' }}>
            <TableHead>
              <TableRow>
                {columnNames.map((columnName, index) => (
                  <TableCell 
                    key={index} 
                    sx={{ 
                      border: '1px solid black', 
                      fontSize: '14px', 
                      padding: 0, 
                      textAlign: 'center'
                    }}
                  >
                    {columnName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, rowIndex) => (
                <TableRow key={rowIndex}>
                  {row.map((data, colIndex) => (
                    <TableCell key={colIndex} sx={{ border: '1px solid black', padding: '0.5px 0 0.5px 5px', fontSize: '14px' }}>
                      {data}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default PrePurchaseInfo;