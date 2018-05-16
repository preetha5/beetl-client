import React, {Component} from 'react';
// Material UI
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function HowItWorks(){
    return(
        <section>
            <Grid container>
                <Grid item xs="12">
                    <h3>How it Works</h3>
                </Grid>
                <Grid item xs="12" sm="4" style={{textAlign: 'center'}}>
                    <Paper class="step">
                        <p>Add products and users</p>
                        <img src="http://via.placeholder.com/150x150" />
                    </Paper>
                </Grid>
                <Grid item xs="12" sm="4" style={{textAlign: 'center'}}>
                    <Paper class="step">
                        <p>Create issues and assign to your team</p>
                        <img src="http://via.placeholder.com/150x150" />
                    </Paper>
                </Grid>
                <Grid item xs="12" sm="4" style={{textAlign: 'center'}}>
                    <Paper class="step">
                        <p>Update and track issues during all their stages from open to built.</p>
                        <img src="http://via.placeholder.com/150x150" />
                    </Paper>
                </Grid>
            </Grid>
        </section>
    )
}