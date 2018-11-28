import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button, Container, Row, Col } from 'reactstrap'
class Home extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('props in home', this.props)
    this.props.history.push('/dash/checklist')
    
  }

  render() {
    return (
      <Container>
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
export default Home;
