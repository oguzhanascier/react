import React from 'react'

function Course({ id, content, title,  price, removeCourse }) {


  return (
    <div className='course-card'>
      <ul className='course'>
        <button className='buttonLi' onClick={() => removeCourse(id)}>SİL</button>
        <li className='price'>Price: {price}</li>
        <li className='title' >{title}</li>
        <li>{content}</li>
      </ul>
    </div>
  )
}

export default Course
