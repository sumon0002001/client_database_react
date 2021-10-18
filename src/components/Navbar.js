import React from 'react';
import { AppBar, Toolbar, makeStyles, Typography } from '@material-ui/core';
const Navbar = () => {
    return (
        
    <AppBar position="static">
  <Toolbar variant="dense">
   
    <Typography variant="h6" color="inherit" component="div">
      Photos
    </Typography>
  </Toolbar>
</AppBar>
        
    )
}

export default Navbar
