import React, { useState, useEffect, useRef , useContext } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Table, DragDropProvider, TableHeaderRow, TableRowDetail, TableColumnReordering, TableColumnVisibility,
  Toolbar, ColumnChooser, SearchPanel, PagingPanel, TableFilterRow,
} from '@devexpress/dx-react-grid-material-ui';
import {
  RowDetailState, SearchState, PagingState, IntegratedPaging, IntegratedFiltering, FilteringState,
} from '@devexpress/dx-react-grid';
import IconButton from '@material-ui/core/IconButton';
import OpenInNew from '@material-ui/icons/OpenInNew';
import { withRouter } from 'react-router-dom';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Select from '@material-ui/core/Select';
import { Template, TemplatePlaceholder } from '@devexpress/dx-react-core';
import FormControl from '@material-ui/core/FormControl/FormControl';
import {PageNameContext} from '../components/Store'


const useStyles = makeStyles(theme => ({
  table: {
    background: 'black',
  },
  column: {
    flexBasis: '33.33%',
  },
  heading: {
    color: '#dcdcdc',
    fontSize: 20,
  },
  toolbar: theme.mixins.toolbar,
  iconStyle: {

    fontSize: 30,
    cursor: 'pointer',
    margin: 5,
    color: theme.palette.text.icon,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));




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
      </tr>
    </table>

  </React.Fragment>
);


function Hubpage(props) {

  const [,setPageName] = useContext(PageNameContext)
  setPageName('Hub')
  const classes = useStyles();
  const [data, setData] = useState({ hits: [], ci: [] });
  const [isLoading, setIsLoading] = useState(false);
  const url = 'http://localhost:9000/getdata';



  const [region, setRegion] = useState('');
  const [Countries, setCountries] = useState([])

  let countries;
  const regionSelected = event => {
    setRegion(event.target.value);
    setIncidentRow(updateData(event.target.value));

    if (event.target.options.selectedIndex   > 0) {

      countries = data.ci[--event.target.options.selectedIndex]['Country'].map((item,index) =>
      <option key={index} value={item}>{item}</option>);
      setCountries(countries)

    }
    else {
      setCountries([])
    }


  }

  const [country, setCountry] = useState('');
  const countrySelected = event => {
    setCountry(event.target.value);
  }

  const inputLabel = useRef(null);
  const [incidentRow, setIncidentRow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
        setIncidentRow(result.data.hits);

      } catch (error) {
      }
      setIsLoading(false);
    };
    // setLabelWidth(inputLabel.current.offsetWidth);
    fetchData();
  }, [url]);

  const [columns] = useState([
    { name: 'Incident', title: 'Incident' },
    { name: 'Summary', title: 'Summary' },
    { name: 'Status', title: 'Status' },
    { name: 'Priority', title: 'Priority' },
    { name: 'CI', title: 'CI' },
    { name: 'Assigned_To', title: 'Assigned To' },
    { name: 'Group', title: 'Group' },
    { name: 'View Solutions', title: 'View Solutions' }

  ]);

  function updateData(regionValue) {
    let updatedIncidents = [];

    if (regionValue == null)
      return data.hits;

    for (var i = 0; i < data.hits.length; i++) {
      var re = new RegExp("^" + regionValue, "i");
      if (re.test(data.hits[i].CI))
        updatedIncidents.push(data.hits[i]);
    }

    return updatedIncidents;
  }
  const toggleButton = (props) => {
    return (
      <IconButton onClick={props.onToggle} buttonRef={props.buttonRef} className={classes.iconStyle}>
        <VisibilityOffIcon />
      </IconButton>
    )
  }

  const ActionCell = ({ row, column, ...restProps }) =>
    column.name === "View Solutions" ? (
      <Table.Cell>

        <IconButton onClick={() => { props.history.push("/home/solutions", { solutionRow: row }) }}>
          <OpenInNew className={classes.iconStyle} />
        </IconButton>
      </Table.Cell>
    ) : (
        <Table.Cell row={row} column={column} {...restProps}
        />
      );


  const [defaultHiddenColumnNames] = useState(['Assigned_To', 'Group']);
  const [pageSizes] = useState([5, 10, 15]);
  const [filteringStateColumnExtensions] = useState([
    { columnName: 'View Solutions', filteringEnabled: false },
  ]);

  const [tableColumnVisibilityColumnExtensions] = useState([
    { columnName: 'View Solutions', togglingEnabled: false },
  ]);



  let Regions;
  if (!isLoading) {
    Regions = data.ci.map((item,index) =>
      <option key={index} value={item.CI_Name}>{item.Region}</option>
    );
  }

 

  return (
    <div className={classes.root}>
      <div className={classes.toolbar} />

      <Grid rows={incidentRow} columns={columns} >

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
          cellComponent={ActionCell}
        />
        <TableColumnReordering
          defaultOrder={['Incident', 'Summary', 'Status', 'Priority', 'CI', 'Assigned_To', 'Group']}
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

        <Template name="toolbarContent">
          <TemplatePlaceholder />

          <FormControl className={classes.formControl} ref={inputLabel}>
            <Select
              native
              value={region}
              onChange={regionSelected}
            >
              <option value="">Region</option>
              {Regions}
            </Select>


          </FormControl>


          <FormControl className={classes.formControl} ref={inputLabel}>
            <Select
              native
              value={country}
              onChange={countrySelected}
            >
              <option value="">Country</option>
              {Countries}
            </Select>

          </FormControl>

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
    </div>

  );

}
export default withRouter(Hubpage)