import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles((theme) => ({
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }
}))

const Loading = () => {
    const classes = useStyles();

    return(
        <div className={classes.spinner}>
            <CircularProgress color='secondary'/>
        </div>
    )
}
export default Loading;