import React from 'react';
import LaunchCard from './LaunchCard';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@emotion/react';
import { Typography } from '@mui/material';
const useStyles = makeStyles((theme) => ({
    gridContainer: {
        width: '80%', 
        margin: '0 auto',
        padding: '3em',
        paddingTop: '1em',
}
}))

const LaunchesGrid = ({launches}) => {
    console.log(launches)
    const classes = useStyles();
    const theme = useTheme();
    const isMD = theme.breakpoints.down('md');
    return (
        <>
        <Typography variant='h2' color={theme.palette.secondary.main} align="center" sx={{ textDecoration: 'underline', marginTop: '1.5em',}}> Past Launches </Typography>
        <Grid container className={classes.gridContainer} justifyContent={isMD ? 'center' : 'space-between'} >
            {launches.map(launch => (
                    <LaunchCard 
                        key={launch.id}
                        img={launch.links.mission_patch_small}
                        missionName={launch.mission_name}
                        launchYear={launch.launch_year}
                        launchSuccess={launch.launch_success}
                        id={launch.id}
                    />
                ))}
        </Grid>
        </>
);
    }
export default LaunchesGrid;