import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchVaccinationRecords } from '../../../State/VaccinationRecords/vaccinationRecordsAction';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import moment from 'moment';

const VaccinationRecords = () => {

  let dispatchAction = useDispatch();
  let vaccinationRecords = useSelector((state) => state.VaccinationRecordsReducer)
  console.log("from vaccination records: " + JSON.stringify(vaccinationRecords));

  useEffect(() => {
    dispatchAction(fetchVaccinationRecords())
  },[])

  return (
    vaccinationRecords && vaccinationRecords.length > 0 ?
    <Container className="full-height">
      <Row className="pt-5">
        <Col className="spaced-elements">
          <h1 className="text1">VACCINATION RECORDS</h1>
        </Col>
      </Row>
      <Row className="pt-5">
      { 
        vaccinationRecords.map((record) => {
          return (
            <Col key={record._id} md={4} className="mb-3">
              <Card className="card" key={record.scheduleId}>
                <Card.Title>{record.userName}</Card.Title>
                <p>Email: {record.userEmail}</p>
                <p>Doses Supplied: {(record.dosesSupplied).length}</p>
                <Card.Body>
                  {
                    (record.dosesSupplied).map( (dose) => {
                      return ( 
                        <div key={dose.scheduleId} className="mb-5">
                          <p>Vaccination Date - {moment(dose.vaccinationSchedule).utc().format("MM/DD/YYYY")}</p>
                          <p>{(dose.hospital.name)}, {(dose.vaccine.name)}</p>
                        </div>
                      )
                    })
                  }
                </Card.Body>
              </Card>
            </Col>
          )
        })
      }
      </Row>
    </Container>
    :
    <h1>No Vaccination Records</h1>
  )
}

export default VaccinationRecords