import React, { Component, Fragment } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import App from "../../App";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexFlow: 1
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

const MyToolbar = withStyles(styles)(
  class extends Component {
    static defaultProps = {
      MenuItems: ({ closeMenu }) => (
        <Fragment>
          <MenuItem onClick={closeMenu}>Profile</MenuItem>
          <MenuItem onClick={closeMenu}>My account</MenuItem>
          <MenuItem onClick={closeMenu}>Logout</MenuItem>
        </Fragment>
      ),
      RightButton: () => <Button color="inherit">Login</Button>
    };

    state = { anchor: null };
    closeMenu = () => this.setState({ anchor: null });

    render() {
      const { classes, title, MenuItems, RightButton } = this.props;
      return (
        <Fragment>
          <AppBar>
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
                onClick={event =>
                  this.setState({ anchor: event.currentTarget })
                }
              >
                <MenuItem />
              </IconButton>
              <Menu
                anchorEl={this.state.anchor}
                open={Boolean(this.state.anchor)}
                onClose={this.closeMenu}
              >
                <MenuItems closeMenu={this.closeMenu} />
              </Menu>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                {title}
              </Typography>
              <RightButton />
            </Toolbar>
          </AppBar>
          <div className={classes.toolbarMargin} />
        </Fragment>
      );
    }
  }
);

const ToolbarAbstraction = withStyles(styles)(({ classes, ...props }) => (
  <div className={classes.root}>
    <MyToolbar {...props} />
  </div>
));

export default ToolbarAbstraction;
