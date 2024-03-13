import React, { useEffect } from 'react'
import { Container, Table, Row, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHospitals } from '../../../State/Hospital/hospitalAction';
import { useNavigate } from 'react-router-dom';

const HospitalList = () => {
  let dispatchAction = useDispatch();
  let registeredHospitals = useSelector((state) => state.HospitalReducer)

  console.log("from hospital list: " + JSON.stringify(registeredHospitals));

  let navigate = useNavigate()

  let navigateToPage = () => {
    navigate("/register-hospital")
  }

  useEffect(() => {
    dispatchAction(fetchHospitals())
  },[])

  return (
    <Container className="full-height">
      <Row className="pt-5">
        <Col className="spaced-elements">
          <h1 className="text1">LIST OF HOSPITALS</h1>
          <Button onClick={() => navigateToPage()} className="custom-btn">Register a Hospital</Button>
        </Col>
      </Row>
      <Row className="center-element">
        <Col className="my-5 card">
          { 
          registeredHospitals && registeredHospitals.length > 0 ?
          <Table>
            <thead>
              <tr>
                <th>Hospital Name</th>
                <th>Type</th>
                <th>Address</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              {
                registeredHospitals.map( hospital => {
                  return (
                    <tr key={hospital._id}>
                      <th>
                        <a className="color2" href="#">{hospital.name}</a>
                      </th>
                      <td>{hospital.type}</td>
                      <td>{hospital.address}</td>
                      <td>{hospital.charges }</td>
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

export default HospitalList