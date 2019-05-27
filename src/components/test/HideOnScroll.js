import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import Fade from "@material-ui/core/Fade";
import App from "../../App";
import { Toolbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Grow from "@material-ui/core/Grow";

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

const ScrolledAppBar = withStyles(styles)(
  class extends Component {
    state = {
      scrolling: false,
      scrollTop: 0
    };

    onScroll = e => {
      this.setState(state => ({
        scrollTop: e.target.documentElement.scrollTop,
        scrolling: e.target.documentElement.scrollTop > state.scrollTop
      }));
    };

    shouldComponentUpdate(nextProps, nextState) {
      return this.state.scrolling !== nextState.scrolling;
    }

    componentDidMount() {
      window.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.onScroll);
    }

    render() {
      const { classes } = this.props;

      return (
        <Grow in={!this.state.scrolling}>
          <AppBar>
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                My title
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Grow>
      );
    }
  }
);

const AppBarWithButtons = withStyles(styles)(
  ({ classes, title, buttonText }) => (
    <div className={classes.root}>
      <ScrolledAppBar />
      <div className={classes.toolbarMargin} />
      <ul>
        {new Array(500).fill(null).map((v, i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  )
);

export default AppBarWithButtons;
