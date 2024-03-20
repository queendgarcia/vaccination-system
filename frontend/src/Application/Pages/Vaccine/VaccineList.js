import React, { useEffect } from 'react'
import { Container, Table, Row, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchVaccines } from '../../../State/Vaccine/vaccineAction'
import { useNavigate } from 'react-router-dom'

const VaccineList = () => {
  let dispatchAction = useDispatch();
  let registeredVaccines = useSelector((state) => state.VaccineReducer)
  console.log("from vaccine list: " + JSON.stringify(registeredVaccines));

  // let userAdmin = useSelector((state) => state.UserReducer.User);
  let userAdmin = localStorage.getItem("isAdmin") == "true" ? true : false
  console.log("from hospital list: " + JSON.stringify(userAdmin))
  

  let navigate = useNavigate()

  let navigateToPage = () => {
    navigate("/register-vaccine")
  }

  useEffect(() => {
    dispatchAction(fetchVaccines())
  },[])

  return (
    <Container className="full-height">
      <Row className="pt-5">
        <Col className="spaced-elements">
          <h1 className="text1">LIST OF VACCINES</h1>
          {
            userAdmin ? <Button onClick={() => navigateToPage()} className="custom-btn">Register a Vaccine</Button>
            : <></>
          }
        </Col>
      </Row>
      <Row className="center-element">
        <Col className="my-5 card">
          { 
            registeredVaccines && registeredVaccines.length > 0 ?
          <Table>
            <thead>
              <tr>
                <th>Vaccine Name</th>
                <th>Type</th>
                <th>Required Dosage</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {
                registeredVaccines.map( vaccine => {
                  return (
                    <tr key={vaccine._id}>
                      <th>
                        <a className="color2" href="#">{vaccine.name}</a>
                      </th>
                      <td>{vaccine.type}</td>
                      <td>{vaccine.requiredDosage}</td>
                      <td>{vaccine.price }</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
          :
          <></>
          }
        </Col>
      </Row>
    </Container>
  )
}

export default VaccineList