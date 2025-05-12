import React from 'react'
import './innercontainer.css'
const Innercontainer = ({children}) => {
  return (
    <div className='inner-container'>
      {children}
    </div>
  )
}

export default Innercontainer;
