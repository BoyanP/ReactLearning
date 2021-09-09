import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState('#FFAADD');
  const [validation,setValidation] = useState(true);
  const [colorList, setColorList] = useState(new Values('#FFAADD').all(10));
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("does submit work?"); //YES
    try{
      let colors = new Values(color).all(10);
      setColorList(colors)
      setValidation(true);
      console.log(colors);
    }
    catch {
      setValidation(false);
    }
   
  };
  return (
    <>
    <section className="container">
      <h3>color generator</h3>
      <form action=""  onSubmit={handleSubmit}>
        <input className={validation ? "": "error"} type="text" placeholder={color} onChange={(e)=>{setColor(e.target.value)}}/>
        <button type="submit" className="btn">  Submit</button>
      </form>
    </section>
    <section className="colors">
      {colorList.map((color,index)=>{
        return(
        <SingleColor {...color} hex={color.hex} key={index} index={index} ></SingleColor>
        )
      })}
    </section>
    </>
  )
}

export default App
