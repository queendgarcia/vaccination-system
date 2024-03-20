import React, { useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import AgeChart from './AgeChart'
import MaleFemaleChart from './MaleFemaleChart'
import DosesChart from './DosesChart'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVaccinationRecords } from '../../../State/VaccinationRecords/vaccinationRecordsAction'

const ShowReports = () => {

  let dispatchAction = useDispatch()
  let vaccinationRecords = useSelector((state) => state.VaccinationRecordsReducer)

  useEffect(() => {
    dispatchAction(fetchVaccinationRecords())
  }, [])

  return (
    <Container className="full-height">
      <Row className="pt-5 ">
        <Col className="d-flex center-element">
          <h1 className="text1">VACCINATION REPORTS</h1>
        </Col>
      </Row>
      <Row className="pt-5 center-element">
        <Col md={8}>
          <Card className="p-3">
            <Card.Title className='text-center'> Vaccination Records Per Month</Card.Title>
            <MaleFemaleChart vaccinationRecords={vaccinationRecords}/>
          </Card>
        </Col>
        <Col className="my-3" md={4}>
          <Row className="mb-3">
            <Col>
              <Card className="p-3">
                <Card.Title className='text-center'>Vaccinated Persons by Age</Card.Title>
                <AgeChart vaccinationRecords={vaccinationRecords}/>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="p-3">
                <Card.Title className='text-center'>Doses Administered in a Week</Card.Title>
                <DosesChart vaccinationRecords={vaccinationRecords}/>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default ShowReports