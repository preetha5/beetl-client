import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function Help(){
    return(
        <Grid container>
            <h2>Frequently Asked Questions</h2>
                <Grid item xs={12}>
                    <p><a href="#q1">What is the lifecycle of an issue?</a></p>
                    <p><a href="#">What are the different roles and their privileges</a></p>
                    <p><a href="#">Is this a free software?</a></p>
                    <p><a href="#">I would like to customize Beetl software for my company.
                        Is that possible?</a></p>
                    <p><a href="#">How do I create user accounts?</a></p>
                </Grid>
                <Grid item xs={12}>
                <Paper>
                    <strong><p>What is the lifecycle of an issue?</p></strong>
                    <p>The lifecycle of an issue starts with 'open', which is default when
                    any issue is created. Then, when the developer who is assigned to the bug 
                    picks up the issue, they change the status to 'in-progress'. The developer
                    fixes the issue and changes state to 'fixed' and also assigns the bug to a tester.
                    The tester who finally tests this and marks the issue as 'closed' if the issue
                    is truly fixed, or re-opens it if issue is not fixed.</p>
                </Paper>
                </Grid>
                <Grid item xs={12}>
                    <strong><p>What are the different roles and their privileges?</p></strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure ut neque tenetur ducimus provident repudiandae vel aliquam quia deserunt liber
                    amet voluptates laboriosam quidem, illum voluptas sed, itaque 
                    quasi!</p>
                </Grid>
                <Grid item xs={12}>
                    <strong><p>Is this a free software?</p></strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure ut neque tenetur ducimus provident repudiandae vel aliquam quia deserunt liber
                    amet voluptates laboriosam quidem, illum voluptas sed, itaque 
                    quasi!</p>
                </Grid>
                <Grid item xs={12}>
                    <strong><p>I would like to customize Beetl software for my company.
                    Is that possible?</p></strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure ut neque tenetur ducimus provident repudiandae vel aliquam quia deserunt liber
                    amet voluptates laboriosam quidem, illum voluptas sed, itaque 
                    quasi!</p>
                </Grid>
                <Grid item xs={12}>
                    <strong><p>How do I create user accounts?</p></strong>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Iure ut neque tenetur ducimus provident repudiandae vel aliquam quia deserunt liber
                    amet voluptates laboriosam quidem, illum voluptas sed, itaque 
                    quasi!</p>
                </Grid>
        </Grid> //End container
    )
    }
