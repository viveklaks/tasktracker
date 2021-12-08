import React,{useState} from 'react';
import{Link,useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
//import { useState } from 'react'
const EditTask = ({onEdit},props) => {
    let clear = true;
    const param = useParams();
    const id = param.id;
    console.log(id)
    const [task,setTask] = useState([]);
    useEffect(()=>{
        
        
        const getTasks = async()=>{
          const tasksFromServer = await fetchTask(id)
          setTask(tasksFromServer)
    
        }
        
            getTasks()
        
        
      },[id,clear])
    
    console.log(task)
    clear = false  
        //Fetch Task
      const fetchTask = async(id)=>{
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = res.json()
        return data
      }
    
    
    
    const [text,setText] =useState(task.text)
    
    const [day,setDay] =useState(task.day)
    
    const [reminder,setReminder] =useState(task.reminder)
    
    const onSubmitUpdate = e =>{
        console.log(e)
        console.log()
       /* e.preventDefault()
        if(!text){
            alert('Please add a task')
            
        }

        onEdit({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)*/

    }
    
        return (
            <form className='add-form' onSubmit={onSubmitUpdate}>
                <div className='form-control'>
                    <label>Task</label>
                    <input type="text" placeholder='Add Task'  value={text} onChange={e=>setText(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label>Day & Time</label>
                    <input type="text" placeholder='Add Day & Time' value={day} onChange={e=>setDay(e.target.value)}/>
                </div>
                <div className='form-control form-control-check'>
                    <label>Set Reminder</label>
                    <input type="checkbox" checked={reminder}  value={reminder} onChange={e=>setReminder(e.currentTarget.checked)}/>
                </div>
                <Link to="/"><input className='btn btn-block' type="submit" value='Update Task'/></Link>
            </form>
        )
    
    
}
export default EditTask