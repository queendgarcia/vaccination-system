import React from 'react'
import {Container, Row, Col, Card} from "react-bootstrap"
import SingleForm from './SingleForm'

const RegistrationForm = (props) => {

  let colSize = props.colSize ? props.colSize : [6,6];

  return (
    <Container className="full-height">
      <Row className="p-5 center-element">
        <Col lg={colSize[0]}>
            <h1 className="text1">{props.pageInfo}</h1>
        </Col>
        <Col lg={colSize[1]}>
          <Card className="mt-3 p-5">
            <SingleForm inputs={props.inputs} submitInputs={props.submitInputs}/>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default RegistrationForm