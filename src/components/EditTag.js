import React ,{useState}from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from './Button';

export const EditTag = ({task, onUpdate ,cancel}) => {
    const options = [
        'Hobby', 'Personal', 'Professional'
      ];
    
    const [category,setCategory] =useState(task.category)
    const [id,setId] =useState(task.id);
    const [text,setText] =useState(task.text)
    const [day,setDay] =useState(task.day)
    const [reminder,setReminder] =useState(task.reminder)
    const onEdit = e =>{
        console.log(e)
        console.log(text)
        console.log(category)
        console.log(day)
        console.log(reminder)
        console.log(id)
        e.preventDefault()
        if(!text){
            alert('Please add a task')
            
        }
        onUpdate({text,day,category,reminder,id})
        setText('')
        setCategory(options[0])
        setDay()
        setReminder(false)
        setId()

    }
    return (
        
           <form onSubmit={onEdit}>
            
                <div className='form-control'>
                <label>Task</label>
                     <input className="mb-3" type="text" placeholder='Add Task' required="required" name ="text" value={text} onChange={e=>setText(e.target.value)} />
                </div>
                <div className='form-control'>
                <label>Category</label>
                
                    <Dropdown options={options} onChange={({value})=>setCategory(value)} value={category} placeholder="Select a Category" />
            </div>
                <div className='form-control'>
                <label>Day & Time</label> 
                    <input type="datetime-local" placeholder='Add Day & Time' required="required" name ="day"  value={day} onChange={e=>setDay(e.target.value)}  />
                </div>
                <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                    <input  type="checkbox" checked={reminder} name ="reminder" value={reminder} onChange={e=>setReminder(e.currentTarget.checked)}/>
                </div>
                
                <input className='btn btn-block' type="submit" value='Update Task'/>
                
                <Button color ={'blue'} text={'Cancel Update'} onClick={() =>cancel(task)} />
                
      
                
               
            
            </form>
            
       
    )
}
export default EditTag 