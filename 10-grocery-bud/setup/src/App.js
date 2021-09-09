import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const getLocalStorage = () =>{
     let groceryList = localStorage.getItem('groceryList');
  if (groceryList) {
    return (groceryList = JSON.parse(localStorage.getItem('groceryList')));
  } else {
    return [];
  }
  };

  const MESSAGE_SUCCESS = "Item added to the list";
  const EDIT_SUCCESS = "value changed";
  const DELETE_SUCCESS = "item removed";
  const REMOVE_ALL_SUCCESS = "Empty List";
  const EMPTY_ALERT = "please enter a value";

  const buttonTypes = {danger:"danger", success:"success"};

  const [name, setName] = useState('');
  const [groceryList, setGroceryList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show:false,msg:'', type:''});

    useEffect(()=>{
      const timeout = setTimeout(()=>{
        setAlert({show:false, msg:'', type:''});
      },3000);
      return ()=>{clearTimeout(timeout)};
  },[alert]);

    useEffect(()=>{
      setName('');
      localStorage.setItem('groceryList', JSON.stringify(groceryList));
  },[groceryList]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('yoo:' + name);
    let alert = {show:true, msg: isEditing ? EDIT_SUCCESS : MESSAGE_SUCCESS, type: isEditing ? '' : ''}
    
    if(!name){
      alert.type = buttonTypes.danger;
      alert.msg = EMPTY_ALERT;
    }
    else if (name && isEditing) {
      alert.type = buttonTypes.success;
      alert.msg = EDIT_SUCCESS;
      const editedList = groceryList.map((item)=>{
      return  item.id === editId ? {...item, title:name} : item
      });
      setGroceryList(editedList);
    }
    else {
      const newItem = {id: new Date().getTime().toString(), title:name};
      setGroceryList([...groceryList, newItem]);
    }

    setAlert(alert);
  }

  const clearList = () => {
    setGroceryList([]);
    setIsEditing(false);
    setAlert({show: true, msg:REMOVE_ALL_SUCCESS, type:buttonTypes.danger});
  }

  const removeItem = (id) =>{
    let newList = groceryList.filter((item)=>{ return item.id != id});
    setGroceryList(newList);
    setAlert({show:true,msg:DELETE_SUCCESS, type:buttonTypes.danger});
  }

  const editItem = (item) =>{
    setIsEditing(true);
    setEditId(item.id);
    setName(item.title);
  }
  return (
    <>
    <section className="section-center">
      
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert alert={alert}></Alert>}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input type="text" className="grocery" placeholder="eg. eggs" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          <button type="submit" className="submit-btn">{isEditing ? 'Edit': 'Submit'}</button>
        </div>
      </form>
      <div className="grocery-container">
  { groceryList.length > 0  && <List items={groceryList} clearList={clearList} removeItem={removeItem} editItem={editItem}></List> }
      </div>
    </section>
    </>
  );
}

export default App
