import React, {useEffect} from 'react'
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { AddUserToStore } from '../../../State/User/userAction'
import { useDispatch, useSelector } from 'react-redux'
import AgeChart from '../Reports/AgeChart'
import MaleFemaleChart from '../Reports/MaleFemaleChart'
import { fetchVaccinationRecords } from '../../../State/VaccinationRecords/vaccinationRecordsAction'
import WatchList from '../Reports/WatchList'

const AdminSection = () => {

  let navigate = useNavigate();
  let dispatchAction = useDispatch();

  let vaccinationRecords = useSelector((state) => state.VaccinationRecordsReducer)
  console.log("from admin section: " + JSON.stringify(vaccinationRecords));

  let navigateToPage = (page) => {
    navigate(`/${page}`)
  }

  useEffect(() => {
    let items = { ...localStorage };
    console.log("from user-admin section before isAdmin change", items);
    items = {...items, isAdmin: items.isAdmin == "true" ? true : false }
    console.log("from user-admin section", items);
    dispatchAction(AddUserToStore(items));
    
    localStorage.removeItem("contact")
    localStorage.removeItem("address")
    localStorage.removeItem("profession")

    dispatchAction(fetchVaccinationRecords())

  },[])

  return (
    <>
      <Container className="full-height">
        <Row>
          <Col className='pt-3 display-right'>
            <Button onClick={()=> window.location.assign(window.location.origin + "/login")} className="custom-btn">Logout</Button>
          </Col>
        </Row>
        <Row className="py-3">
          <Col><h2 className="text1">ADMIN SECTION</h2></Col>
        </Row>
        <Row className="center-element pb-5">
          <Col md={12}>
            <Row>
              <Col className="my-3" md={4}>
                <Card onClick={() => navigateToPage("vaccines")}>
                  <Card.Body><h2 className="text2">LIST OF VACCINES</h2></Card.Body>
                </Card>
              </Col>
              <Col className="my-3" md={4}>
                <Card onClick={() => navigateToPage("hospitals")}>
                  <Card.Body><h2 className="text2">CHECK HOSPITALS</h2></Card.Body>
                </Card>
              </Col>
              <Col className="my-3" md={4}>
                <Card onClick={() => navigateToPage("pending-schedules")}>
                  <Card.Body><h2 className="text2">PENDING SCHEDULES</h2></Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="mb-3" md={8}>
                <Row>
                  <Col className="my-3" md={12}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Card onClick={() => navigateToPage("vaccination-records")}>
                          <Card.Body><h2 className="text2">VACCINATION RECORDS</h2></Card.Body>
                        </Card>
                      </Col>
                      <Col md={6} className="mb-3" >
                        <Card onClick={() => navigateToPage("reports")}>
                          <Card.Body><h2 className="text2">SHOW REPORTS</h2></Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={12}>
                    <WatchList vaccinationRecords={vaccinationRecords}/>
                  </Col>
                </Row>
              </Col>
              <Col className="my-3" md={4}>
                <Card className="p-3" onClick={() => navigateToPage("reports")}>
                  <Card.Title className='my-2 text-center'>Vaccinated Persons by Age</Card.Title>
                  <AgeChart vaccinationRecords={vaccinationRecords}/>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default AdminSection