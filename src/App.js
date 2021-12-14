import { Header } from "./components/Header";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import {useState , useEffect} from 'react';
import Footer from "./components/Footer";
import About from "./components/About";
import react from "react";
import Login from "./components/Login";
import Registeration from "./components/Registeration";
function App() {
  const [username,setUsername]=useState()
  const [login,setLogin]= useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [editTaskId,setEditTaskId] = useState(null);
  
  const [tasks,setTasks] =  useState([]);
  const [taskId,setTaskId] =  useState(null);
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

  console.log(task)
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
  console.log("Id created on add task",id)
  setTaskId(id)
  const newTask = {id , ...task}
  setTasks([...tasks, newTask])
}
//Save editTask
const saveEditTask=async(task)=>{
   console.log(task)
   console.log(JSON.stringify(task))
   setEditTaskId(null)
  const res = await fetch(`http://localhost:5000/tasks/${task.id}`,{
    method: 'PUT',
    
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(task)
  })
 const data = await res.json()
 console.log(data.id)
 setTaskId(data.id)
 setTasks(...tasks.filter((task)=>task.id !==data.id),data)
  
  console.log(tasks)
  
   //const newTask = {...task}
  //setTask([...task, newTask])*/
}
useEffect(()=>{
  const getTasks = async()=>{
  const tasksFromServer = await fetchTasks()
  setTasks(tasksFromServer)

    }

if(taskId){getTasks()}
return ()=>setTaskId(null)
  },[taskId]);
// Delete Task
const deleteTask =async(id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method: 'DELETE',
  })
  setTasks(tasks.filter((task)=>task.id !==id))
}
//onEdit
const EditTask =(id)=>{
  
  setEditTaskId(id)
  console.log("editTaskId onClickEditTask",editTaskId)
  console.log("taskId onClickEditTask",taskId)
}
//onEdit
const cancelEdit =()=>{
  
  setEditTaskId(null)
  console.log("editTaskId onClickCancelEdit",editTaskId)
  console.log("taskId onClickCancelEdit",taskId)}
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
/*const editTask = ()=>{
  console.log(task);
  

}*/

const onLogin=(loginDetail)=>{
  if(loginDetail.login=== true){
    setLogin(true)
    setUsername(loginDetail.username)
}
  }
const logOut=()=>{
  setLogin(false)
}  
 


   return login ? (
    <Router>
    <div className="container">
      <Header title="Task Tracker" 
      onAdd={()=> setShowAddTask(!showAddTask)} 
      showAdd={showAddTask} logOut={logOut} username={username}/>
       <Routes>
        <Route
          path='/'
          
          element={ (
            <react.Fragment>
      {showAddTask && <AddTask onAdd={addTask}/>}
      
      { tasks.length > 0 ? (
      <Tasks 
       tasks={tasks}
       onDelete={deleteTask}
       onEdit ={EditTask}
       cancel={cancelEdit}
       taskId ={editTaskId}
       onUpdate={saveEditTask}
      onToggle={toggleReminder}/>):("No Tasks to show")}
     
      
     
    
            </react.Fragment>
          )}
          exact/>
        
      <Route path='/about' element={<About/>}/>
      </Routes>
     
      
      
      
      
      
      <Footer/>
    </div>
    </Router>
    
  ):(<Router><div className="container">
  
  <Routes>
  
  <Route path='/' element={<Login onLoginfill={onLogin}/>}/>
  <Route path='/register' element={<Registeration/>}/>
  </Routes>
  </div></Router>);
}

export default App;
