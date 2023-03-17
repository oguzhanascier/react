import { useEffect,useState } from 'react';
import axios from 'axios';
import './App.css';
import Courses from './Courses'
import Loading from './Loading';


function App() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

const deleteCourse=(id)=>{
  const newCoursesList= courses.filter((course)=> course.id !== id)
  setCourses(newCoursesList)
}

  const fetchCourses = async () => {
    try {
    const res = await axios.get('http://localhost:3000/courses')
    setCourses(res.data)
    setLoading(false)
    } catch (error) {
    setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchCourses()
  }, []) //will only work for the first time

  return (
    <div className="App">
     { loading ? (<Loading/>) : (  <Courses courses={courses}  removeCourse={deleteCourse}/>)}
    
    </div>
  );
}

export default App;
