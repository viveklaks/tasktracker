import React from 'react'
import { useState } from 'react'


import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const AddTask = ({onAdd}) => {
    const options = [
        'Hobby', 'Personal', 'Professional'
      ];
    const [text,setText] =useState('')
    const [category,setCategory] =useState(options[0])
    const [day,setDay] =useState('')
    const [reminder,setReminder] =useState(false)
    const onSubmit = e =>{
        console.log(e)
        e.preventDefault()
        if(!text){
            alert('Please add a task')
            
        }

        onAdd({text,category,day,reminder})
        setText('')
        setCategory(options[0])
        setDay()
        setReminder(false)

    }
 
    
    

 
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder='Add Task' value={text}  onChange={e=>setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Category</label>
                
                    <Dropdown options={options} onChange={({value})=>setCategory(value)} value={category} placeholder="Select a Category" />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type="datetime-local" placeholder='Add Day & Time'value={day} onChange={e=>setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={e=>setReminder(e.currentTarget.checked)}/>
            </div>
            <input className='btn btn-block' type="submit" value='Save Task'/>
        </form>
    )
}
export default AddTask