import React, { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper, Checkbox
} from '@mui/material';

const MyTable = () => {
  // Update items to contain 28 items
  const items = [
    'item 01', 'item 02', 'item 03', 'item 04', 'item 05',
    'item 06', 'item 07', 'item 08', 'item 09', 'item 10',
    'item 11', 'item 12', 'item 13', 'item 14', 'item 15',
    'item 16', 'item 17', 'item 18', 'item 19', 'item 20',
    'item 21', 'item 22', 'item 23', 'item 24', 'item 25',
    'item 26', 'item 27', 'item 28'
  ];
  
  const initialRows = items.map((item, rowIndex) => {
    return Array.from({ length: 10 }, (_, colIndex) => {
      return colIndex === 0
        ? item
        : colIndex === 1
        ? Math.floor(Math.random() * 100)
        : `Cell ${rowIndex + 1}-${colIndex + 1}`;
    });
  });

  const [rows, setRows] = useState(initialRows);
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<number>(1);
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10); // Adjust as needed
  const [checked, setChecked] = useState<boolean[]>(Array(rows.length).fill(false)); // State for individual checkboxes
  const [selectAll, setSelectAll] = useState<boolean>(false); // State for select all checkbox

  useEffect(() => {
    handleSort(0);
  }, []);

  const handleSort = (columnIndex: number) => {
    const isAsc = order === 'asc';
    const sortedRows = [...rows].sort((a, b) => {
      if (columnIndex === 0) {
        return isAsc
          ? String(a[0]).localeCompare(String(b[0]))
          : String(b[0]).localeCompare(String(a[0]));
      } else if (columnIndex === 1) {
        const valA = Number(a[1]);
        const valB = Number(b[1]);
        return isAsc ? valA - valB : valB - valA;
      }
      return 0;
    });
    setRows(sortedRows);
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(columnIndex);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const totalPages = Math.ceil(rows.length / rowsPerPage);

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        onClick={() => setPage(index)}
        style={{
          margin: '0 5px',
          padding: '5px 10px',
          background: page === index ? '#007bff' : '#f0f0f0',
          color: page === index ? '#fff' : '#000',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {index + 1}
      </button>
    ));
  };

  const handleCheckboxChange = (index: number) => {
    const updatedChecked = [...checked];
    updatedChecked[index] = !updatedChecked[index];
    setChecked(updatedChecked);

    // Check if all checkboxes are checked
    const allChecked = updatedChecked.every(Boolean);
    setSelectAll(allChecked);
  };

  const handleSelectAllChange = () => {
    const newChecked = checked.map(() => !selectAll);
    setChecked(newChecked);
    setSelectAll(!selectAll);
  };

  return (
    <Paper
      sx={{
        width: '100%',
        height: '100%',
        padding: 0,
        backgroundColor: 'transparent',
      }}
    >
      <TableContainer>
        <Table sx={{ border: '1px solid black', borderCollapse: 'collapse', padding: '0.5px 0 0.5px 5px', backgroundColor: 'transparent' }}>
          <TableHead>
            <TableRow>
              <TableCell rowSpan={2} sx={{ border: '1px solid black', textAlign: 'center', cursor: 'pointer', fontSize: '14px', padding: '0.5px 0 0.5px 5px' }} onClick={() => handleSort(0)}>
                Column 1 {orderBy === 0 ? (order === 'asc' ? '↑' : '↓') : ''}
              </TableCell>
              <TableCell rowSpan={2} sx={{ border: '1px solid black', cursor: 'pointer', textAlign: 'center', fontSize: '14px', padding: '0.5px 0 0.5px 5px' }} onClick={() => handleSort(1)}>
                Column 2 {orderBy === 1 ? (order === 'asc' ? '↑' : '↓') : ''}
              </TableCell>
              <TableCell rowSpan={2} sx={{ border: '1px solid black', textAlign: 'center', fontSize: '14px', padding: '0.5px 0 0.5px 5px' }}>Column 3</TableCell>
              <TableCell rowSpan={2} sx={{ border: '1px solid black', textAlign: 'center', fontSize: '14px', padding: '0.5px 0 0.5px 5px' }}>Column 4</TableCell>
              <TableCell rowSpan={2} sx={{ border: '1px solid black', textAlign: 'center', fontSize: '14px', padding: '0.5px 0 0.5px 5px' }}>Column 5</TableCell>
              <TableCell colSpan={2} align="center" sx={{ border: '1px solid black', textAlign: 'center', fontSize: '14px', padding: '0.5px 0 0.5px 5px' }}>
                Column 6 + 7
              </TableCell>
              <TableCell rowSpan={2} sx={{ border: '1px solid black', textAlign: 'center', fontSize: '14px', padding: '0.5px 0 0.5px 5px' }}>Column 8</TableCell>
              <TableCell rowSpan={2} sx={{ border: '1px solid black', textAlign: 'center', fontSize: '14px', padding: '0.5px 0 0.5px 5px' }}>Column 9</TableCell>
              <TableCell rowSpan={2} sx={{ border: '1px solid black', textAlign: 'center', fontSize: '14px', padding: '0.5px 0 0.5px 5px' }}>Column 10</TableCell>
              <TableCell rowSpan={2} sx={{ border: '1px solid black', textAlign: 'center', fontSize: '14px', padding: '0.5px 0 0.5px 5px' }}>
                <Checkbox
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                  inputProps={{ 'aria-label': 'select all' }}
                  sx={{
                    padding: 0,
                    textAlign: 'center',
                    fontSize: '14px',
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ border: '1px solid black', textAlign: 'center', fontSize: '14px', padding: '0.5px 0 0.5px 5px' }}>Column 6</TableCell>
              <TableCell sx={{ border: '1px solid black', textAlign: 'center', fontSize: '14px', padding: '0.5px 0 0.5px 5px' }}>Column 7</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, colIndex) => (
                  colIndex === 8 ? (
                    <TableCell
                      key={colIndex}
                      colSpan={2} // Merge Column 8 and Column 9
                      sx={{
                        border: '1px solid black',
                        padding: 0,
                        textAlign: 'center',
                        fontSize: '14px'
                      }}
                    >
                      {cell}
                    </TableCell>
                  ) : colIndex === 9 ? (
                    <TableCell key={colIndex} sx={{
                      border: '1px solid black',
                      padding: 0,
                      textAlign: 'center',
                      fontSize: '14px'
                    }}>
                      <Checkbox
                        checked={checked[rowIndex]}
                        onChange={() => handleCheckboxChange(rowIndex)}
                        sx={{
                            padding: 0,
                            textAlign: 'center',
                            fontSize: '14px',
                          }}
                      />
                    </TableCell>
                  ) : (
                    <TableCell
                      key={colIndex}
                      sx={{
                        border: '1px solid black',
                        padding: 0,
                        textAlign: 'center',
                        fontSize: '14px'
                      }}
                    >
                      {cell}
                    </TableCell>
                  )
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', backgroundColor: 'transparent' }}>
        <div>
          {`Showing ${page * rowsPerPage + 1}–${Math.min((page + 1) * rowsPerPage, rows.length)} of ${rows.length}`}
        </div>
        <div>
          {renderPageNumbers()}
        </div>
      </div>
    </Paper>
  );
};

export default MyTable;