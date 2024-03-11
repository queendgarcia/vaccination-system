import React from 'react'
import { Container } from 'react-bootstrap'
import SingleForm from '../../Components/SingleForm'

const RegisterUser = () => {
  let inputs = [  {
    id: "email",
    label: "Email Address:",
    controlType: "text",
    feedbackInvalid: "Please provide an email address",
    isRequired: true,
  },
  {
    id: "password",
    label: "Password:",
    controlType: "password",
    feedbackInvalid: "Please provide a password",
    isRequired: true,
  },
  {
    id: "name",
    label: "Name:",
    controlType: "text",
    feedbackInvalid: "Please provide your name",
    isRequired: true,
  },
  {
    id: "age",
    label: "Age:",
    controlType: "number",
    feedbackInvalid: "Please provide your age",
    isRequired: true,
  },
  {
    id: "contact",
    label: "Contact:",
    controlType: "text",
    feedbackInvalid: "Please provide your contact information",
    isRequired: true,
  },
  {
    id: "address",
    label: "Address:",
    controlType: "text",
    isRequired: false,
  },
  {
    id: "profession",
    label: "Profession:",
    controlType: "text",
    isRequired: false,
  },
  {
    id: "sex",
    label: "Sex: ",
    controlType: "text",
    isRequired: false
  },
  {
    id: "diagnosis",
    label: "Diagnosis: ",
    controlType: "text",
    controlAs: "textarea",
    rows: 3,
  }
  ]

  let submitInputs = (inputValues) => {
    console.log("from register User")
    inputValues.forEach( input => console.log(input.value))
  }

  return (
    <>
      <Container className="mt-5">
        <SingleForm inputs={inputs} submitInputs={submitInputs} />
      </Container>
    </>
  )
}

export default RegisterUser