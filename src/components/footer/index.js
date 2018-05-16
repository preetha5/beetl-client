import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import './index.css';

export default function Footer(){

    return(
        <footer>
            <Grid container spacing={24}>
                <Grid item xs style={{textAlign: 'center'}}>
                    <p>Copyright &copy; 2018 | Beetl Inc </p>
                </Grid>
            </Grid>
        </footer>
    )
}