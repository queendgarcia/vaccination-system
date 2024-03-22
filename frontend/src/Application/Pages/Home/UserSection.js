import React, { useEffect } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux'
import { AddUserToStore } from '../../../State/User/userAction'
import { getUserSchedule } from '../../../State/Schedules/schedulesAction'
import moment from "moment"

const UserSection = () => {

  let navigate = useNavigate();
  let dispatchAction = useDispatch();

  let userDetails = useSelector((state) => state.UserReducer.User)
  let userScheduleDetails = useSelector((state) => state.UserReducer.UserSchedule)

  let navigateToPage = (page) => {
    navigate(`/${page}`)
  }

  useEffect(() => {
    let items = { ...localStorage };
    console.log("from user section before isAdmin change", items);
    items = {...items, isAdmin: items.isAdmin == "true" ? true : false }
    console.log("from user section", items);
    dispatchAction(AddUserToStore(items));
    dispatchAction(getUserSchedule(items._id))

    localStorage.removeItem("contact")
    localStorage.removeItem("address")
    localStorage.removeItem("profession")

  },[])

  let colSize = 12
  if (userDetails) colSize = 6

  return (
    <>
      <Container className="full-height">
        <Row>
          <Col className='pt-3 display-right'>
            <Button onClick={()=> window.location.assign(window.location.origin + "/login")} className="custom-btn">Logout</Button>
          </Col>
        </Row>
        <Row className="py-3">
          <Col><h2 className="text1">USER SECTION</h2></Col>
        </Row>
        <Row>

          {
            userScheduleDetails ? 
            <Col className="my-3" md={6}>
              <Card>
                <Card.Body>
                  <p className="text2">Hello, {userDetails.name}</p>
                  <p>Age: {userDetails.age}</p>
                  <p>Email: {userDetails.email}</p> 
                  { userDetails.contact ? <p>Contact: {userDetails.contact}</p> : <></> }
                  { userDetails.address ? <p>Address: {userDetails.address}</p> : <></> }
                  {
                    userScheduleDetails && userScheduleDetails.length 
                    ? 
                    <div>
                      <p className="mt-5 text2">Schedules</p>
                      {
                        (userScheduleDetails).map((schedule) => {
                          return ( 
                            <div key={schedule._id} className="mb-5">
                              <p>Vaccination Date - {moment(schedule.vaccinationSchedule).utc().format("MM/DD/YYYY")}</p>
                              <p>{(schedule.hospital.name)}, {(schedule.vaccine.name)}</p>
                            </div>
                          )
                        })
                      }
                    </div>
                    :
                    <></>
                  }
                </Card.Body>
              </Card>
            </Col>
            :
            <></>
          }

          <Col md={colSize}>
            <Row>
              <Col className="my-3" md={12}>
                <Card onClick={() => navigateToPage("vaccines")}>
                  <Card.Body><h2 className="text2">LIST OF VACCINES</h2></Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="my-3" md={12}>
                <Card onClick={() => navigateToPage("hospitals")}>
                  <Card.Body><h2 className="text2">CHECK HOSPITALS</h2></Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col className="my-3" md={12}>
                <Card onClick={() => navigateToPage("schedule-vaccination")}>
                  <Card.Body><h2 className="text2">SCHEDULE AN APPOINTMENT</h2></Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

        </Row>
      </Container>
    </>
  )
}

export default UserSection