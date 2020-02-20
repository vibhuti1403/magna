import React, { useState, useEffect ,useContext} from 'react';
import axios from 'axios';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import {
  Grid, Table, DragDropProvider, TableHeaderRow, TableRowDetail, TableColumnReordering, TableColumnVisibility,
  Toolbar, ColumnChooser, SearchPanel, PagingPanel, TableFilterRow,
} from '@devexpress/dx-react-grid-material-ui';
import {
  RowDetailState, SearchState, PagingState, IntegratedPaging, IntegratedFiltering, FilteringState,
} from '@devexpress/dx-react-grid';
import IconButton from '@material-ui/core/IconButton/IconButton';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import {
  Template,
  TemplatePlaceholder,
} from '@devexpress/dx-react-core';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';
import { withRouter } from 'react-router-dom';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {PageNameContext} from '../components/Store';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  toolbar: theme.mixins.toolbar,
  expansionStyle: {
    backgroundColor: theme.palette.secondary.contrastText,
  },
  iconStyle: {

    fontSize: 30,
    cursor: 'pointer',
    margin: 5,
    color: theme.palette.text.icon,
  },
  submitButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}));

function Solutions(props) {
  const [,setPageName] = useContext(PageNameContext)
  setPageName('Solutions')
  const [dialogToggle, setDialogToggle] = React.useState(false);

  const handleDiaglogToggle = () => {
    setDialogToggle(!dialogToggle);
  };

  
  const row = props.location.state.solutionRow;
  const { Incident, CI, Open_Date, Summary, Priority, Status, Assigned_To, _id,Group,External_vendor_ticket,Vendor, Impact, Incident_area, Affected_end_user} = props.location.state.solutionRow
  const classes = useStyles();
  const [data, setData] = useState({ hits: [] });


  const insertData= async (resDetail) =>{
    console.log(resDetail);
    const inserturl = 'http://localhost:9000/insertdata?incident=' + Incident +
    '&summary='+ Summary +
    '&group='+ Group +
    '&priority='+ Priority +
    '&status=Closed'+
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
    '&resDetail='+resDetail;
   
        try {
          axios(inserturl);
         
        } catch (error) {
        }
        finally{
          handleDiaglogToggle();
     
        }
      }
        



      const RowDetail = ({ row }) => (

        <React.Fragment>
      
          <table>
            <tr>
              <td>  <p><strong>Incident :</strong> {row.Incident}</p>   </td>
              <td>  <p><strong>Open Date :</strong>{row.Open_Date}</p>  </td>
            </tr>
      
            <tr>
              <td>  <p><strong>Summary :</strong> {row.Summary}</p>   </td>
              <td>  <p><strong>Group :</strong>{row.Group}</p>  </td>
            </tr>
      
            <tr>
              <td>  <p><strong>Priority :</strong>{row.Priority}</p>   </td>
              <td>  <p><strong>Impact :</strong>{row.Impact}</p>  </td>
            </tr>
      
            <tr>
              <td>  <p><strong>Status :</strong> {row.Status}</p>   </td>
              <td>  <p><strong>CI :</strong>{row.CI}</p>  </td>
            </tr>
            <tr>
              <td>  <p><strong>Assigned To :</strong>{row.Assigned_To}</p>   </td>
              <td>  <p><strong>Incident Area :</strong>{row.Incident_area}</p> </td>
            </tr>
      
            <tr>
              <td>  <p><strong>Affected End User :</strong>{row.Affected_end_user}</p>   </td>
              <td>  <p><strong>Resolution Detail :</strong>{row.Resolution_Detail}</p>   </td>
            </tr>
      
          </table>
      
          <div style={{ width:'100%',
          display: 'flex',
          justifyContent: 'center',}}>
            <Button variant="contained" color="primary" size="large" onClick={()=>{
              insertData(row.Resolution_Detail)}}>
              Use Solution
              </Button>
          </div>
        </React.Fragment>
      );
      



  const url = 'http://localhost:9000/searchdata?CI=' + CI + ' Group=' + Group;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
      }
    };
    fetchData();
  }, [url]);

  const [columns] = useState([
    { name: 'Incident', title: 'Incident' },
    { name: 'Summary', title: 'Summary' },
    { name: 'Status', title: 'Status' },
    { name: 'Group', title: 'Group' },
    { name: 'Priority', title: 'Priority' },
    { name: 'CI', title: 'CI' },
    { name: 'Assigned_To', title: 'Assigned To' },

  ]);

  const toggleButton = (props) => {
    return (
      <IconButton onClick={props.onToggle} buttonRef={props.buttonRef} className={classes.iconStyle}>
        <VisibilityOffIcon />
      </IconButton>
    )
  }



  const [defaultHiddenColumnNames] = useState([]);
  const [pageSizes] = useState([5, 10, 15]);
  const [filteringStateColumnExtensions] = useState([]);

  const [tableColumnVisibilityColumnExtensions] = useState([]);

  const rows = data.hits;


  return (

    <div className={classes.root}>
      <div className={classes.toolbar} />

      <ExpansionPanel className={classes.expansionStyle} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          expanded="true"
        >
          <Typography className={classes.heading}>{Incident} - {Summary}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>

          <table>
            <tbody>
              <tr>
                <td>  <p><strong>Incident :</strong> {Incident}</p>   </td>
                <td></td>
                <td>  <p><strong>Open Date :</strong>{Open_Date}</p>  </td>
              </tr>

              <tr>
                <td>  <p><strong>Summary :</strong> {Summary}</p>   </td>
                <td></td>
                <td>  <p><strong>Group :</strong>{Group}</p>  </td>
              </tr>

              <tr>
                <td>  <p><strong>Priority :</strong>{Priority}</p>   </td>
                <td></td>
                <td>  <p><strong>Impact :</strong>{Impact}</p>  </td>
              </tr>

              <tr>
                <td>  <p><strong>Status :</strong> {Status}</p>   </td>
                <td></td>
                <td>  <p><strong>CI :</strong>{CI}</p>  </td>
              </tr>
              <tr>
                <td>  <p><strong>Assigned To :</strong>{Assigned_To}</p>   </td>
                <td></td>
                <td>  <p><strong>Incident Area :</strong>{Incident_area}</p> </td>
              </tr>

              <tr>
                <td>  <p><strong>Affected End User :</strong>{Affected_end_user}</p>   </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Grid rows={rows} columns={columns}>
        <PagingState
          defaultCurrentPage={0}
          defaultPageSize={5}

        />
        <SearchState />
        <FilteringState defaultFilters={[]}
          columnExtensions={filteringStateColumnExtensions}
        />

        <IntegratedFiltering />

        <IntegratedPaging />

        <DragDropProvider />

        <RowDetailState />
        <Table
         />
        <TableColumnReordering
          defaultOrder={['Incident', 'Summary', 'Status', 'Group', 'Priority', 'CI', 'Assigned_To']}
        />
        <TableHeaderRow />
        <TableColumnVisibility
          defaultHiddenColumnNames={defaultHiddenColumnNames}
          columnExtensions={tableColumnVisibilityColumnExtensions}
        />
        <TableRowDetail
          contentComponent={RowDetail}

        />
        <Toolbar />
        <Template
          name="toolbarContent"
        >
          <TemplatePlaceholder />


          <Tooltip title="Add New Solution" arrow>
            <IconButton align='right' className={classes.iconStyle} onClick={() => { props.history.push('/home/addsolution', { solutionRow: row }) }} >
              <AddToPhotosIcon />
            </IconButton>
          </Tooltip>
        </Template>
        <ColumnChooser
          toggleButtonComponent={toggleButton}
        />
        <SearchPanel />
        <PagingPanel
          pageSizes={pageSizes}
        />
        <TableFilterRow />


      </Grid>

      <Dialog
        open={dialogToggle}
        onClose={handleDiaglogToggle}
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

export default withRouter(Solutions);
