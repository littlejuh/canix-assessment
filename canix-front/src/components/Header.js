import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">Canix</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
