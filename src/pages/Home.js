import React from 'react'
import {Container, Grid, Paper } from '@mui/material';
import SSHGraph from '../components/SSHGraph';
import {processData} from '../utils/processData';
import { data } from '../Data';

const Home = () => {
  const mockData = processData(data);
  console.log(mockData);
  
  return (
    <Container sx={{width:"100%", display:"flex", flexDirection:"column", alignItems:"center"}}>
        <h1>SSH Dashboard - Attack Data Analysis</h1>
        <Grid container spacing={3} gap={6}>
          <Grid item xs={12}>
            <Paper sx={{width:"100%"}}>
              <SSHGraph title="Attacks Category" type="category" data={mockData.categoryData}/>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{width:"100%"}}>
              <SSHGraph title="Attacks Frequency at a given time" type="attacksFreq" data={mockData.attacksFreq}/>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{width:"100%"}}>
              <SSHGraph title="Protocols Frequency" type="protocols" data={mockData.protocolsData}/>
            </Paper>
          </Grid>
        </Grid>
    </Container>
  )
}

export default Home



