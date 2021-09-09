import React from 'react';

const Categories = ({categories, filter}) => {
  return(
    <>
    <div className="btn-container">
      <button key={-1} type="button" className="filter-btn" onClick={()=>{filter("all")}}>
        All
      </button>
    {categories.map((category,idx)=>{
      return <button key={idx} type="button" className="filter-btn" onClick={()=>{filter(category)}}>{category}</button>
    })}
    </div>
    </>
  );
};

export default Categories;
