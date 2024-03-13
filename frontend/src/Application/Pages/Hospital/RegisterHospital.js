import React from 'react'
import {Container, Row, Col, Card} from "react-bootstrap";
import RegistrationForm from '../../Components/RegistrationForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerHospital } from '../../../State/Hospital/hospitalAction';

const RegisterHospital = () => {
  let dispatchAction = useDispatch();
  let navigate = useNavigate();


  let pageInfo = "REGISTER A HOSPITAL"

  let inputs = [  {
      id: "name",
      label: "Name:",
      controlType: "text",
      feedbackInvalid: "Please provide the hospital name",
      isRequired: true,
    },
    {
      id: "address",
      label: "Address:",
      controlType: "text",
      feedbackInvalid: "Please provide the address",
      isRequired: true,
    },
    {
      id: "type",
      label: "Type:",
      controlType: "text",
      feedbackInvalid: "Choose either Government or Private",
      isRequired: true,
      controlAs: "select",
      selectOptions: ["Private", "Government"]
    },
    {
      id: "charges",
      label: "Charges:",
      controlType: "text",
      feedbackInvalid: "Please provide hospital charges",
      isRequired: true,
    }
  ]

  let submitInputs = (inputValues) => {
    
    inputValues.forEach( input => console.log(input.value))
    let hospitalDetails = {
      name: inputValues[0].value,
      address: inputValues[1].value,
      type: inputValues[2].value,
      charges: inputValues[3].value
    }
    console.log("from register vaccine" + hospitalDetails)
    dispatchAction(registerHospital(hospitalDetails));
    navigate("/hospitals")
  }

  return (
    <RegistrationForm pageInfo={pageInfo} inputs={inputs} submitInputs={submitInputs} />
  )
}

export default RegisterHospital