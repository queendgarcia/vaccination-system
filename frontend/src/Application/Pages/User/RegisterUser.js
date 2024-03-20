import React, {useEffect} from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import SingleForm from '../../Components/SingleForm'
import { useDispatch } from 'react-redux'
import { RemoveUserFromStore } from '../../../State/User/userAction'
import axios from "axios";

const RegisterUser = () => {
  let dispatchAction = useDispatch();
  const url = "http://localhost:9000/user";
  
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
      id: "sex",
      label: "Sex: ",
      controlType: "text",
      feedbackInvalid: "Choose either female or male",
      isRequired: true,
      controlAs: "select",
      selectOptions: ["Female", "Male"]
    },
    {
      id: "address",
      label: "Address:",
      controlType: "text",
      isRequired: false,
    }
  ]

  let submitInputs = (inputValues) => {
    console.log("from register User")
    inputValues.forEach( input => console.log(input.value))

    let userDetails = {
      email: inputValues[0].value,
      password : inputValues[1].value,
      name: inputValues[2].value,
      age: inputValues[3].value,
      contact: inputValues[4].value,
      sex: inputValues[5].value,
      addres: inputValues[6].value
    } 

    let element_email = document.getElementById("input-email");
    element_email.classList.remove("input-error");
    // let element_pw = document.getElementById("input-password");
    // element_pw.classList.remove("input-error");
    
    debugger;
    axios.post(`${url}/sign-up`,
      userDetails 
    )
    .then((user)=>{
      // let loggedInUser = user.data;
      alert("Successful Registration. Log in using your email and password.")
      // dispatchAction(AddUserToStore(loggedInUser))
      // for (const [key,value] of Object.entries(loggedInUser)) {
      //   localStorage.setItem(key,value)
      // }
      // navigate("/home");
      window.location.assign(window.location.origin + "/login");
    })
    .catch((err)=>{
      let errorMessage = err.response.data.error
      if (errorMessage == "Email is already existing") {
        element_email.classList.add("input-error")
        alert("Email is already existing")
      }
      else if (errorMessage == "Error while Signing Up") {
        alert("Error while Signing Up")
      }
    })
  }

  useEffect(() => {
    localStorage.clear()
    dispatchAction(RemoveUserFromStore());
  },[])

  return (
    <>
      <Container>
        <Row className="my-5 center-element">
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