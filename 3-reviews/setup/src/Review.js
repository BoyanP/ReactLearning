import React, { useState} from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index, setIndex] = useState(0);
  const {name,job,image,text} = people[index];

  const getRandomIndex = () => {
    return Math.floor(Math.random() * people.length);
  }

  const randomUser = () => {
    const randomIndex = getRandomIndex();
   if (randomIndex == index ) {
     randomUser();
   } else {
      setIndex(randomIndex);
   }
    
  }
  const previousUser = () => {  
    const prevIndex = index - 1 < 0 ? people.length - 1 : index - 1; 
    setIndex(prevIndex);
  }
  const nextUser = () => {
    const nextIndex = index + 1 > people.length - 1 ? 0 : index + 1;
    setIndex(nextIndex);
  }

  return (
  <article className="review">

    <div className="img-container">
      <img className="person-img" src={image} alt={name}/>
      <span className="quote-icon">
        <FaQuoteRight></FaQuoteRight>
      </span>
    </div>
    <h4 className="author">
        {name}
    </h4>      
    <p className="job">{job} </p>
  <p className="info"> {text}</p>
    <div className="button-container">
      <button className="prev-btn" onClick={previousUser}>
        <FaChevronLeft></FaChevronLeft>
      </button>
      <button className="next-btn" onClick={nextUser}>
        <FaChevronRight></FaChevronRight>
      </button>
    </div>
    <button className="random-btn" onClick={randomUser}> surprise me</button>
  </article>
  );
};

export default Review;
