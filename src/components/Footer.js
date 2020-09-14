import {makeStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import React from 'react';
import Hidden from '@material-ui/core/Hidden';

import footerAdornment from '../assets/Footer Adornment.svg';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';


const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.bg_tertiary.main,
    width: '100%',
    zIndex: theme.zIndex.modal + 2,
    position: 'relative'
  },
  adornment: {  
    width: '15rem', // md
    verticalAlign: 'bottom',
    [theme.breakpoints.down("xs")]: {
      width: '10rem'
    },
    [theme.breakpoints.up("md")]: {
      width: '20rem'
    },
  },
  gridContainer: {
    position: 'absolute'
  },
  gridItem: {
    margin: '3rem'
  },
  gridItemLink: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  socialContainer: {
    position: 'absolute',
    bottom: '.1rem',
    right: '1rem'
  },
  socialIcon: {
    width: '3rem',
    height: '3rem',
    [theme.breakpoints.down("xs")]: {
      width: '1.5rem',
      height: '1.5rem',
    }
  }
}));

export default function Footer(props) {
  const classes = useStyles();

    return (
        <footer className={classes.footer}>
        <Hidden smDown>
          <Grid container justify='center' className={classes.gridContainer}>
              <Grid item className={classes.gridItem}>
                <Grid container direction='column'>
                    <Grid item className={classes.gridItemLink} onClick={() => props.setTabValue(0)} component={Link} to="/">Home</Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Grid container direction='column' spacing={2}>
                    <Grid item className={classes.gridItemLink} onClick={() => {props.setTabValue(1); props.setSelectedMenuIndex(0);}} component={Link} to="/services">Services</Grid>
                    <Grid item className={classes.gridItemLink} onClick={() => {props.setTabValue(1); props.setSelectedMenuIndex(1);}} component={Link} to="/customsoftware">Custom Software Development</Grid>
                    <Grid item className={classes.gridItemLink} onClick={() => {props.setTabValue(1); props.setSelectedMenuIndex(2);}} component={Link} to="/mobileapps">iOS/Android App Development</Grid>
                    <Grid item className={classes.gridItemLink} onClick={() => {props.setTabValue(1); props.setSelectedMenuIndex(3);}} component={Link} to="/websites">Website Development</Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Grid container direction='column' spacing={2}>
                    <Grid item className={classes.gridItemLink} onClick={() => props.setTabValue(2)} component={Link} to="/revolution">The Revolution</Grid>
                    <Grid item className={classes.gridItemLink} onClick={() => props.setTabValue(2)} component={Link} to="/revolution">Vision</Grid>
                    <Grid item className={classes.gridItemLink} onClick={() => props.setTabValue(2)} component={Link} to="/revolution">Technology</Grid>
                    <Grid item className={classes.gridItemLink} onClick={() => props.setTabValue(2)} component={Link} to="/revolution">Process</Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Grid container direction='column' spacing={2}>
                    <Grid item className={classes.gridItemLink} onClick={() => props.setTabValue(3)} component={Link} to="/about">About Us</Grid>
                    <Grid item className={classes.gridItemLink} onClick={() => props.setTabValue(3)} component={Link} to="/about">History</Grid>
                    <Grid item className={classes.gridItemLink} onClick={() => props.setTabValue(3)} component={Link} to="/about">Team</Grid>
                </Grid>
              </Grid>
              <Grid item className={classes.gridItem}>
                <Grid container direction='column'>
                    <Grid item className={classes.gridItemLink} onClick={() => props.setTabValue(4)} component={Link} to="/contact">Contact Us</Grid>
                </Grid>
              </Grid>
          </Grid>
        </Hidden>
        <img src={footerAdornment} className={classes.adornment} />
        <Grid container justify={'flex-end'} spacing={2} className={classes.socialContainer}>
          <Grid item component={'a'} href="#">
            <img src={facebook} className={classes.socialIcon} />
          </Grid>
          <Grid item component={'a'} href="#">
            <img src={twitter} className={classes.socialIcon}/>
          </Grid>
          <Grid item component={'a'} href="#">
            <img src={instagram} className={classes.socialIcon}/>
          </Grid>
        </Grid>
        </footer>
      );
}