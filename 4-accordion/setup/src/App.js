import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const questions = data;
  
  return(
    <main>
     <div className="container">
       <h3>Questions and Answers About Login</h3>
       <section className="info">
        {data.map((question)=>{
          return <>
            <SingleQuestion key={question.id} question={question}></SingleQuestion>
            

          </>
        })}
       </section>
     </div>
    </main>
  );
}

export default App;
