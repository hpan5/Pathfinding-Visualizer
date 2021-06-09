import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Menu, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
}));

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit">Algorithms</Button>
                <Button color="inherit">Clear Path</Button>
                <Button color="inherit">Speed</Button>
                <Button color="inherit">Visualize</Button>
                <Button color="inherit">Randomize bomb Node</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;