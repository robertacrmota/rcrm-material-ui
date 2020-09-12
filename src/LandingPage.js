import {makeStyles, useTheme} from '@material-ui/core/styles';
import Typograph from "@material-ui/core/Typography";
import ButtonArrow from './components/ButtonArrow';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';

import heroIcon from './assets/designIcon.svg';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '5% 5%'
    },
    buttonsContainer: {
        padding: '5% 0'
    },
    estimateButton: {
        ... theme.estimateButton,        
    },
    learnButton: {
        ... theme.radialButtonOutline
    },
    heroText: {
        color: theme.palette.bg_tertiary.main
    }
}));

export default function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Grid container direction='column' className={classes.root}>
            <Grid item>
                <Grid container alignItems='center' spacing={1}>
                    <Grid item sm={6} xs={12}>
                        <Typograph className={classes.heroText} 
                                   align='center'
                                   variant='h2'>
                            Bringing  West Coast  Technology<br/>to the Midwest
                        </Typograph>                   
                        <Grid container spacing={3} justify='center' className={classes.buttonsContainer}>
                            <Grid item>
                                <Button className={classes.estimateButton} 
                                        variant="contained"
                                        color="primary"
                                        disableElevation
                                        disableRipple
                                >
                                    Free Estimate
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' 
                                        disableRipple
                                        className={classes.learnButton}
                                >
                                    <span style={{marginRight: '10px'}}>Learn More</span> <ButtonArrow width={15} height={15} fill={theme.palette.bg_tertiary.main}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <img src={heroIcon} width='100%' height='100%' />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};
