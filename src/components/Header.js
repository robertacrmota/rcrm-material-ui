import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Typograph from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import React from 'react';

import logo from '../icons/logo.svg';
const logo_height = 5;

const useStyles = makeStyles(theme => ({
    appBar: {
        backgroundColor: theme.palette.bg_tertiary.main,
        
    },
    logo: {
        height: `${logo_height}rem`
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

    const handleChange = (event, newValue) => setTabValue(newValue);

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar  className={classes.appBar} position="fixed">
                    <Toolbar disableGutters>
                        <img className={classes.logo} src={logo}></img>
                        
                        <div style={{width:'100%', display: 'flex', justifyContent: 'flex-end'}}>
                            <Tabs className={classes.tabs} value={tabValue} onChange={handleChange} >
                                <Tab label="Home" />
                                <Tab label="Services" />
                                <Tab label="The Revolution" />
                                <Tab label="About Us" />
                                <Tab label="Contact Us" />
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