import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ label, color, disabled, onClick }) => {
  return (
    <Button sx={{ margin: '1rem' }} variant="contained" color={color} disabled={disabled} onClick={onClick}>
      {label}
    </Button>
  );
};

export default CustomButton;
