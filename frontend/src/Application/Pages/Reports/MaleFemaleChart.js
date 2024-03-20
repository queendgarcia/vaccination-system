import React, { useEffect } from 'react'
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

const MaleFemaleChart = (props) => {
  let {vaccinationRecords} = props

  let recordPerMonthForFemale =  Array(12).fill(0)
  let recordPerMonthForMale =  Array(12).fill(0)

  vaccinationRecords.forEach( record => {
    
    for ( const dose of record.dosesSupplied) {
      let monthOfDosage = moment(dose.vaccinationSchedule).utc().format("M")-1;
      let person = ((dose.user).sex).toLowerCase();
       
      if (person == "female") recordPerMonthForFemale[monthOfDosage] += 1
      else recordPerMonthForMale[monthOfDosage] += 1

    }
  
  })


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

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Deccember'];

  let data = {
    labels,
    datasets: [
      {
        label: 'Female',
        data: recordPerMonthForFemale,
        backgroundColor: '#ffb1c2',
      },
      {
        label: 'Male',
        data: recordPerMonthForMale,
        backgroundColor: '#9ad1f5',
      },
    ],
  };
  

  return (
    <Bar options={options} data={data} />
  )
}

export default MaleFemaleChart