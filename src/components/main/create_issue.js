import React, {Component} from 'react';
import IssueForm from '../../utils/issue_form';
import Grid from '@material-ui/core/Grid';


export default function CreateIssue(props){
    const products = [{
        id:"printer",
        productName:"Printer",
        components:['Drum','Power supply','Paper Transport','Corona', 'Controller']
    },
    {
        id:"scanner",
        productName:"Scanner",
        components:['Mirror','Glass Plate','Filter','Scan Head', 'CCD Array']


    }];

    const users = ["Joe Dev", "Alisha Dev", "Kevin Test", "Maya Test"]

    return(
        <Grid container>
            <Grid item xs={12} sm={10}>
                <h1 className="textCenter" >Create Issue</h1>
            </Grid>
            <Grid item xs={12} sm={10}>
                <IssueForm products={products} users={users} buttonName="Add Issue"/>
            </Grid>
        </Grid>
    )
}