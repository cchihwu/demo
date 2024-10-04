import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import '../../styles/layout.css';

interface SearchItemComponentProps {
  itemName: string;
  itemValue: string;
  nameFlex?: number;
  valueFlex?: number;
  onEnter: (value: string) => void;
}

const SearchItemComponent: React.FC<SearchItemComponentProps> = ({
  itemName,
  itemValue,
  nameFlex = 1,
  valueFlex = 2,
  onEnter,
}) => {
  const [inputValue, setInputValue] = useState(itemValue);

  const [value, setValue] = useState('');
  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onEnter(value);
    }
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
              height: '24px',
              border: '2px solid black',
              borderLeft: 'none',
              borderRadius: '0',
            },
            backgroundColor: 'white'
          }}
        />

    </Box>
  );
};

export default SearchItemComponent;