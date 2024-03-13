import React from 'react'
import {Container, Row, Col, Card} from "react-bootstrap";
import RegistrationForm from '../../Components/RegistrationForm';
import { registerVaccine } from '../../../State/Vaccine/vaccineAction';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegisterVaccine = () => {
  let dispatchAction = useDispatch();
  let navigate = useNavigate();

  let pageInfo = "REGISTER A VACCINE"

  let inputs = [  {
      id: "name",
      label: "Name:",
      controlType: "text",
      feedbackInvalid: "Please provide the vaccine name",
      isRequired: true,
    },
    {
      id: "type",
      label: "Type:",
      controlType: "text",
      feedbackInvalid: "Please provide the vaccine type",
      isRequired: true,
    },
    {
      id: "price",
      label: "Price:",
      controlType: "text",
      feedbackInvalid: "Please provide the vaccine price",
      isRequired: true,
    },
    {
      id: "requiredDosage",
      label: "Required Dosage:",
      controlType: "number",
      feedbackInvalid: "Please provide required vaccine dosage",
      isRequired: true,
    },
    {
      id: "origin",
      label: "Origin:",
      controlType: "text",
      feedbackInvalid: "",
      isRequired: false,
    },
    {
      id: "sideEffectse",
      label: "Side Effects:",
      controlType: "text",
      feedbackInvalid: "",
      isRequired: false,
      controlAs: "textarea",
    },
    {
      id: "otherInfo",
      label: "Other Information:",
      controlType: "text",
      feedbackInvalid: "",
      isRequired: false,
      controlAs: "textarea",
    }
  ]

  let submitInputs = (inputValues) => {
    console.log("from register vaccine")
    inputValues.forEach( input => console.log(input.value))

    let vaccineDetails = {
      name: inputValues[0].value,
      type: inputValues[1].value,
      price: inputValues[2].value,
      requiredDosage: inputValues[3].value,
      origin: inputValues[4].value,
      sideEffects: inputValues[5].value,
      otherInfo: inputValues[6].value
    }
    console.log("from register vaccine" + vaccineDetails)
    dispatchAction(registerVaccine(vaccineDetails));
    navigate("/vaccines")
  }

  return (
    <RegistrationForm pageInfo={pageInfo} inputs={inputs} submitInputs={submitInputs} />
  )
}

export default RegisterVaccine