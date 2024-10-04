import React from 'react';
import { Box, Paper } from '@mui/material';
import SpecialInfo from './lowerMiddleParts/SpecialInfo';
import PrePurchaseInfo from './lowerMiddleParts/PrePurchaseInfo';

interface LowerMiddleSectionProps {
  currentView: 'view1' | 'view2';
  showView: boolean;
}

const LowerMiddleSection: React.FC<LowerMiddleSectionProps> = ({ currentView, showView = false }) => {
  return (
    <Box
    sx={{ backgroundColor: '#e0e0e0', flex: 2, marginBottom: '5px', padding: '3px' }}
    >
      {showView && (
        <>
          <Paper
            elevation={0}
            sx={{
              width: '98%',
              height: '80%',
              padding: 0,
              backgroundColor: 'transparent',
            }}
          >
            {currentView === 'view1' ? (
              <SpecialInfo />
            ) : (
              <PrePurchaseInfo />
            )}
          </Paper>
        </>
      )}
    </Box>
  );
};

export default LowerMiddleSection;