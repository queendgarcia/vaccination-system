import React, {useEffect, useRef, useState} from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import SingleForm from '../../Components/SingleForm'
import {  useDispatch } from 'react-redux'
import {  AddUserToStore, RemoveUserFromStore } from '../../../State/User/userAction'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginUser = () => {
  // let email = useRef("");
  // let password = useRef("");
  // let [passwordMsg, setPasswordMsg] = useState("");

  let dispatchAction = useDispatch();
  let navigate = useNavigate();
  
  const url = "http://localhost:9000/user";

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
    let userDetails = {
      email: inputValues[0].value,
      password : inputValues[1].value
    } 

    let element_email = document.getElementById("input-email");
    element_email.classList.remove("input-error");
    let element_pw = document.getElementById("input-password");
    element_pw.classList.remove("input-error");
    
    axios.post(`${url}/login`,
      userDetails 
    )
    .then((user)=>{
      let loggedInUser = user.data;
      dispatchAction(AddUserToStore(loggedInUser))

      for (const [key,value] of Object.entries(loggedInUser)) {
        localStorage.setItem(key,value)
      }
      // navigate("/home");
      window.location.assign(window.location.origin + "/home");
    })
    .catch((err)=>{
      let errorMessage = err.response.data.error
      if (errorMessage == "User does not exist") element_email.classList.add("input-error")
      else if (errorMessage == "Wrong Password") element_pw.classList.add("input-error")
    })
  }

  useEffect(() => {
    localStorage.clear()
    dispatchAction(RemoveUserFromStore());
  },[])

  return (
    <>
      <Container>
        <Row className="full-height center-element">
          <Col md={6}>
            <Card>
              <Card.Body className="p-5">
                <h2 className="text-center text2">LOGIN USER</h2>
                <SingleForm inputs={inputs} submitInputs={submitInputs} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LoginUser