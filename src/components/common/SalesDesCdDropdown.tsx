import React from 'react';
import { Box, MenuItem, Select, Typography } from '@mui/material';

interface SalesDesCdDropdownProps {
    itemName: string;
    nameFlex?: number;
    valueFlex?: number;
}

const SalesDesCdDropdown: React.FC<SalesDesCdDropdownProps> = ({ itemName = "", nameFlex = 1, valueFlex = 1 }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', border: '2px solid black', borderRadius: '1px', height: '30px', width: '270px' }}>
	    {/* Item Name Box */}
	    <Box
	      sx={{
	        flex: nameFlex,
	        backgroundColor: '#d3d3d3',
	        display: 'flex',
	        alignItems: 'center',
	        justifyContent: 'center',
	        padding: '3px',
	        borderRadius: '1px 0 0 1px',
	      }}
	    >
	      <Typography variant="body2" sx={{ fontSize: '16px' }}>
          {itemName}
	      </Typography>
	    </Box>

	    {/* Divider Line */}
	    <Box
	      sx={{
	        width: '2px',
	        backgroundColor: 'black',
	        height: '100%',
	      }}
	    />
    <Box
      sx={{
        flex: valueFlex
      }}
    >
      <Select
        sx={{
          width: '100%',
          height: '30px',
          backgroundColor: 'white',
        }}
        defaultValue=""
      >
            <MenuItem value="option1">10009999</MenuItem>
            <MenuItem value="option2">10000003</MenuItem>
            <MenuItem value="option2">10000002</MenuItem>
            <MenuItem value="option3">10000001</MenuItem>
        </Select>
        </Box>
    </Box>
  );
};

export default SalesDesCdDropdown;