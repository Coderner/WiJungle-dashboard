import React from 'react'
import {Container, Grid, Paper } from '@mui/material';
import SSHGraph from '../components/SSHGraph'

const Home = () => {
  return (
    <Container>
        <h1>SSH Dashboard</h1>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper>
              <SSHGraph title="Source IP Distribution" type="pie" />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper>
              <SSHGraph title="Events Over Time" type="line" />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <SSHGraph title="Protocol Usage" type="bar" />
            </Paper>
          </Grid>
        </Grid>
    </Container>
  )
}

export default Home



