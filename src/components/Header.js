import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typograph from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import {makeStyles} from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from "react-router-dom";
import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import logo from '../icons/logo.svg';
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
const logo_height = 6;

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: theme.palette.bg_tertiary.main,
        
    },
    logo: {
        height: `${logo_height}rem`,
        '& img': {
            height: '100%'
        },
        [theme.breakpoints.down("md")] : {
            height: `${logo_height-1}rem`,
        },
        [theme.breakpoints.down("xs")] : {
            height: `${logo_height-3}rem`,
        }
    },
    toolbarOffset: {
        ... theme.mixins.toolbar,
        height: `${logo_height}rem`,
        [theme.breakpoints.down("md")] : {
            height: `${logo_height-1}rem`,
        },
        [theme.breakpoints.down("xs")] : {
            height: `${logo_height-3}rem`,
        }
    },
    drawerIconContainer: {
        marginLeft: 'auto',
        "&:hover": {
            backgroundColor: 'transparent'
        }
    },
    drawerIcon: {
        height: '1.5rem',
        width: '1.5rem'
    },
    tabs: {
        '& .MuiTab-root': {
            ...theme.typography.navtab,
            minWidth: '0',
        },
        '& .MuiTabs-indicator': {
            backgroundColor: theme.palette.bg_tertiary.main
        }
    },
    btnAppbar: {
        ...theme.navbtn
    },
    tabMenu: {
        background: theme.palette.bg_tertiary.main,
        color: '#fff',
        borderRadius: 0
    },
    menuItem: {
        ...theme.typography.navtab,
        opacity: .7,
        '& .selected': {
            color: 'red'
        },  
        '&:hover': {
            opacity: 1
        }
    },
}));

function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

export default function Header (props) {
    const classes = useStyles();
    const theme = useTheme();                                            // gives access to the theme used in this component
    const mdMediaQuery = useMediaQuery(theme.breakpoints.down("md"));

    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [tabValue, setTabValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);                // anchor element for menu
    const [openMenu, setOpenMenu] = React.useState(false);               // whether or not menu is open
    const [selectedMenuIndex, setSelectedMenuIndex] = React.useState(0); // which menu item idx is selected

    const menuOptions = [
            {name: "Services", route: "/services"},
            {name: "Custom Software Development", route: "/customsoftware"},
            {name: "Mobile Development", route: "/mobileapps"},
            {name: "Website Development", route: "/websites"},
    ];

    // ------------------------
    //  Hooks
    // ------------------------
    React.useEffect(() => {
        // when header is loaded, check current path and update the active navbar tab accordingly
        if(window.location.pathname === "/" && tabValue !== 0) setTabValue(0)
        else if (window.location.pathname === "/revolution" && tabValue !== 2) setTabValue(2)
        else if (window.location.pathname === "/about" && tabValue !== 3) setTabValue(3)
        else if (window.location.pathname === "/contact" && tabValue !== 4) setTabValue(4)

        else if (window.location.pathname === "/services" && tabValue !== 1) {setTabValue(1); setSelectedMenuIndex(0); }
        else if (window.location.pathname === "/customsoftware" && tabValue !== 1) {setTabValue(1); setSelectedMenuIndex(1); }
        else if (window.location.pathname === "/mobileapps" && tabValue !== 1) {setTabValue(1); setSelectedMenuIndex(2); }
        else if (window.location.pathname === "/websites" && tabValue !== 1) {setTabValue(1); setSelectedMenuIndex(3); }
    }, [tabValue]);

    // ------------------------
    //  Handlers
    // ------------------------
    const handleTabChange = (event, newValue) => setTabValue(newValue);

    const handleTabClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }

    const handleMenuClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
    }

    const handleMenuItemClick = (e, idx) => {
        setSelectedMenuIndex(idx);
        setTabValue(1);     // set services tab as active
        handleMenuClose();
    }

    // ------------------------
    //  Components
    // ------------------------

    const tabsComponent = (
        <React.Fragment>
            <div style={{width:'100%', display: 'flex', justifyContent: 'flex-end'}}>
                <Tabs className={classes.tabs} value={tabValue} onChange={handleTabChange} >
                    <Tab label="Home"           
                            component={Link} to="/"
                    />
                    <Tab label="Services"       
                            component={Link} to="/services"
                            aria-owns={anchorEl ? "tab-menu" : undefined}
                            aria-haspopup={anchorEl ? true : undefined}
                            onMouseOver={e => handleTabClick(e)}
                    />
                    <Tab label="The Revolution" 
                            component={Link} to="/revolution"        
                    />
                    <Tab label="About Us"       
                            component={Link} to="/about"
                    />
                    <Tab label="Contact Us"     
                            component={Link} to="/contact"
                    />
                </Tabs>
                <Button className={classes.btnAppbar} variant="contained" color="primary" disableElevation>Free Estimate</Button>
            </div>

            <Menu id="tab-menu" classes={{paper: classes.tabMenu}} elevation={0}
                                anchorEl={anchorEl} 
                                open={openMenu} 
                                onClose={handleMenuClose}
                                MenuListProps={{onMouseLeave: handleMenuClose}}>

                {menuOptions.map((opt, idx) => (
                    <MenuItem key={opt.name + '-menu-item'}
                                classes={{root: classes.menuItem, selected: classes.menuItemSelected}}
                                onClick={e => handleMenuItemClick(e, idx)} 
                                selected={selectedMenuIndex === idx && tabValue == 1}
                                component={Link} to={opt.route}>{opt.name}
                    </MenuItem>
                ))}

            </Menu>
        </React.Fragment>
    );

    const drawerComponent = (
        <React.Fragment>
            <SwipeableDrawer open={openDrawer} disableBackdropTransition={!iOS} disableDiscovery={iOS}
                            onOpen={() => setOpenDrawer(true)} 
                            onClose={() => setOpenDrawer(false)}>
                            HI!
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} disableRipple
                        onClick={() => setOpenDrawer(!openDrawer)}>
                    <MenuIcon className={classes.drawerIcon}/>       
            </IconButton>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar  className={classes.appBar} position="fixed">
                    <Toolbar disableGutters>
                        <a className={classes.logo} href="/" component={Link} to="/"><img src={logo} /> </a>
                        
                        {mdMediaQuery ? drawerComponent : tabsComponent}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarOffset} />
        </React.Fragment>
    );
}