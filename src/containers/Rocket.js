import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Grid, Paper, Table, TableRow, TableContainer, TableBody, Typography, TableCell, Container } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@emotion/react';
import Loading from '../components/Loading';




const GET_ROCKET_INFO = gql`
    query GET_ROCKET_INFO($missionId: ID!) {
        launch(id: $missionId) {
            launch_year
            launch_success
            details
            mission_name
            launch_site {
                site_name_long
            }
            rocket {
                rocket_name
                rocket_type
                rocket {
                    height {
                        meters
                    }
                    diameter {
                        meters
                    }
                    mass {
                        kg
                    }
                    cost_per_launch
                    description
                }
            }
  }}`

const Rocket = ({match}) => {
    const missionId = match.params.id;
    const theme = useTheme();
    const { data, loading, error } = useQuery(GET_ROCKET_INFO, {
        variables: { missionId },
    });
    console.log(theme)
    if (loading) return <Loading />
    if (error) return 'Error loading data...';

    return(
        <Container fixed sx={{flexDirection: 'column', display: 'flex', justifyItems: 'center',}}>
        <Typography variant='h3' align="center" sx={{color: theme.palette.secondary.main, marginBottom: '1em', marginTop: '1em'}}>{data.launch.mission_name} </Typography>
        
        <TableContainer component={Paper} sx={{backgroundColor: theme.palette.secondary.main, border: '1px solid ', width: '70%', display: 'flex', justifyContent: 'center', margin: '0 auto '}}>
            <Table sx={{ width: '100%', }}>
                <TableBody sx={{}}>
                <TableRow>
                        <TableCell> 
                            {data.launch.rocket.rocket.description}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell> 
                            Rocket used: {data.launch.rocket.rocket_name}
                        </TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Rocket type: {data.launch.rocket.rocket_type}
                        </TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell> 
                        Height: {data.launch.rocket.rocket.height.meters}m 
                        </TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell> 
                            Diameter: {data.launch.rocket.rocket.diameter.meters}m 
                        </TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell> 
                        Mass: {data.launch.rocket.rocket.mass.kg}kg
                        </TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell > 
                            Cost per launch: ${data.launch.rocket.rocket.cost_per_launch}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell> 
                            Launch site: {data.launch.launch_site.site_name_long} 
                        </TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Launch year: {data.launch.launch_year}
                        </TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            Launch successful: {data.launch.launch_success ? 'Yes' : 'No'}
                        </TableCell> 
                    </TableRow>
                    <TableRow>
                        <TableCell> 
                            {data.launch.details}
                        </TableCell> 
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        </Container>
    )
}

export default Rocket;