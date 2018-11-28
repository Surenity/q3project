import React from 'react'
import DashNotes from './DashNotes'
import DashChecklist from './DashChecklist'
import Sidebar from './Sidebar'
import { Row, Col } from 'reactstrap'
import { Route } from 'react-router-dom'

const Dash = (props) => {
  return (
    <div>
        <Row>
          <Col xs="3"><Sidebar /></Col>
          <Col>
            <Route path="/dash/checklist" component={DashChecklist} />
            <Route path="/dash/notes" component={DashNotes} />
          </Col>
        </Row>
        
    </div>
  )
}
export default Dash