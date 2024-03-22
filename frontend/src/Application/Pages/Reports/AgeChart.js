import React from 'react'
import {Container, Row, Col, Card} from "react-bootstrap"
import {Pie} from 'react-chartjs-2'
import { ArcElement } from "chart.js";
import Chart from "chart.js/auto";

const AgeChart = (props) => {
  // console.log("from pieChart", props.vaccinationRecords)

  let {vaccinationRecords} = props
  
  let labels = ['0-19 years old', '20-29 years old', '30-39 years old', '40-49 years old', '50-59 years old', '60 years old and above']
  let vaccinationByAge =  Array(6).fill(0)

  vaccinationRecords.forEach( record => {
    
    let userAge = (record.dosesSupplied[0]).user.age
    switch(true) {
      case userAge<20 : vaccinationByAge[0] += 1;  break;
      case userAge>19 && userAge<30 : vaccinationByAge[1] += 1;  break;
      case userAge>29 && userAge<40 : vaccinationByAge[2] += 1;  break;
      case userAge>39 && userAge<50 : vaccinationByAge[3] += 1;  break;
      case userAge>49 && userAge<60 : vaccinationByAge[4] += 1;  break;
      case userAge>59 : vaccinationByAge[5] += 1;  break;
      default : vaccinationByAge; break;
    }
    // console.log("userAge", userAge)
  })

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom"
      },
    },
  };

  Chart.register(ArcElement);
  
  let data = {
    labels: labels,
    datasets: [
      {
        label: 'Vaccinated Persons in this Range',
        data: vaccinationByAge,
        backgroundColor: [
          "#ffb1c2",
          "#9ad1f5",
          "#ff6384",
          "#35a2eb",
          "#1b5176",
          "#993b4f",
        ],
      }
    ]
    }

  return (
    <Pie className="p-2" data={data} options={options} />
  )
}

export default AgeChart