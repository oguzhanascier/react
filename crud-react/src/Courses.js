import Course from './Course'
function Courses({ courses,removeCourse }) {
  return (
    <div>
      <div>
        <h2>Galaxy Sale</h2>
      </div>
      <div className="container">
        {courses.map((course,i) => {
          return (
            <Course key={i} {...course} removeCourse={removeCourse} /> // we'll access subkeys if we will send it like this
            // <Course key={i} course={course} />
          )
        })}
      </div>
    </div>
  )
}

export default Courses
