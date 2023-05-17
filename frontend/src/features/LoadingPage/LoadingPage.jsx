import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import style from './LoadingPage.module.scss';

export default function LoadingPage() {
  return (
    <Box className={style.loader_container}>
      <CircularProgress size={150} sx={{ color: '#8e97fd' }} />
    </Box>
  );
}
