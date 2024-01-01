import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import './ThisWeek.css';

function ThisWeek() {
    return (
        <Grid container justify="center">
            <Grid item xs={12} sm={8} md={6}>
                <Paper style={{ padding: '20px', marginTop: '20px' }}>
                    <Typography variant="h5" component="h2">
                        This Week in Pregnancy
                    </Typography>
                    <Typography variant="body1" component="p">
                        Week 20
                    </Typography>
                    <Typography variant="body1" component="p">
                        Your baby is as big as a banana. They're swallowing more these days, which is good practice for their digestive system. They're also producing meconium, a black, sticky by-product of digestion.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}

export default ThisWeek;