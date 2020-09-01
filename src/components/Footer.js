import {makeStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import React from 'react';

import footerAdornment from '../assets/Footer Adornment.svg';

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
  }
}));

export default function Footer(props) {
  const classes = useStyles();

    return (
        <footer className={classes.footer}>
        <Grid container justify='center' className={classes.gridContainer}>
            <Grid item className={classes.gridItem}>
              <Grid container direction='column'>
                  <Grid item className={classes.gridItemLink} component={Link} to="/">Home</Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction='column' spacing={2}>
                  <Grid item className={classes.gridItemLink} component={Link} to="/services">Services</Grid>
                  <Grid item className={classes.gridItemLink} component={Link} to="/customsoftware">Custom Software Development</Grid>
                  <Grid item className={classes.gridItemLink} component={Link} to="/mobileapps">Mobile App Development</Grid>
                  <Grid item className={classes.gridItemLink} component={Link} to="/websites">Website Development</Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction='column' spacing={2}>
                  <Grid item className={classes.gridItemLink} component={Link} to="/revolution">The Revolution</Grid>
                  <Grid item className={classes.gridItemLink} component={Link} to="/revolution">Vision</Grid>
                  <Grid item className={classes.gridItemLink} component={Link} to="/revolution">Technology</Grid>
                  <Grid item className={classes.gridItemLink} component={Link} to="/revolution">Process</Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction='column' spacing={2}>
                  <Grid item className={classes.gridItemLink} component={Link} to="/about">About Us</Grid>
                  <Grid item className={classes.gridItemLink} component={Link} to="/about">History</Grid>
                  <Grid item className={classes.gridItemLink} component={Link} to="/about">Team</Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction='column'>
                  <Grid item className={classes.gridItemLink} component={Link} to="/contact">Contact Us</Grid>
              </Grid>
            </Grid>
        </Grid>
        <img src={footerAdornment} className={classes.adornment}></img>
        </footer>
      );
}