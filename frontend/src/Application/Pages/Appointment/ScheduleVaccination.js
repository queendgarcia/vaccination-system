import React, {useEffect, useState, useRef} from 'react'
import {Form, Container, Row, Col, Card, Button} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from "moment";

import { fetchHospitals } from '../../../State/Hospital/hospitalAction';
import { fetchVaccines } from '../../../State/Vaccine/vaccineAction';
import { createSchedule } from '../../../State/Schedules/schedulesAction';

const ScheduleVaccination = () => {
  let [formSubmitted, setFormSubmitted] = useState(false);
  let [proceedPayment, setProceedPayment] = useState(false);
  let [dateToday, setDateToday] = useState("");
  let inputRefs = useRef([]);

  let dispatchAction = useDispatch();
  let navigate = useNavigate();

  let loggedInUser = useSelector((state) => state.UserReducer.User)
  let registeredHospitals = useSelector((state) => state.HospitalReducer)
  let registeredVaccines = useSelector((state) => state.VaccineReducer)

  useEffect(() => {
    dispatchAction(fetchHospitals())
    dispatchAction(fetchVaccines())
    setDateToday(moment(new Date()).format("YYYY-MM-DD"))
  },[])

  let handleSubmit = (evt) => {
    let singleForm = evt.currentTarget
    console.log("handle submit schedule vaccination")
    
    if (singleForm.checkValidity() == true) {
      setProceedPayment(true);
      document.getElementById("input-hospital").setAttribute("disabled", true)
      document.getElementById("input-vaccine").setAttribute("disabled", true)
      document.getElementById("input-date").setAttribute("disabled", true)
      document.getElementById("proceed-payment-btn").classList.add("d-none")
      document.getElementById("change-details-btn").classList.remove("d-none")
      evt.preventDefault();

    } else {
      console.log("failed validation")
      evt.preventDefault();
    }
    setFormSubmitted(true);
  }

  let changeDetailsHandler = () => {
    document.getElementById("input-hospital").removeAttribute("disabled")
    document.getElementById("input-vaccine").removeAttribute("disabled")
    document.getElementById("input-date").removeAttribute("disabled")
    document.getElementById("proceed-payment-btn").classList.remove("d-none")
    document.getElementById("change-details-btn").classList.add("d-none")
    setProceedPayment(false)
  }

  let payNowHandler = () => {
    console.log("from payNowHandler") 
    let inputValues = inputRefs.current
    inputValues.forEach( input => console.log(input.value))
    
    let selectedHospital = registeredHospitals.find( hospital => hospital.name == inputValues[0].value)
    let selectedVaccine = registeredVaccines.find( vaccine => vaccine.name == inputValues[1].value)
    let selectedDate = new Date(inputValues[2].value);
    console.log(selectedHospital);
    console.log(selectedVaccine);
    console.log(selectedDate);
    console.log(loggedInUser)
    let userDetails;
    if (loggedInUser._id == "") userDetails = {...localStorage}
    else userDetails = loggedInUser
    console.log(userDetails)

    let requestSched = {
      vaccinationSchedule: selectedDate,
      hospital: selectedHospital,
      vaccine: selectedVaccine,
      user: userDetails
    }

    dispatchAction(createSchedule(requestSched))
    navigate("/home")
  }

  return (
    registeredHospitals && registeredHospitals.length > 0 
    && registeredVaccines && registeredVaccines.length > 0 
    ?
    // <RegistrationForm colSize={[12,7]} pageInfo={pageInfo} inputs={inputs} submitInputs={submitInputs} />

    <Container className="full-height">
      <Row className="p-5 center-element">
        <Col md={12}>
          <h1 className="text1">SCHEDULE A VACCINATION</h1>
        </Col>
        <Col md={7}>
          <Card className="mt-3 p-5">
            <Card.Title>APPOINTMENT</Card.Title>
            <Form noValidate validated={formSubmitted} onSubmit={handleSubmit}>
              <Form.Group className="my-3" key="hospital" >
                <Form.Label>Hospital: </Form.Label>
                <Form.Control id="input-hospital" as="select" required ref={(el) => (inputRefs.current[0] = el)} >
                  { 
                    (registeredHospitals).map( (hospital) => 
                      <option key={hospital.name} value={hospital.name}>{hospital.name}</option>
                    )
                  }
                </Form.Control>
                <Form.Control.Feedback type="invalid">Choose your preferred Hospital</Form.Control.Feedback>
              </Form.Group>
              
              <Form.Group className="my-3" key="vaccine" >
                <Form.Label>Vaccine: </Form.Label>
                <Form.Control id="input-vaccine" as="select" required ref={(el) => (inputRefs.current[1] = el)} >
                  { 
                    (registeredVaccines).map( (vaccine) => 
                      <option key={vaccine.name} value={vaccine.name}>{vaccine.name}</option>
                    )
                  }
                </Form.Control>
                <Form.Control.Feedback type="invalid">Choose your preferred Vaccine</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Vaccination Date:</Form.Label>
                <Form.Control id="input-date" type="date" min={dateToday} required ref={(el) => (inputRefs.current[2] = el)} /> 
              </Form.Group>
            
              <Button id="proceed-payment-btn" className="custom-btn max-width mt-3" type="submit">Proceed to Payment</Button>
              <Button id="change-details-btn" className="d-none custom-btn max-width mt-3" 
                onClick={() => changeDetailsHandler()} >Change Details</Button>
            </Form>
          </Card>
        </Col>
      </Row>
      {
        proceedPayment ?
        <Row className="px-5 center-element">
          <Col md={7}>
            <Card className="mb-5 p-5">
              <Card.Title>DEMO PAYMENT</Card.Title>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Card Number:</Form.Label>
                  <Form.Control placeholder="0000 0000 0000 0000" disabled /> 
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Cardholder Name:</Form.Label>
                  <Form.Control placeholder={localStorage.getItem("name")} disabled /> 
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Expiry Date: </Form.Label>
                    <Form.Control placeholder="00/00" disabled/>
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="***" disabled/>
                  </Form.Group>
                </Row>
                <Button id="pay-now-btn" className="custom-btn max-width mt-3" 
                  onClick={() => payNowHandler()}
                >Pay Now</Button>

              </Form>
            </Card>
          </Col>
        </Row>
        :
        <></>
      }
    </Container>
    :
    <></>
  )
}

export default ScheduleVaccination