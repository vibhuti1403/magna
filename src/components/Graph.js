import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  SplineSeries
} from "@devexpress/dx-react-chart-material-ui";


const data = [];
const statusData = [];

function Graph() {
  const url = 'http://localhost:9000/graphdata';
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      data.length=0;
      statusData.length=0
      try {
        const result = await axios(url);
             
        console.log(result.data.hits[0]._id);
        for (let i = 0; i < result.data.hits.length; i++) {
            data.push({value: result.data.hits[i]._id,argument: result.data.hits[i].count});
          }

          for (let i = 0; i < result.data.statusCount.length; i++) {
            statusData.push({status: result.data.statusCount[i]._id,count: result.data.statusCount[i].count});
          }
        

      } catch (error) {

      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return (
         <Paper>
           {isLoading ? <h4>Loading...</h4> :
        <Chart data={data} >
          <ArgumentAxis />
          <ValueAxis />

            
          <SplineSeries color="orange" valueField="argument" argumentField="value" />
        </Chart> 
        }
        
           {isLoading ? <h4>Loading...</h4> :
        <Chart data={statusData} >
        <ArgumentAxis />
        <ValueAxis />

          
        <SplineSeries color="red" valueField="count" argumentField="status" />
        </Chart> 
           }
      </Paper> 
      
  );
}

export default Graph;