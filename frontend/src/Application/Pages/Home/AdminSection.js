import React, {useEffect} from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { AddUserToStore } from '../../../State/User/userAction'
import { useDispatch } from 'react-redux'

const AdminSection = () => {

  let navigate = useNavigate();
  let dispatchAction = useDispatch();

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

  },[])

  return (
    <>
      <Container className="full-height">
        <Row className="py-5">
          <Col><h2 className="text1">ADMIN SECTION</h2></Col>
        </Row>
        <Row className="center-element">
          <Col md={12}>
            <Row>
              <Col className="my-3" md={6}>
                <Card onClick={() => navigateToPage("vaccines")}>
                  <Card.Body><h2 className="text2">LIST OF VACCINES</h2></Card.Body>
                </Card>
              </Col>
              <Col className="my-3" md={6}>
                <Card onClick={() => navigateToPage("hospitals")}>
                  <Card.Body><h2 className="text2">CHECK HOSPITALS</h2></Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="my-3" md={6}>
                <Card onClick={() => navigateToPage("vaccination-records")}>
                  <Card.Body><h2 className="text2">VACCINATION RECORDS</h2></Card.Body>
                </Card>
              </Col>
              <Col className="my-3" md={6}>
                <Card onClick={() => navigateToPage("pending-schedules")}>
                  <Card.Body><h2 className="text2">PENDING SCHEDULES</h2></Card.Body>
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