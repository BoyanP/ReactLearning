import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const {question} = props;
  const [isSelected, setIsSelected] = useState(false);
  return(
  <article className="question">
    <header>
      <h4>{question.title}</h4>
      <button className="btn" onClick={() => {setIsSelected(!isSelected)}}>
        { isSelected ? <AiOutlineMinus></AiOutlineMinus> : <AiOutlinePlus></AiOutlinePlus>}
      </button>
    </header>
    {
      isSelected ? <p> {question.info}</p> : <></>
    }
  </article>
  );
};

export default Question;
