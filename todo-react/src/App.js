import React, { useState } from 'react';
import './App.css';
import Form from './component/Form';
import ToDosList from './component/Todos';

function App() {
  const [newItem, setNewItems] = useState("")
  const [items, setItems]=useState([])


  return (
    <>
      <h3>TODO LİST</h3>

      <div className="todo-container">
        <Form todoValue={newItem} todoChange={setNewItems} items={items} setItems={setItems} ></Form>
        <ToDosList ToDos={newItem} items={items}></ToDosList>
      </div>
    </>
  );
}

export default App;
