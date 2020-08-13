import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Typograph from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from "react-router-dom";
import React from 'react';

import logo from '../icons/logo.svg';
const logo_height = 5;

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: theme.palette.bg_tertiary.main,
        
    },
    logo: {
        height: `${logo_height}rem`,
        '& img': {
            height: '100%'
        }
    },
    toolbarOffset: {
        ... theme.mixins.toolbar,
        height: `${logo_height}rem`
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
    const [tabValue, setTabValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);    // anchor element for menu
    const [open, setOpen] = React.useState(false);           // whether or not menu is open
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
        setOpen(true);
    }

    const handleMenuClose = (e) => {
        setAnchorEl(null);
        setOpen(false);
    }

    const handleMenuItemClick = (e, idx) => {
        setSelectedMenuIndex(idx);
        setTabValue(1);     // set services tab as active
        handleMenuClose();
    }

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar  className={classes.appBar} position="fixed">
                    <Toolbar disableGutters>
                        <a className={classes.logo} href="/" component={Link} to="/"><img src={logo} /> </a>
                        
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
                                            open={open} 
                                            onClose={handleMenuClose}
                                            MenuListProps={{onMouseLeave: handleMenuClose}}
                        >
                            {menuOptions.map((opt, idx) => (
                                <MenuItem key={opt.name + '-menu-item'}
                                          classes={{root: classes.menuItem, selected: classes.menuItemSelected}}
                                          onClick={e => handleMenuItemClick(e, idx)} 
                                          selected={selectedMenuIndex === idx && tabValue == 1}
                                          component={Link} to={opt.route}>{opt.name}
                                </MenuItem>
                            ))}
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarOffset} />
        </React.Fragment>
    );
}