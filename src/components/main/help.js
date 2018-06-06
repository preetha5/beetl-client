import React from 'react';
import ContactForm from '../landing-page/contact-form';


// Material UI imports 
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import deepPurple from '@material-ui/core/colors/deepPurple';
import blueGrey from '@material-ui/core/colors/blueGrey';
import amber from '@material-ui/core/colors/amber';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    card: {
      spacing: '16',
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    question: {
      fontFamily: 'Libre Franklin, sans-serif',
      fontWeight: 400,
      fontSize: 12,
      letterSpacing: '0',
      color: blueGrey[700]
    },
    headline: {
      fontFamily: 'Libre Franklin, sans-serif',
      fontWeight: 800,
      letterSpacing: '0',
      color: blueGrey[300],
      paddingBottom: '5px',
      textAlign: 'center',
      paddingTop: 20
    },
    tiny_headline: {
      fontFamily: 'Libre Franklin, sans-serif',
      fontWeight: 200,
      letterSpacing: '0',
      color: blueGrey[300],
      fontSize: 'x-large',
      paddingBottom: '5px',
    },
    med_headline: {
      fontFamily: 'Libre Franklin, sans-serif',
      fontWeight: 400,
      letterSpacing: '0',
      color: blueGrey[500],
      paddingBottom: '5px',
      paddingTop: 20
    },
    accentDark: {
      fontWeight: 400,
      color: blueGrey[700],
    },
    accent: {
      fontWeight: 800,
      color: '#0057ff'
    },
    mainForm:{
        backgroundColor: amber[500],
        marginTop: '1.5%',
        // marginBottom: '180px',
        paddingBottom: '50px !important',
        padding:10,
      }
})


class Help extends React.Component{
    state = {
        expanded: null,
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
      };
    
      render(){
        const { classes } = this.props;
        const { expanded } = this.state;

        return(
            <Grid container justify="center">
                
                <Grid item xs={11}>
                    <h1 className={classes.headline}>Beetl Help</h1>
                    <p> Looking for answers? Check out the below FAQ. If you
                    don't find what you are looking for, send us a message using the
                    contact form below</p>
                </Grid>
                <Grid item xs={11}>
                    <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <h4 className={classes.question}>What is the lifecycle of an issue?</h4>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <p>The lifecycle of an issue starts with 'open', which is default when
                            any issue is created. Then, when the developer who is assigned to the bug 
                            picks up the issue, they change the status to 'in-progress'. The developer
                            fixes the issue and changes state to 'fixed' and also assigns the bug to a tester.
                            The tester who finally tests this and marks the issue as 'closed' if the issue
                            is truly fixed, or re-opens it if issue is not fixed.</p>
                        </ExpansionPanelDetails>
                    </ExpansionPanel >
                </Grid>
                <Grid item xs={11}>
                    <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <h4 className={classes.question}>What are the different user roles and their privileges</h4>
                        </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <p>The lifecycle of an issue starts with 'open', which is default when
                        any issue is created. Then, when the developer who is assigned to the bug 
                        picks up the issue, they change the status to 'in-progress'. The developer
                        fixes the issue and changes state to 'fixed' and also assigns the bug to a tester.
                        The tester who finally tests this and marks the issue as 'closed' if the issue
                        is truly fixed, or re-opens it if issue is not fixed.</p>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                </Grid>
                <Grid item xs={11}>
                    <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <h4 className={classes.question}>Is this a free software?</h4>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <p>The lifecycle of an issue starts with 'open', which is default when
                                any issue is created. Then, when the developer who is assigned to the bug 
                                picks up the issue, they change the status to 'in-progress'. The developer
                                fixes the issue and changes state to 'fixed' and also assigns the bug to a tester.
                                The tester who finally tests this and marks the issue as 'closed' if the issue
                                is truly fixed, or re-opens it if issue is not fixed.</p>
                        </ExpansionPanelDetails>
                </ExpansionPanel>
                </Grid>
                <Grid item xs={11}>
                    <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <h4 className={classes.question}>Is there an automated email notification system?</h4>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <p>The lifecycle of an issue starts with 'open', which is default when
                            any issue is created. Then, when the developer who is assigned to the bug 
                            picks up the issue, they change the status to 'in-progress'. The developer
                            fixes the issue and changes state to 'fixed' and also assigns the bug to a tester.
                            The tester who finally tests this and marks the issue as 'closed' if the issue
                            is truly fixed, or re-opens it if issue is not fixed.</p>
                        </ExpansionPanelDetails>
                </ExpansionPanel>
                </Grid>
                <Grid item xs={11}>
                    <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <h4 className={classes.question}>How do I create user accounts?</h4>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <p>To create a user account, you need to have an admin role.
                        The default registered user for BEETL is an admin by default.
                        The admin user will have links on their dashboard to create and manage other
                        team members by email.</p>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                </Grid>
                <Grid item xs={11}>
                    <ExpansionPanel expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <h4 className={classes.question}>I would like to 
                            customize Beetl software for my company. Is that possible?</h4>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <p>Yes. If you become a premium user, our team
                            can work with your company to create customized roles, bug states etc.
                            Contact us to know more about the process.</p>
                        </ExpansionPanelDetails>
                </ExpansionPanel>
                </Grid>
                <Grid item xs={11} className={classes.mainForm} style={{textAlign: 'center'}}>
                    <h3 className={classes.med_headline}><span className={classes.accentDark}>Send us a message</span></h3>
                    <ContactForm />
                </Grid>
            </Grid>
        )
    }
}//End Help Class

export default withStyles(styles)(Help);

