import React from 'react';
import { AppBar, Toolbar, makeStyles, Typography } from '@material-ui/core';

const styles = makeStyles({
    header: {
        background: '#111111'
    }, 
    tab: {
       color :'#FFFFFF',
       marginRight: 20,
       textDecoration: 'none',
       fontSize: 20

    }
})
const Navbar = () => {
    const classes = styles();

  return (
    <AppBar position="static" className={classes.header}>
    <Toolbar variant="dense">
    <Typography variant="h6" color="inherit" component="div">
      Dashboard
    </Typography>
    <Typography variant="h6" color="inherit" component="div">
      AllUsers
    </Typography>
    <Typography variant="h6" color="inherit" component="div">
      AddUser
    </Typography>
  </Toolbar>
</AppBar>
        
    )
}

export default Navbar
