import React from 'react'
import { Link } from 'react-router-dom'
const Sidebar = (props) => {
  return (
    <div style={{ 
      borderRight: "1px solid black",
      minHeight: 650
    }}>
      <ul>
        <li><Link to="/dash/checklist">Checklist</Link></li>
        <li><Link to="/dash/notes">Notes</Link></li>
      </ul>
    </div>
  )
}
export default Sidebar