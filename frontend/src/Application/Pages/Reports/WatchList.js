import React, {useEffect} from 'react'
import Slider from "react-slick";
import { Container, Card } from 'react-bootstrap';
import moment from "moment";

const WatchList = (props) => {

  let {vaccinationRecords} =  props

  let doseAdministeredToday = 0
  let totalNumberFemale = 0
  let totalNumberMale = 0
  let femalePercentage = 0
  let malePercentage = 0

  vaccinationRecords.forEach( record => {
    
    for ( const dose of record.dosesSupplied) {
      let doseDate = moment(dose.vaccinationSchedule).utc().format("MM/DD/YYYY");
      let dateToday = moment(new Date()).format("MM/DD/YYYY")
      console.log(dateToday, doseDate)

      if (doseDate == dateToday) {
        doseAdministeredToday += 1; 
      }
      
    }
    console.log("doseAdministeredToday", doseAdministeredToday)
    
    let person = ((record.dosesSupplied[0].user).sex).toLowerCase();
    if (person == "female") totalNumberFemale += 1
    else totalNumberMale += 1
    console.log("totalNumberFemale", totalNumberFemale)
    console.log("totalNumberMale", totalNumberMale)

  })

  femalePercentage = (totalNumberFemale/(totalNumberFemale + totalNumberMale)*100) + "%"
  malePercentage = (totalNumberMale/(totalNumberFemale + totalNumberMale)*100) + "%"

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow:2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Container>
      <Slider {...settings}>
        <Card className="card-slider"> 
          <Card.Body className="text-center text3 card-body-slider">{doseAdministeredToday}</Card.Body>
          <Card.Title className="text2">NUMBER OF DOSES ADMINISTERED TODAY</Card.Title>
        </Card>
        <Card className="card-slider"> 
          <Card.Title className="text2">PERCENTAGE OF VACCINATED WHO ARE FEMALE</Card.Title>
          <Card.Body className="text-center text3 card-body-slider">{femalePercentage}</Card.Body>
        </Card>
        <Card className="card-slider"> 
          <Card.Body className="text-center text3 card-body-slider">{totalNumberFemale + totalNumberMale}</Card.Body>
          <Card.Title className="text2">TOTAL NUMBER OF VACCINATED</Card.Title>
        </Card>    
        <Card className="card-slider"> 
          <Card.Title className="text2">PERCENTAGE OF VACCINATED WHO ARE MALE</Card.Title>
          <Card.Body className="text-center text3 card-body-slider">{malePercentage}</Card.Body>
        </Card>    
      </Slider>
    </Container>
  );
}

export default WatchList