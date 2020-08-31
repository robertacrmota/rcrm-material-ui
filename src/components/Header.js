import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Typograph from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import logo from "../icons/logo.svg";
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
const logo_height = 6;

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.bg_tertiary.main,
    zIndex: theme.zIndex.modal + 1
  },
  logo: {
    height: `${logo_height}rem`,
    "& img": {
      height: "100%",
    },
    [theme.breakpoints.down("md")]: {
      height: `${logo_height - 1}rem`,
    },
    [theme.breakpoints.down("xs")]: {
      height: `${logo_height - 3}rem`,
    },
  },
  toolbarOffset: {
    ...theme.mixins.toolbar,
    height: `${logo_height}rem`,
    [theme.breakpoints.down("md")]: {
      height: `${logo_height - 1}rem`,
    },
    [theme.breakpoints.down("xs")]: {
      height: `${logo_height - 3}rem`,
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  drawerIcon: {
    height: "1.5rem",
    width: "1.5rem",
  },
  drawerPaper: {
    backgroundColor: theme.palette.bg_tertiary.main,
  },
  drawerItemText: {
    ...theme.typography.navtab,
    opacity: 0.7,
  },
  drawerItemTextSelected: {
    "& .MuiListItemText-root":{
      opacity: 1,
    }
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.orange.main,
  },
  tabs: {
    "& .MuiTab-root": {
      ...theme.typography.navtab,
      minWidth: "0",
    },
    "& .MuiTabs-indicator": {
      backgroundColor: theme.palette.bg_tertiary.main,
    },
  },
  btnAppbar: {
    ...theme.navbtn,
  },
  tabMenuPaper: {
    background: theme.palette.bg_tertiary.main,
    color: "#fff",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.navtab,
    opacity: 0.7,
    "& .selected": {
      color: "red",
    },
    "&:hover": {
      opacity: 1,
    },
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme(); // gives access to the theme used in this component
  const mdMediaQuery = useMediaQuery(theme.breakpoints.up("md"));

  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [tabValue, setTabValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null); // anchor element for menu
  const [openMenu, setOpenMenu] = React.useState(false); // whether or not menu is open
  const [selectedMenuIndex, setSelectedMenuIndex] = React.useState(0); // which menu item idx is selected

  const routes = [
    { name: "Home", link: "/", tabValue: 0 },
    { name: "Services", link: "/services", tabValue: 1 },
    { name: "The Revolution", link: "/revolution", tabValue: 2 },
    { name: "About Us", link: "/about", tabValue: 3 },
    { name: "Contact Us", link: "/contact", tabValue: 4 },
  ];

  // services tab's menu
  const menuOptions = [
    { name: "Services", link: "/services", tabValue: 1, menuIndex: 0 },
    { name: "Custom Software Development", link: "/customsoftware", tabValue: 1, menuIndex: 1, },
    { name: "Mobile Development", link: "/mobileapps", tabValue: 1, menuIndex: 2, },
    { name: "Website Development", link: "/websites", tabValue: 1, menuIndex: 3, },
  ];

  // ------------------------
  //  Hooks
  // ------------------------

  React.useEffect(() => {
    // when header is loaded, check current path and update the active navbar tab accordingly
    [...routes, ...menuOptions].forEach((route) => {
      if (window.location.pathname === route.link && tabValue !== route.tabValue) {
        setTabValue(route.tabValue);
        if (route.menuIndex && selectedMenuIndex !== route.menuIndex) {
          setSelectedMenuIndex(route.menuIndex);
        }
      }
    });
  }, [tabValue, selectedMenuIndex, routes, menuOptions]);

  // ------------------------
  //  Handlers
  // ------------------------
  const handleTabChange = (event, newValue) => setTabValue(newValue);

  const handleTabClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuClose = (e) => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  const handleMenuItemClick = (e, idx) => {
    setSelectedMenuIndex(idx);
    setTabValue(1); // set services tab as active
    handleMenuClose();
  };

  const handleDrawerItemClick = (e, idx) => {
    setOpenDrawer(false);
    setTabValue(idx);
  };

  // ------------------------
  //  Components
  // ------------------------

  const tabsComponent = (
    <React.Fragment>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
      >
        <Tabs
          className={classes.tabs}
          value={tabValue}
          onChange={handleTabChange}
        >
          {routes.map((route, index) => (
            <Tab key={`tab-${route}${index}`} 
                 label={route.name} 
                 component={Link} to={route.link} 
                 aria-owns={route.tabValue === 1 ? anchorEl ? "tab-menu" : undefined : undefined}
                 aria-haspopup={route.tabValue === 1 ? anchorEl ? true : undefined : undefined}
                 onMouseOver={route.tabValue === 1 ? (e) => handleTabClick(e) : undefined}
            />
          ))}

        </Tabs>
        <Button
          className={classes.btnAppbar}
          variant="contained"
          color="primary"
          disableElevation
        >
          Free Estimate
        </Button>
      </div>

      <Menu
        id="tab-menu"
        style={{zIndex: 1302}}
        classes={{paper: classes.tabMenuPaper }}
        elevation={0}
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        MenuListProps={{ onMouseLeave: handleMenuClose }}
        keepMounted
      >
        {menuOptions.map((opt, idx) => (
          <MenuItem
            key={opt.name + "-menu-item"}
            classes={{
              root: classes.menuItem,
              selected: classes.menuItemSelected,
            }}
            onClick={(e) => handleMenuItemClick(e, idx)}
            selected={selectedMenuIndex === idx && tabValue == 1}
            component={Link}
            to={opt.link}
          >
            {opt.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawerComponent = (
    <React.Fragment>
      <SwipeableDrawer
        open={openDrawer}
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.toolbarOffset}></div>
        <List disablePadding>
          {routes.map((route, index) => (
            <ListItem key={`list-item-${route}${index}`} 
                      divider button
                      selected={tabValue === route.tabValue}
                      classes={{selected: classes.drawerItemTextSelected}}
                      onClick={(e) => handleDrawerItemClick(e, route.tabValue)}
                      component={Link}
                      to={route.link}
            >
              <ListItemText disableTypography className={ classes.drawerItemText } >
                  {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem divider button
                    classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemTextSelected}}
                    selected={tabValue === 5}
                    onClick={(e) => handleDrawerItemClick(e, 5)}
                    component={Link}
                    to="/estimate"
          >
            <ListItemText disableTypography className={classes.drawerItemText}>
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton  disableRipple 
                   className={classes.drawerIconContainer}
                   onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar disableGutters>
            <a className={classes.logo} href="/" component={Link} to="/">
              <img src={logo} />{" "}
            </a>
            {mdMediaQuery ? tabsComponent : drawerComponent}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarOffset} />
    </React.Fragment>
  );
}
