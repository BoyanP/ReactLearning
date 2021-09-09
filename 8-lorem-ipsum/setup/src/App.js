import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (event) => {
    let amount = parseInt(count);
    event.preventDefault();
    console.log("form test");
    if (count <= 0){
      amount = 1;
    }
    if (count >= data.length -1 ){
      amount = data.length - 1;
    }
    setText(data.slice(0,amount));


  }
  
  return (
  <>
  <section className="section-center">
    <h3>tired of boring lorem ipsum?</h3>
    <form action="" className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount"> paragraphs:</label>
      <input type="number" name="amount" id="amount" value={count} onChange={(e)=>{setCount(e.target.value)}}/>
      <button className="btn"> generate </button>
    </form>
    <article className="lorem-text">
      {text.map((paragraph, idx)=>{
        return (
          <p key={idx}>
            {paragraph}
          </p>
        )
      })}
    </article>
    </section>
  </>
    )
}

export default App;
