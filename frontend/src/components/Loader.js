import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <Spinner style={{
      width: '100px',
      height: '100px',
      margin: 'auto',
      display: 'block'
    }} animation="border" variant="dark">
      <span className="sr-only">Loading...</span>
    </Spinner>
  )
}

export default Loader
