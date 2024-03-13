import React from 'react'
import {Container, Row, Col, Card} from "react-bootstrap"
import SingleForm from './SingleForm'

const RegistrationForm = (props) => {

  return (
    <Container className="full-height">
      <Row className="p-5 center-element">
        <Col lg={6}>
            <h1 className="text1">{props.pageInfo}</h1>
        </Col>
        <Col lg={6}>
          <Card className="p-5">
            <SingleForm inputs={props.inputs} submitInputs={props.submitInputs}/>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default RegistrationForm