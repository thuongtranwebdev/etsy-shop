import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Toolbar from "@material-ui/core/Toolbar/index";
import IconButton from "@material-ui/core/IconButton/index";
import AppBar from "@material-ui/core/AppBar/index";
import MenuIcon from "@material-ui/icons/Menu";
import { Typography } from "@material-ui/core/index";
import Button from "@material-ui/core/Button/index";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar
});

const FixedPosition = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.flex}>
          Title
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <div className={classes.toolbarMargin} />
    <ul>
      {new Array(500).fill(null).map((v, i) => (
        <li>{i}</li>
      ))}
    </ul>
  </div>
));

export default FixedPosition;
