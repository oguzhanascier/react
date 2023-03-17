import React, {useEffect} from 'react'
import '../App.css';



function Form({todoValue,todoChange,items,setItems}) {

  useEffect(() => {
    console.log(items) 
  }, [items])

  function addItem(){
    const item={
      id: Math.floor(Math.random()*1000),
      value:todoValue,
    }
    if(!todoValue){
      alert('Üşenme Bir Şeyler Yaz')
    }else{
      setItems(old=> [...old, item])
      todoChange('')
    }
      
    
  }


  return (
    <div className='form'>
    <input className="todo-input"  value={todoValue} onChange={e=> todoChange(e.target.value)}/>
    <button className='handleAddTodo' onClick={()=> addItem() }>ADD</button>
  </div>
  )
}

export default Form
