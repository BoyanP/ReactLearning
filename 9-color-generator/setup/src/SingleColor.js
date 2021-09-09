import React, { useState, useEffect } from 'react'
// import rgbToHex from './utils'

const SingleColor = ({rgb, hex, weight, type, index}) => {

  const [alert, setAlert] = useState(false);
  const backgroundColor = rgb.join(',');
  const colorToCopy = `#${hex}`;

  const handleClick= (event) => {
    setAlert(true);
    navigator.clipboard.writeText(colorToCopy);
  }

  useEffect(()=>{
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return ()=> clearTimeout(timeout);
  },[alert]);
  return (
    <article key={index} className={`color ${type === 'shade' && 'color-light'}`} style={{ backgroundColor:`rgb(${backgroundColor})`}}
    onClick={handleClick}>

    {' '}
    <p className="percent-value">{weight}%</p>
    <p className="color-value">{colorToCopy}</p>
    {alert ? <p className="alert"> copied to clipboard</p> : null}
    </article>
  )
}

export default SingleColor
