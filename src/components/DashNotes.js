import React from 'react'
import AddNotesForm from './AddNotesForm'
import NotesList from './NotesList'

const DashNotes = (props) => {
  return (
    <div>
      <AddNotesForm />
      <NotesList />
    </div>
  )
}
export default DashNotes