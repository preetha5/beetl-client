import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import './index.css';

export default function Footer(){

    return(
        
            <Grid container className="footer">
                <Grid item xs={12} style={{textAlign: 'center'}}>
                    <footer>
                        <p>Copyright &copy; 2018 | Beetl Inc </p>
                    </footer>
                </Grid>
            </Grid>
       
    )
}