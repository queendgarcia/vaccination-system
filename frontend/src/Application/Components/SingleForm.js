import React, { useState, useRef, useEffect } from 'react'
import {Form, Button} from "react-bootstrap";

const SingleForm = (props) => {
  let {inputs} = props;
  let [formSubmitted, setFormSubmitted] = useState(false);
 
  let inputRefs = useRef([]);

  let handleSubmit = (evt) => {
    let singleForm = evt.currentTarget
    
    if (singleForm.checkValidity() == true) {
      let inputValues = inputRefs.current
      props.submitInputs(inputValues);
      evt.preventDefault();

    } else {
      console.log("failed validation")
      evt.preventDefault();
    }

    setFormSubmitted(true);
  }
    

  return (
    <>
      <Form noValidate validated={formSubmitted} onSubmit={handleSubmit}>
        {
          inputs && inputs.length > 0 ? 
          inputs.map( (input, i) => {
            return (
              <Form.Group key={input.id}>
                <Form.Label>{input.label}</Form.Label>
                  <Form.Control as={input.controlAs} rows={input.rows} required={input.isRequired}
                  type={input.controlType} ref={(el) => (inputRefs.current[i] = el)} />
                <Form.Control.Feedback type="invalid">{input.feedbackInvalid}</Form.Control.Feedback>
              </Form.Group>
            )
          })
          :
          <></>
        }
        <Button className="mt-3" type="submit">Submit</Button>
      </Form>
    </>
  )
}

export default SingleForm;