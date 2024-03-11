import React, {useRef} from 'react'
import { Container } from 'react-bootstrap'
import SingleForm from '../../Components/SingleForm'

const LoginUser = () => {
  let email = useRef("");
  let password = useRef("");



  let inputs = [  {
    id:"email",
    label: "Email Address:",
    controlType: "email",
    feedbackInvalid: "Please provide an email address",
    isRequired: true
  },
  {
    id:"password",
    label: "Password:",
    controlType: "password",
    feedbackInvalid: "Please provide a password",
    isRequired: true
  }
]

let submitInputs = (inputValues) => {
  console.log("from loginuser")
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

export default LoginUser