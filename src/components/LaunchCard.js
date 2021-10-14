import React from "react";
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    cardItem: {
       margin: '2em',
       display: 'flex',
       alignItems: 'center',
    },

    image: {
        root: {
            width: '100px',
            borderRadius: '50%'
        }
    },
    cardActions: {
        justifyContent: 'flex-end',
        alignItems:'flex-end'
    },
    contentWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
    }
}));

const LaunchCard = ({ img, missionName, launchYear, launchSuccess, id, }) => {
    const classes = useStyles();
    const history = useHistory();
    return (
    <Grid item onClick={() => history.push(`/${id}`)} sx={{cursor: 'pointer'}}>
     <Card className={classes.cardItem} sx={{width: '400px'}}>
       { img ? 
        <CardMedia
            component="img"
            alt={missionName}
            sx={{ maxWidth: 140, maxHeight: 140, padding: '0.5em' }} 
            image={img}
            className={classes.image}
            />
        : <CardMedia sx={{ width: 140, height: 140, }} />
       }
        <div className={classes.contentWrapper}>
      <CardContent>
        <Typography variant="h5" component="div">
          {missionName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {launchYear}
        </Typography>
      </CardContent>

      </div>
    </Card>
    </Grid>
)}
export default LaunchCard;