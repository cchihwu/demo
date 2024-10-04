import React from 'react';
import { Typography, Box } from '@mui/material';
import DetailsTable from './upperMiddleSectionParts/DetailsTable';

interface UpperMiddleSectionProps {
  showView: boolean;
}


const UpperMiddleSection: React.FC<UpperMiddleSectionProps> = ({ showView = false }) => {
  return (
    <Box
    sx={{ backgroundColor: '#e0e0e0', flex: 5, marginBottom: '5px', padding: '3px' }}
    >
      {showView && (
        <>
          <DetailsTable />
        </>
      )}
    </Box>
  );
};

export default UpperMiddleSection;