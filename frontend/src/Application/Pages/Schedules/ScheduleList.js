import React, { useEffect } from 'react'
import { Container, Table, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPendingSchedules, completeSchedule } from '../../../State/Schedules/schedulesAction';
import moment from "moment";

const ScheduleList = () => {

  let dispatchAction = useDispatch();
  let pendingSchedules = useSelector((state) => state.SchedulesReducer)

  console.log("from vaccination records: " + JSON.stringify(pendingSchedules));

  useEffect(() => {
    dispatchAction(fetchPendingSchedules())
  },[])

  let completeScheduleBtnClick = (schedule) => {

    let requestData = {
      scheduleId: schedule._id,
      ...schedule
    }
    console.log(requestData)
    dispatchAction(completeSchedule(requestData))
  }

  return (
    pendingSchedules && pendingSchedules.length > 0 ?
    <Container className="full-height">
      <Row className="pt-5">
        <Col className="spaced-elements">
          <h1 className="text1">PENDING SCHEDULES</h1>
        </Col>
      </Row>
      <Row className="center-element">
        <Col className="my-5 card">
          <Table responsive="md">
            <thead>
              <tr> 
                <th>Schedule Id</th>
                <th>Name</th>
                <th>Hospital</th>
                <th>Vaccine</th>
                <th>Schedule Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                pendingSchedules.map( schedule => {
                  return (
                    <tr key={schedule._id}>
                      <td>
                        <a className="color2" href="#">{schedule._id}</a>
                      </td>
                      <td>{schedule.user.name}</td>
                      <td>{schedule.hospital.name}</td>
                      <td>{schedule.vaccine.name}</td>
                      <td>{moment(schedule.vaccinationSchedule).utc().format("MM-DD-YYYY")}</td>
                      <td>
                        <Button onClick={() => completeScheduleBtnClick(schedule)}>Complete</Button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Col>
      </Row> 
    </Container>
    :
    <Container className="full-height pt-5">
      <h1>No Pending Schedules</h1>
    </Container>
  )
}

export default ScheduleList