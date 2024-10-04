import React from 'react';
import { Box, MenuItem, Select, Typography } from '@mui/material';

interface SearchItemDropdownProps {
    itemName: string;
    itemValue: string;
    nameFlex?: number;
    valueFlex?: number;
}

const SearchItemDropdown: React.FC<SearchItemDropdownProps> = ({ itemName = "", itemValue = "　", nameFlex = 1, valueFlex = 1 }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', border: '2px solid black', borderRadius: '1px', height: '30px', width: '700px' }}>
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

    {/* Item Value Box */}
    <Box
      sx={{
        flex: valueFlex,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3px',
        borderRadius: '0 1px 1px 0',
        backgroundColor: 'white',
      }}
    >
      <Typography variant="body2" sx={{ fontSize: '16px' }}>
        {itemValue}
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
        flex: 2
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
            <MenuItem value="option1">１：チルド</MenuItem>
            <MenuItem value="option2">２：冷食</MenuItem>
            <MenuItem value="option3">３：ドライ</MenuItem>
        </Select>
        </Box>
    </Box>
  );
};

export default SearchItemDropdown;