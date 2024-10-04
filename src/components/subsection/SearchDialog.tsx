import React from 'react';
import { Dialog, DialogContent, Button, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider } from '@mui/material';
import ItemTypography from '../common/ItemTypography';
import SearchItemDropdown from '../common/SearchItemDropdown';

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
  return (
    <Dialog
        open={open}
        onClose={onClose}
        maxWidth="lg"
        fullWidth={true}
        PaperProps={{
            style: {
            // height: '80vh',
            border: 'none',
            boxShadow: 'none',
            backgroundColor: '#b4b4b4'
            }
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
                <ItemTypography itemName="取引先名称" itemValue="　" nameFlex={2} valueFlex={1} />
                <ItemTypography itemName="取引先名称カナ検索" itemValue="　" nameFlex={2} valueFlex={1} />
                <ItemTypography itemName="住所検索" itemValue="　" nameFlex={1} valueFlex={1} />
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
            <Table
              style={{ border: '2px solid black'}}
              >
              <TableHead>
                <TableRow>
                  {tableHeaders.map((header, index) => (
                    <TableCell
                      key={index}
                      style={{ border: '1px solid black', padding: '0px', width: header.width, backgroundColor: '#d3d3d3' }}
                    >
                      {header.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Array.from({ length: 13 }).map((_, rowIndex) => (
                    <TableRow key={rowIndex}>
                      <TableCell
                        align="right"
                        style={{ border: '1px solid black', padding: '0px', backgroundColor: '#d3d3d3' }}
                      >
                        {rowIndex + 1}
                      </TableCell>

                      {Array.from({ length: 5 }).map((_, colIndex) => (
                        <TableCell
                          key={colIndex}
                          style={{ border: '1px solid black', padding: '0.5px 0 0.5px 5px' }}
                        >
                          col {rowIndex + 1}, row {colIndex + 2}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        <Box mt={1} textAlign="right" >
          <Button variant="contained" onClick={onClose}>閉じる</Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;