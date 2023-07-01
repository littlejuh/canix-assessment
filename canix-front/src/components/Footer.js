import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" style={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" color="inherit">
          Copyright © 2023{' '}
          <Link
            href="https://www.github.com/littlejuh"
            target="_blank"
            rel="noopener"
            underline="hover"
            color="inherit"
          >
            @littlejuh
          </Link>
          . All Rights Reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
