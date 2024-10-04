import React from 'react';
import { Box, Typography } from '@mui/material';

interface ItemTypographyProps {
  itemName: string;
  FromTime: string;
  ToTime: string;
}

const TimeRageTypography: React.FC<ItemTypographyProps> = ({
  itemName,
  FromTime = "　",
  ToTime = "　"
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', border: '2px solid black', borderRadius: '1px', height: '30px', width: '300px' }}>
      
    {/* Item Name Box */}
    <Box
      sx={{
        flex: 2,
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
        flex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3px',
        borderRadius: '0 1px 1px 0',
        backgroundColor: 'white',
      }}
    >
      <Typography variant="body2" sx={{ fontSize: '16px' }}>
        {FromTime}
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

    {/* Item Name Box */}
    <Box
      sx={{
        flex: 1,
        backgroundColor: '#d3d3d3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3px',
        borderRadius: '1px 0 0 1px',
      }}
    >
      <Typography variant="body2" sx={{ fontSize: '16px' }}>
        ～
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
        flex: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3px',
        borderRadius: '0 1px 1px 0',
        backgroundColor: 'white',
      }}
    >
      <Typography variant="body2" sx={{ fontSize: '16px' }}>
        {ToTime}
      </Typography>
    </Box>
  </Box>
  );
};

export default TimeRageTypography;