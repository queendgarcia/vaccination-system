import React, { useEffect } from 'react'
import { Container, Table, Row, Col, Button } from 'react-bootstrap'

const List = () => {

  let data = {
    info: [ 
      { "key" : "id", "name" : "Record Id" }, 
      { "key" : "date", "name" : "Schedule Date" }, 
      { "key" : "name", "name" : "Name" }, 
      { "key" : "hospital", "name" : "Hospital" }, 
      { "key" : "vaccine", "name" : "Vaccine" }, 
      { "key" : "status", "name" : "Status" }
    ],
    list: [
      {
        scheduleId: "65f3df82ce0b8f4abe58909c",
        scheduleDate: new Date("2024-03-15T01:50:26.817Z").toLocaleDateString(),
        userName: "User 3",
        hospitalName: "ABC Hospital",
        vaccineName: "Vaccine 2"
      },
      {
        scheduleId: "65f3aab5c4266e8c77a46567",
        scheduleDate: new Date("2024-03-15T01:50:26.817Z").toLocaleDateString(),
        userName: "User 1",
        hospitalName: "Hospital B",
        vaccineName: "Vaccine 2"
      }
    ]       
  }

  return (
    <Container className="full-height">
      <Row className="center-element">
        <Col className="my-5 card">
          { 
            data ?
          <Table>
            <thead>
              <tr> 
                { (data.info).map((header) =>  <th key={header.key}>{header.name}</th>) }
              </tr>
            </thead>
            <tbody>
              {
                (data.list).map( row => {
                  return (
                    <tr key={row.scheduleId}>
                      <th>
                        <a className="color2" href="#">{row.scheduleId}</a>
                      </th>
                      <td>{row.scheduleDate}</td>
                      <td>{row.userName}</td>
                      <td>{row.hospitalName}</td>
                      <td>{row.vaccineName}</td>
                      {
                        (data.info)[5].name == "Status"  ? 
                        <td>Done</td>
                        :
                        <td>
                          <Button>Approve</Button>
                        </td>
                      }
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

export default List