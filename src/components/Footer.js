import React from 'react';
import {makeStyles} from '@material-ui/styles';

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
    
  }
}));

export default function Footer(props) {
  const classes = useStyles();

    return (
        <footer className={classes.footer}>
          <img src={footerAdornment} className={classes.adornment}></img>
        </footer>
      );
}