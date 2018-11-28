import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button, Container, Row, Col } from 'reactstrap'

class AddNotesForm extends Component {
  render () {
    return (
      <Container style={{marginBottom: 15}}>
        <h2>Add Notes Form</h2>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="exampleUsername">Username</Label>
                <Input type="text" name="username" id="exampleUsername" placeholder="with a placeholder" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default AddNotesForm