import React,{useContext} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField/TextField';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {PageNameContext} from '../components/Store'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: 15
  },
  toolbar: theme.mixins.toolbar,

  submitButton:{
    width:'100%',
    display: 'flex',
    justifyContent: 'center',
  },
}));


function AddSolution(props) {
  const [,setPageName] = useContext(PageNameContext)
  setPageName('Add Solution')
  const [dialogToggle, setDialogToggle] = React.useState(false);

  const handleDialogToggle = () => {
    setDialogToggle(!dialogToggle);
  };

 
  const classes = useStyles();
  const {Incident,CI,Summary,
          Priority,Status,Assigned_To,
          Group,Open_Date,Impact,Incident_area,
          External_vendor_ticket,Vendor,Affected_end_user,
          _id }  = props.location.state.solutionRow;
            

  const insertData= async () =>{
    const url = 'http://localhost:9000/insertdata?incident=' + Incident +
    '&summary='+ Summary +
    '&group='+ Group +
    '&priority='+ Priority +
    '&status=Closed' +
    '&ci='+ CI +
    '&assignedto='+ Assigned_To +
    '&opendate='+ Open_Date +
    '&impact='+ Impact +
    '&incidentarea='+ Incident_area +
    '&external='+ External_vendor_ticket +
    '&vendor='+ Vendor +
    '&affected='+Affected_end_user +
    '&resCode=Processing' +
    '&_id='+ _id +
    '&resDetail='+document.getElementById('Solution').value;
   
        try {
          axios(url);
         
        } catch (error) {
        }
        finally{
          handleDialogToggle();

     
        }
         
     
         
        

  }


  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />
        <Grid container spacing={3} >
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              id="Incident Number"
              name="Incident Number"
              label ="Incident Number"
              value={ Incident}
              fullWidth
              readOnly
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              multiline
              id="Summary"
              name="Summary"
              label="Summary"
              value={ Summary}
              fullWidth
              readOnly
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"

              id="Priority"
              name="Priority"
              label="Priority"
              value={ Priority}
              fullWidth
              readOnly
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="outlined"
             id="CI" 
             name="CI" 
             label="CI"
             value={ CI} 
             fullWidth 
             readOnly/>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"

              id="Status"
              name="Status"
              label="Status"
              value={ Status}
              fullWidth
              readOnly
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="outlined"
             id="assigned_to" 
             name="assigned_to"
             label="Assigned To"
              value={ Assigned_To} 
              fullWidth 
              readOnly/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField variant="outlined"
              id="Group"
              name="Group"
              label="Group"
              value={ Group}
              fullWidth
              readOnly
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField 
              id="Solution"
              name="Solution"
              label="Solution"
              placeholder="Write Solution Here"
              multiline
              fullWidth
              autoFocus
            />
          </Grid>
          
          <Grid className={classes.submitButton}>        
        <Button variant="outlined" size="large" startIcon={<SaveIcon />} onClick={insertData}>
          Submit
        </Button>
        </Grid>

        </Grid>

        <Dialog
        open={dialogToggle}
        onClose={handleDialogToggle}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{Incident}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Solution for the incident has been added. Thank You !
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={()=>{
           
            props.history.push('/home/hub')
          }}  autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}



export default withRouter(AddSolution);