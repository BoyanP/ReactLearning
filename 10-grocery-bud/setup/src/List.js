import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items, clearList, removeItem, editItem}) => {
  
  const clearItems = () => {
    clearList();
  }
  return(
    <>
    {items.map((item, index)=>{
      return(
      <article key={item.id} className="grocery-item">
        <p className="title">{item.title}</p>
        <div className="btn-container">
          <button type="button" className="edit-btn" onClick={()=>{editItem(item)}}><FaEdit></FaEdit></button>
          <button type="button" className="delete-btn" onClick={()=>{removeItem(item.id)}}><FaTrash></FaTrash> </button>
        </div>
      </article>
      )
    })}
    <button className="clear-btn" onClick={clearItems}> clear items</button>
    </>
  )
}

export default List
