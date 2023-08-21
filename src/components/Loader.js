import React from 'react';
import { Box } from '@mui/material';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';



const Loader = () => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            py: 3
        }}
    >
        <HourglassBottomIcon  />
    </Box>
);

export default Loader;
