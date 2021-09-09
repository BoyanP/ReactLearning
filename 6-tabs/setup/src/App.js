import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {

 

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value,setValue] = useState(0);
  const [companyNames, setCompanyNames] = useState([]);



  const fetchJobs = async() => {
    setLoading(true);
    try{
      const response = await fetch(url);
      const tours = await response.json();
      
      const apiResponse = await fetch(url);
      const newJobs = await apiResponse.json();
      setJobs(newJobs);
      setLoading(false);
    }
    catch (err){
      setLoading(false);
      console.log(err);
    }

  }

   useEffect(()=>{

    fetchJobs();
  },[]);

  if(loading){
    return(
    <section className="section loading">
      <h2>Loading...</h2>
    </section>);
  }

  const {company, dates, duties, title, order, id} = jobs[value];

  return(
    <>
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
            {jobs.map((job, idx)=>{
             return(
             <button key={job.id} className={idx===value ? "active-btn job-btn" : " job-btn" } onClick={()=>{ setValue(idx)}}>{job.company}</button>
             ); 
            })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date"> {dates}</p>
          {duties.map((duty, idx)=>{
            return(
              <div key={idx} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p> {duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
    </>
  );
}

export default App
