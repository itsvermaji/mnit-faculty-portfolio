import React from 'react'
import Card from './Card'

const FacultyList = (props) => {
  function profileHandler() {
    console.log(`You clicked ${props.faculty.id} card`);
  }
  
  return (
    <div>
      {props.faculties.map(faculty => {
        return <Card key = {faculty.id} faculty = {faculty} atClick = {profileHandler} />
      })}
    </div>
  )
}

export default FacultyList
