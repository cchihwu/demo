import React from 'react';
import { Typography, Box } from '@mui/material';
import ListComponent from '../../common/InforListComponent';

const SpecialInfo: React.FC = () => {
  return (
    <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%',
      }}>
        <Typography variant="h6" sx={{ marginBottom: '0px', flexShrink: 0 }}>
          特記情報
        </Typography>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'row',
            gap: '100px',
            flexGrow: 1,
            paddingLeft: '50px',
            paddingRight: '50px',
          }}
        >
          <ListComponent itemName = "＜得意先情報＞" />
          <ListComponent itemName = "＜セールス連絡＞" />
          <ListComponent itemName = "＜センタ内連絡＞" />
        </Box>
      </Box>
  );
};

export default SpecialInfo;