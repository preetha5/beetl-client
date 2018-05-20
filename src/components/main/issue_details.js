import React from 'react';
import IssueForm from '../../utils/issue_form';
import Grid from '@material-ui/core/Grid';

import EditForm from './editForm';

export default function IssueDetails(props){
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
                <h1 className="textCenter" >Bug Details</h1>
            </Grid>
            <Grid item xs={12} sm={10}>
                <EditForm bugId={props.match.params.bugId} products={products} users={users} buttonName="Edit Issue"/>
            </Grid>
            {/*<Grid item xs={12} sm={10}>
                <EditForm products={products} users={users} 
                    bugId={props.match.params.bugId} buttonName="Edit Issue"/>
    </Grid>*/}
            
        </Grid>
    )
}