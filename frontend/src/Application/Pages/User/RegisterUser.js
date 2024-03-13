import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
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
  // {
  //   id: "address",
  //   label: "Address:",
  //   controlType: "text",
  //   isRequired: false,
  // },
  // {
  //   id: "profession",
  //   label: "Profession:",
  //   controlType: "text",
  //   isRequired: false,
  // },
  // {
  //   id: "sex",
  //   label: "Sex: ",
  //   controlType: "text",
  //   isRequired: false
  // },
  // {
  //   id: "diagnosis",
  //   label: "Diagnosis: ",
  //   controlType: "text",
  //   controlAs: "textarea",
  //   rows: 3,
  // }
  ]

  let submitInputs = (inputValues) => {
    console.log("from register User")
    inputValues.forEach( input => console.log(input.value))
  }

  return (
    <>
      <Container>
        <Row className="my-5 full-height center-element">
          <Col md={6}>
            <Card>
              <Card.Body className="p-5">
                <h2 className="text-center text2">REGISTER USER</h2>
                <SingleForm inputs={inputs} submitInputs={submitInputs} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default RegisterUser