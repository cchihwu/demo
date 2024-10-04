import React from 'react';
import { Box, Typography } from '@mui/material';

interface MessageTypographyProps {
    width?: string;
    context?: string;
}
  
const MessageTypography: React.FC<MessageTypographyProps> = ({ width = '544px', context = "" }) => {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          border: '2px solid black',
          borderRadius: '1px',
          width: width,
          height: '30px',
          backgroundColor: '#d3d3d3',
          paddingLeft: '10px',
        }}
      >
        <Typography variant="body2">{context}</Typography>
      </Box>
    );
};

export default MessageTypography;