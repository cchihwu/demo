import React from 'react';
import { Box, MenuItem, Select, Typography, TextField } from '@mui/material';
import '../../styles/layout.css';

interface SearchItemDropdownProps {
    itemName: string;
    itemValue: string;
    nameFlex?: number;
    valueFlex?: number;
}

const SearchItemDropdown: React.FC<SearchItemDropdownProps> = ({ itemName = "", itemValue = "　", nameFlex = 1, valueFlex = 1 }) => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // if (event.key === 'Enter') {
    //   onEnter(value);
    // }
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '30px', width: '300px' }}>
	    {/* Item Name Box */}
	      <Typography variant="body2" className="typography typography-left-search-item">
          {itemName}
	      </Typography>

    {/* Item Value Box */}
        <TextField
          onKeyDown={handleKeyPress}
          variant="outlined"
          InputProps={{
            sx: {
              border: 'none',
              backgroundColor: 'transparent',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
                borderRadius: '0',
              },
              paddingLeft: 0,
            },
          }}
          sx={{
            '& .MuiInputBase-root': {
              height: '30px',
              border: '2px solid black',
              borderLeft: 'none',
              borderRadius: '0',
            },
            backgroundColor: 'white'
          }}
        />

      {/* <Select
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
        </Select> */}

    </Box>
  );
};

export default SearchItemDropdown;