import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(()=>{
    let interval = setInterval(()=>{
      checkIndexAndSet(index+1)
    }, 3000);
    return ()=> clearInterval(interval);
  },[index]);

  const checkIndexAndSet = (newIndex)=> {
    let thisIndex = 0;
    if (newIndex < 0) {
        thisIndex = people.length - 1
    }
    else if (newIndex > people.length - 1){
      thisIndex = 0
    }
    else {
      thisIndex = newIndex;
    }
    setIndex(thisIndex);
  }
  return (
    <>
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person,idx)=>{
          const {id, image, name, title, quote} = person;
          let position = "nextSlide"
          if( idx === index){
            position = "activeSlide"
          }
          else if(idx === index -1 || (index === 0 && idx == people.length - 1) ){
            position = "lastSlide"
          }
          return( 
          <article key={id} className={position}>
            <img src={image} alt={name} className="person-img"/>
            <h4> {name} </h4>
            <p className="title"> {title} </p>
            <p className="text"> {quote} </p>
            <FaQuoteRight className="icon"></FaQuoteRight>
          </article>
          )
        })}
        <button className="prev" onClick={()=>{checkIndexAndSet(index-1)}}>
          <FiChevronLeft></FiChevronLeft>
        </button>
        <button className="next" onClick={()=>{checkIndexAndSet(index+1)}}>
          <FiChevronRight></FiChevronRight>
        </button>
      </div>
    </section>
    </>
  );
}

export default App;
