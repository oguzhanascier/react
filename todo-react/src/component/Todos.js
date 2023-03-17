import React from 'react'

function Tods({ items }) {
  const deleteItems = (id) => {
    items.filter(item => item.id !== id)
  }

  return (
    <>
      <ul className='todos-ul'>
        {items.map((item, index) => {
          return (
            <li className="todo" key={index}>
              <p className='text'>{item.value}</p>
              <div className="todo-btn">
                <button className="delete" onClick={deleteItems(item.id)}>Delete</button>
              </div>
            </li>
          )
        }
        )}

      </ul>
    </>
  )
}

export default Tods
