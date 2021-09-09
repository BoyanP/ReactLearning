import React from 'react'

const Alert = ({alert}) => {
  const {msg, type} = alert;
  const classType = type === 'danger' ? 'alert-danger' : 'alert-success';
  return (
  <p className={"alert " + classType}>{msg}</p>
  )
}

export default Alert
