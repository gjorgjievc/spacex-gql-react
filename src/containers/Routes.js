import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Launches from './Launches';
import Rocket from './Rocket';
import logo from '../assets/spacex-logo.png'
import { useTheme } from '@mui/material/styles';

const Routes = (...props) => {
    const theme = useTheme();
    console.log(theme)
return (
    <Router>
        <img onClick={() => window.location.replace('/')} src={logo} alt='spacex logo' style={{display: 'flex', margin: '12px auto'}}/>
        <Switch>
            <Route exact path="/" component={Launches} />
            <Route exact path="/:id" component={Rocket} />
        </Switch>
    </Router>
)}

export default Routes;