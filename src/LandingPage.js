import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonArrow from './components/ButtonArrow';
import heroIcon from './assets/designIcon.svg';

const useStyles = makeStyles(theme => ({

}));

export default function LandingPage() {
    const classes = useStyles();

    return (
        <Grid container direction='column'>
            <Grid item>
                <Grid container alignItems={'center'}>
                    <Grid item sm={6} xs={12}>
                        <div>Bringing  West Coast  Technology<br/>to the Midwest</div>
                        <Grid container spacing={3} justify={'center'}>
                            <Grid item>
                                <Button variant='contained'>Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined'>Learn More <ButtonArrow width={15} height={15} fill={'red'}/></Button>
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
