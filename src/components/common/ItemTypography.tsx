import React from 'react';
import { Box, Typography } from '@mui/material';
import '../../styles/layout.css';

interface ItemTypographyProps {
  itemName: string;
  itemValue: string;
  nameFlex?: number;
  valueFlex?: number;
}

const ItemTypography: React.FC<ItemTypographyProps> = ({
  itemName,
  itemValue,
  nameFlex = 1,
  valueFlex = 2,
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '30px', width: '270px' }}>
    {/* <Box sx={{ display: 'flex', alignItems: 'center', border: '2px solid black', borderRadius: '1px', height: '30px', width: '270px' }}> */}
    {/* <Box sx={{ display: 'flex', alignItems: 'center', height: '30px', width: '270px' }}> */}
      
    {/* Item Name Box */}
    <Box
      // sx={{
      //   flex: nameFlex,
      //   backgroundColor: '#d3d3d3',
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      //   padding: '3px',
      //   borderRadius: '1px 0 0 1px',
      // }}
    >
      <Typography variant="body2" className="typography typography-left-item">
        {itemName}
      </Typography>
    </Box>

    {/* Divider Line */}
    {/* <Box
      sx={{
        width: '2px',
        backgroundColor: 'black',
        height: '100%',
      }}
    /> */}

    {/* Item Value Box */}
    <Box
      // sx={{
      //   flex: valueFlex,
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      //   padding: '3px',
      //   borderRadius: '0 1px 1px 0',
      //   backgroundColor: 'white',
      // }}
    >
      <Typography variant="body2" className="typography typography-right-item">
        {itemValue}
      </Typography>
    </Box>
  </Box>
  );
};

export default ItemTypography;