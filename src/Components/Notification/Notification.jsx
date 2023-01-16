import React from 'react';
import './Notification.css'

const Notification = ({successMessage, errorMessage}) => {
  return (
     <div className='notification'>
          {successMessage && <span className='success'>{successMessage}</span>}
          {errorMessage && <span className='error'>{errorMessage}</span>}
    </div>
  )
}

export default Notification