import React, { useState } from 'react';
import { Dialog, DialogContent, Button, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider } from '@mui/material';
import ItemTypography from '../common/ItemTypography';
import SearchItemDropdown from '../common/SearchItemDropdown';
import SearchItemComponent from '../common/SearchItemComponent';

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

const tableHeaders = [
  { label: '', width: '2%' },
  { label: 'コード', width: '10%' },
  { label: '取引先名称', width: '20%' },
  { label: '実績部署', width: '10%' },
  { label: '住所', width: '20%' },
  { label: '電話番号', width: '10%' }
];

const SearchDialog: React.FC<SearchDialogProps> = ({ open, onClose }) => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const totalRows = 13;
  const emptyRows = totalRows - filteredData.length;
  const displayData = [...filteredData, ...Array.from({ length: emptyRows }).map(() => ({ code: '', name: '', department: '', address: '', phone: '' }))];

  const fetchData = async () => {
    try {
      const response = await fetch('/kennsaku/torihikisakiName.json');
      const result = await response.json();
      setFilteredData(result.data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleSearch = (value: string) => {
    fetchData();
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth={true}
      PaperProps={{
        style: {
          border: 'none',
          boxShadow: 'none',
          backgroundColor: '#b4b4b4',
        },
      }}
    >
      <DialogContent>
        <Box mb={2} textAlign="center" sx={{ marginBottom: '5px' }}>
          <Typography variant="h5" component="h2">
            売上先一覧
          </Typography>
        </Box>

        <Divider sx={{ borderColor: '#fff', marginBottom: 2 }} />

        <Box mb={2}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '50px', marginBottom: '5px' }}>
            <SearchItemComponent itemName="取引先名称" itemValue="　" nameFlex={2} valueFlex={1} onEnter={handleSearch} />
            <SearchItemComponent itemName="取引先名称カナ検索" itemValue="　" nameFlex={2} valueFlex={1} onEnter={handleSearch} />
            <SearchItemComponent itemName="住所検索" itemValue="　" nameFlex={1} valueFlex={1} onEnter={handleSearch} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '50px', marginBottom: '5px' }}>
            <SearchItemDropdown itemName="支店検索" itemValue="　" />
            <ItemTypography itemName="TEL検索" itemValue="　" nameFlex={1} valueFlex={1} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '50px', marginBottom: '5px' }}>
            <SearchItemDropdown itemName="実績管轄部署コード" itemValue="　" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '50px', marginBottom: '5px' }}>
            <SearchItemDropdown itemName="担当者コード" itemValue="　" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '50px', marginBottom: '5px' }}>
            <SearchItemDropdown itemName="基準ポコード" itemValue="　" />
          </Box>
        </Box>

        <Divider sx={{ borderColor: '#fff', marginBottom: 2 }} />

        <Box>
          <TableContainer component={Paper}>
            <Table style={{ border: '2px solid black' }}>
              <TableHead>
                <TableRow>
                  {tableHeaders.map((header, index) => (
                    <TableCell
                      key={index}
                      style={{
                        border: '1px solid black',
                        padding: '0px',
                        width: header.width,
                        backgroundColor: '#d3d3d3',
                      }}
                    >
                      {header.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {displayData.map((row, rowIndex) => (
                  <TableRow
                    key={rowIndex}
                    onMouseEnter={() => setHoveredRow(rowIndex)}
                    onMouseLeave={() => setHoveredRow(null)}
                    onClick={() => setSelectedRow(rowIndex)}
                    style={{
                      backgroundColor:
                        selectedRow === rowIndex
                          ? '#87CEEB'
                          : hoveredRow === rowIndex
                          ? '#f0f0f0'
                          : 'transparent',
                    }}
                  >
                    <TableCell
                      align="right"
                      style={{ border: '1px solid black', padding: '0px', backgroundColor: '#d3d3d3' }}
                    >
                      {rowIndex + 1}
                    </TableCell>

                    <TableCell style={{ border: '1px solid black', padding: '0.5px 0 0.5px 5px' }}>
                      {row.code}
                    </TableCell>
                    <TableCell style={{ border: '1px solid black', padding: '0.5px 0 0.5px 5px' }}>
                      {row.name}
                    </TableCell>
                    <TableCell style={{ border: '1px solid black', padding: '0.5px 0 0.5px 5px' }}>
                      {row.department}
                    </TableCell>
                    <TableCell style={{ border: '1px solid black', padding: '0.5px 0 0.5px 5px' }}>
                      {row.address}
                    </TableCell>
                    <TableCell style={{ border: '1px solid black', padding: '0.5px 0 0.5px 5px' }}>
                      {row.phone}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box
          mt={1}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <Button variant="contained" onClick={onClose} disabled={selectedRow === null}>
            確認
          </Button>
          <Button variant="contained" onClick={onClose}>
            閉じる
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;