import React, {useRef} from 'react'
import { Container } from 'react-bootstrap'
import SingleForm from '../../Components/SingleForm'
import { useSelector } from 'react-redux'

const LoginUser = () => {
  let email = useRef("");
  let password = useRef("");

  let loggedInUser = useSelector((state) => state.UserReducer.User)
  console.log("loggedInUser: " + JSON.stringify(loggedInUser))

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
  console.log("loggedInUser: " + JSON.stringify(loggedInUser))

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