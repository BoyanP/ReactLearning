import React, { useState } from 'react';
import data from './data';
import List from './List';


function App() {

  const [people, setPeople] = useState(data); 
  return <>
  <h2>useState excercise</h2>
  <main>
    <section className="container">
      <h3>{people.length} birthdays today </h3>
      <List people={people}></List>
      <button onClick={ () => {setPeople([])}}>Clear all</button>
      <button onClick={ () => {setPeople(data)} }> Reset birthday list</button>
    </section>
    
  </main>;
   </>
}

export default App;
