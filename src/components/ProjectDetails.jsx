import React from 'react'
import { Outlet } from 'react-router-dom'

function ProjectDetails() {
  return (
    <div>
        <a className='back-to-home' href="/">back to home</a>
        <Outlet/>
    </div>
  )
}

export default ProjectDetails