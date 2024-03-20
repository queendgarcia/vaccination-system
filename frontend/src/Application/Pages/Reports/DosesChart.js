import React, { useEffect, useState} from 'react'
import {Container, Row, Col, Card} from "react-bootstrap"
import moment from "moment"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

const DosesChart = (props) => {

  let {vaccinationRecords} = props
  let [labels, setLabels] = useState([]);

  useEffect(() => {
    let dateToday = moment(new Date())

    let dateRange = []
    let dateDiff = 6; 

    for ( let i=0; i<=6;  i++) {
      let element = moment(dateToday).subtract(dateDiff, 'days').utc().format("MM/DD")
      console.log(element, typeof element)
      dateRange.push(element)
      dateDiff--;
    }
    setLabels(dateRange)

  }, [])

  let dosePerDay =  Array(7).fill(0)

  vaccinationRecords.forEach( record => {
    
    for ( const dose of record.dosesSupplied) {
      let doseDate = moment(dose.vaccinationSchedule).utc().format("MM/DD");
      console.log(doseDate)

      switch(true) {
        case labels[0] == doseDate : dosePerDay[0] +=1; break;
        case labels[1] == doseDate : dosePerDay[1] +=1; break;
        case labels[2] == doseDate : dosePerDay[2] +=1; break;
        case labels[3] == doseDate : dosePerDay[3] +=1; break;
        case labels[4] == doseDate : dosePerDay[4] +=1; break;
        case labels[5] == doseDate : dosePerDay[5] +=1; break;
      }
    }
  })

  console.log(dosePerDay, dosePerDay)

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    },
  };



  let data = {
    labels,
    datasets: [
      {
        label: 'Number of Doses in a Day',
        data: dosePerDay,
        backgroundColor: "#9ad1f5"
      },
    ],
  };
  

  return (
    <Bar options={options} data={data} />
  )
}

export default DosesChart