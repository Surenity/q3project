import React, { Component } from 'react'
import { FormGroup, Label, Input } from 'reactstrap'
class DashChecklist extends Component {
  render () {
    return (
      <div>
        <h1>Moving Checklist</h1>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Pack stuff
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Pack more stuff
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Take dogs...probably
          </Label>
        </FormGroup>
      </div>
    )
  }
}
export default DashChecklist