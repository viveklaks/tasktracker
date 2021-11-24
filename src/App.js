import { Header } from "./components/Header";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useState , useEffect} from 'react';
import Footer from "./components/Footer";
import About from "./components/About";
import react from "react";
function App() {
  
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks,setTasks] =  useState([])
  useEffect(()=>{
    const getTasks = async()=>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)

    }
    
    getTasks()
  },[])
  //Fetch Tasks
  const fetchTasks = async()=>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = res.json()
    return data
  }
    //Fetch Task
  const fetchTask = async(id)=>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = res.json()
    return data
  }
//Add Task
const addTask= async(task)=>{

  const res = await fetch('http://localhost:5000/tasks',{
    method: 'POST',
    
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(task)
  })
 const data = await res.json()
 
  setTasks([...tasks,data])
  console.log(tasks)
  const id = Math.floor(Math.random()*1000)+1
   const newTask = {id , ...task}
  setTasks([...tasks, newTask])
}

// Delete Task
const deleteTask =async(id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'DELETE',
  })
  setTasks(tasks.filter((task)=>task.id !==id))
}
// Toggle Remainder
const toggleReminder= async(id)=>{
  console.log(id)
  const taskToToggle = await fetchTask(id)
  console.log(taskToToggle)
  const updatedTask ={
    ...taskToToggle,reminder: !taskToToggle.reminder
  }
  console.log(updatedTask)
  const res =await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({...updatedTask})
  })
  console.log(res)
  const data = await res.json()
  console.log(data.reminder)
  setTasks(
    tasks.map((task)=>
    task.id === id ? {...task , reminder: !task.reminder} : task)
  )
  console.log(tasks)
  
}

  return (
    <Router>
    <div className="App">
      <Header title="Task Tracker" 
      onAdd={()=> setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}/>
       <Routes>
        <Route
          path='/'
          
          element={ (
            <react.Fragment>
      {showAddTask && <AddTask onAdd={addTask}/>}
      { tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder}/>):("No Tasks to show")}
     
      
     
    
            </react.Fragment>
          )}
          exact/>
      <Route path='/about' element={<About/>}/>
      </Routes>
     
      
      
      
      
      
      <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
