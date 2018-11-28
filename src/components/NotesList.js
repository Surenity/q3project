import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
const NotesList = (props) => {
  return (
    <div>
      <h2>Notes list</h2>
      <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
    </div>
  )
}
export default NotesList