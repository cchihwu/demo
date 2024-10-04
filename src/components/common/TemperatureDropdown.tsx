import React from 'react';
import { Box, MenuItem, Select, Typography } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import '../../styles/layout.css';

interface TemperatureDropdownProps {
    itemName: string;
    nameFlex?: number;
    valueFlex?: number;
    onChange?: (event: SelectChangeEvent<string>) => void;
}

const TemperatureDropdown: React.FC<TemperatureDropdownProps> = ({ itemName = "", nameFlex = 1, valueFlex = 1, onChange }) => {
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
	      <Typography variant="body2" className="typography">
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
        onChange={onChange}
      >
            <MenuItem value="option1">１：チルド</MenuItem>
            <MenuItem value="option2">２：冷食</MenuItem>
            <MenuItem value="option3">３：ドライ</MenuItem>
        </Select>
        </Box>
    </Box>
  );
};

export default TemperatureDropdown;