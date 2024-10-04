import React from 'react';
import { Dialog, DialogContent, Button, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider, Checkbox } from '@mui/material';
import ItemTypography from '../common/ItemTypography';
import SearchItemDropdown from '../common/SearchItemDropdown';

interface SakigaiDialogProps {
  open: boolean;
  onClose: () => void;
}

const tableHeaders = [
  { label: '選択', width: '3%' },
  { label: '商品CD', width: '10%' },
  { label: '商品名', width: '20%' },
  { label: '規格', width: '5%' },
  { label: '人数', width: '5%' },
  { label: '前回受注日', width: '8%' },
  { label: '前回受注（ケース）', width: '10%' },
  { label: '発売日', width: '8%' },
  { label: '終売日', width: '8%' },
  { label: '備考', width: '10%' },
];

const SakigaiDialog: React.FC<SakigaiDialogProps> = ({ open, onClose }) => {
  const [selectedRows, setSelectedRows] = React.useState<boolean[]>(Array(13).fill(false));
  const isAnyChecked = selectedRows.some(row => row);

  const handleCheckboxChange = (index: number) => {
    const updatedSelectedRows = [...selectedRows];
    updatedSelectedRows[index] = !updatedSelectedRows[index];
    setSelectedRows(updatedSelectedRows);
  };

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
            前買情報
          </Typography>
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
                      align="center"
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
                        align="center"
                        style={{ border: '1px solid black', padding: '0px' }}
                      >
                        <Checkbox
                          checked={selectedRows[rowIndex]}
                          onChange={() => handleCheckboxChange(rowIndex)}
                          sx={{
                            width: '30px',  // 設定寬度
                            height: '30px', // 設定高度
                          }}
                        />
                      </TableCell>

                      {Array.from({ length: 9 }).map((_, colIndex) => (
                        <TableCell
                          key={colIndex}
                          style={{ border: '1px solid black', padding: '0.5px 0 0.5px 5px', backgroundColor: '#f3f3f3' }}
                        >
                          {/* col {rowIndex + 1}, row {colIndex + 2} */}
                        </TableCell>
                      ))}
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
              gap: '10px'
            }}
          >
          <Button variant="contained" onClick={onClose} disabled={!isAnyChecked}>確認</Button>
          <Button variant="contained" onClick={onClose}>閉じる</Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SakigaiDialog;