import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Typograph from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from "react-router-dom";
import React from 'react';

import logo from '../icons/logo.svg';
const logo_height = 5;

const useStyles = makeStyles(theme => ({
    root: {
        padding: 0,
        margin: 0,
    },
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
            ...theme.navtab,
            minWidth: '0',
        },
        '& .MuiTabs-indicator': {
            backgroundColor: theme.palette.bg_tertiary.main
        }
    },
    btnAppbar: {
        ...theme.navbtn
    }
}));

function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
}

export default function Header (props) {
    const [tabValue, setTabValue] = React.useState(0);
    const classes = useStyles();

    // ------------------------
    //  Hooks
    // ------------------------
    React.useEffect(() => {
        // when header is loaded, check current path and update the active navbar tab accordingly
        if(window.location.pathname === "/" && tabValue !== 0) setTabValue(0)
        else if (window.location.pathname === "/services" && tabValue !== 1) setTabValue(1)
        else if (window.location.pathname === "/revolution" && tabValue !== 2) setTabValue(2)
        else if (window.location.pathname === "/about" && tabValue !== 3) setTabValue(3)
        else if (window.location.pathname === "/contact" && tabValue !== 4) setTabValue(4)
    }, [tabValue]);

    // ------------------------
    //  Handlers
    // ------------------------
    const handleChange = (event, newValue) => setTabValue(newValue);

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar  className={classes.appBar} position="fixed">
                    <Toolbar disableGutters>
                        <a className={classes.logo} href="/" component={Link} to="/"><img src={logo} /> </a>
                        
                        <div style={{width:'100%', display: 'flex', justifyContent: 'flex-end'}}>
                            <Tabs className={classes.tabs} value={tabValue} onChange={handleChange} >
                                <Tab label="Home"           component={Link} to="/"/>
                                <Tab label="Services"       component={Link} to="/services"/>
                                <Tab label="The Revolution" component={Link} to="/revolution"/>
                                <Tab label="About Us"       component={Link} to="/about"/>
                                <Tab label="Contact Us"     component={Link} to="/contact"/>
                            </Tabs>
                            <Button className={classes.btnAppbar} variant="contained" color="primary" disableElevation>Free Estimate</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarOffset} />
        </React.Fragment>
    );
}