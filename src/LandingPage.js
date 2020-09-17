import {makeStyles, useTheme} from '@material-ui/core/styles';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typograph from "@material-ui/core/Typography";
import ButtonArrow from './components/ButtonArrow';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CardContent  from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import React from 'react';

import heroIcon from './assets/designIcon.svg';
import customSoftwareIcon from './assets/Custom Software Icon.svg';
import mobileAppsIcon from './assets/mobileIcon.svg';
import websiteIcon from './assets/websiteIcon.svg';
import revolutionBgIcon from './assets/repeatingBackground.svg';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '5% 5%'
    },
    section: {
        marginBottom: '10rem',
        '&:nth-child(1)': {
            marginBottom: '5rem'
        }
    },
    sectionCard: {
        padding: '3rem',
        backgroundImage: `url(${revolutionBgIcon})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        boxShadow: theme.shadows[10],
        [theme.breakpoints.down('sm')]: {
            padding: '1.5rem .7rem',
        }
    },
    sectionTextItem: {
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center'
        }
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
    learnButtonSmall: {
        ... theme.radialButtonOutline,
        padding: '5px 10px',
        margin: '.7rem 0 0 0',
        fontSize: '.7rem',
        [theme.breakpoints.down('sm')]: {
            margin: '.5rem 0 1rem 0'
        }
    },
    heroText: {
        color: theme.palette.bg_tertiary.main
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.orange.main
    },
}));

export default function LandingPage() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Grid container direction='column' className={classes.root}>
            {/** Hero block **********************/}
            <Grid item className={classes.section}> 
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

            {/** Services block ******************/}
            <Grid item className={classes.section}>
                <Grid container spacing={3} direction={matchesSM ? 'column' : 'row'} alignItems={matchesSM ? 'center' : 'flex-start'}>
                    <Grid item className={classes.sectionTextItem}>
                        <Typograph variant='h4'>
                            Custom Software Development
                        </Typograph>
                        <Typograph variant='subtitle1'>
                            Save Energy. Save Time. Save Money.
                        </Typograph>
                        <Typograph variant='subtitle1'>
                            Complete digital solutions, from investigation to {" "} <span className={classes.specialText}>celebration</span>
                        </Typograph>
                        <Button variant='outlined' 
                                disableRipple
                                className={classes.learnButtonSmall}
                        >
                            <span style={{marginRight: '10px'}}>Learn More</span> <ButtonArrow width={15} height={15} fill={theme.palette.bg_tertiary.main}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img src={customSoftwareIcon} />
                    </Grid>
                </Grid>
            </Grid>

            {/** iOS/Android block ******************/}
            <Grid item className={classes.section} >
                <Grid container spacing={3} 
                      direction={matchesSM ? 'column' : 'row'} 
                      alignItems={matchesSM ? 'center' : 'flex-start'}
                      justify={matchesSM ? 'center' : 'flex-end'}>
                    <Grid item className={classes.sectionTextItem}>
                        <Typograph variant='h4'>
                            iOS/Android App Development
                        </Typograph>
                        <Typograph variant='subtitle1'>
                            Extend Functionality. Extend Access. Increase Engagement.
                        </Typograph>
                        <Typograph variant='subtitle1'>
                            Integrate your web experience or create a standalone app {matchesSM ? null : <br />}
                        </Typograph>
                        <Button variant='outlined' 
                                disableRipple
                                className={classes.learnButtonSmall}
                        >
                            <span style={{marginRight: '10px'}}>Learn More</span> <ButtonArrow width={15} height={15} fill={theme.palette.bg_tertiary.main}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img src={mobileAppsIcon} />
                    </Grid>
                </Grid>
            </Grid>
        
            {/** website block ******************/}
            <Grid item className={classes.section}>
                <Grid container spacing={3} direction={matchesSM ? 'column' : 'row'} alignItems={matchesSM ? 'center' : undefined}>
                    <Grid item className={classes.sectionTextItem}>
                        <Typograph variant='h4'>
                            Website Development
                        </Typograph>
                        <Typograph variant='subtitle1'>
                            Reach More. Discover More. Sell More.
                        </Typograph>
                        <Typograph variant='subtitle1'>
                            Optimized for Search Engines, built for speed.
                        </Typograph>
                        <Button variant='outlined' 
                                disableRipple
                                className={classes.learnButtonSmall}
                        >
                            <span style={{marginRight: '10px'}}>Learn More</span> <ButtonArrow width={15} height={15} fill={theme.palette.bg_tertiary.main}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img src={websiteIcon} />
                    </Grid>
                </Grid>
            </Grid>

            {/** revolution block ******************/}
            <Grid item className={classes.section}>
                <Card className={classes.sectionCard}>
                    <CardContent>
                        <Grid container direction='column' justify='center' alignItems='center'>
                            <Grid item>
                                <Typograph variant='h3' gutterBottom>The Revolution</Typograph>
                            </Grid>
                            <Grid item>
                                <Typograph variant='subtitle1'>
                                    Visionary insights with cutting-edge technology is a recipe for revolution.
                                </Typograph>
                            </Grid>
                            <Grid item>
                                <Button variant='outlined' 
                                    disableRipple
                                    className={classes.learnButtonSmall}
                                >
                                    <span style={{marginRight: '10px'}}>Learn More</span> <ButtonArrow width={15} height={15} fill={theme.palette.bg_tertiary.main}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
};
