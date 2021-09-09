import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const categoryList = [ ...new Set(items.map((item)=>{ return item.category}))];
  const [categories, setCategories] = useState(categoryList);

  const filterItems = (category) => {
    if (category === 'all'){
      setMenuItems(items)
      return
    }
    const filteredMenuItems = items.filter((item)=>{
      return item.category === category
    });
    setMenuItems(filteredMenuItems);
  }
  return(
    <main>
      <section className="menu section">
        <div className="title">
          <h2> Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filter={filterItems}></Categories>
         <Menu items={menuItems}></Menu>
      </section>
      
    </main>
    );
}

export default App;
