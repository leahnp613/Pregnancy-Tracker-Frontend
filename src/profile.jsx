import React from 'react';
import { Paper, Typography, Grid, Avatar } from '@material-ui/core';

function PregnancyProfile() {
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={8} md={6}>
        <Paper style={{ padding: '20px', marginTop: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ width: '100%', height: 'auto' }} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography variant="h5" component="h2">
                Jane Doe
              </Typography>
              <Typography variant="body1" component="p">
                Week 20
              </Typography>
              <Typography variant="body1" component="p">
                Due Date: 20th Dec, 2022
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default PregnancyProfile;