import React ,{useState}from 'react'


import {TiCancel} from 'react-icons/ti'

export const EditTag = ({task, onUpdate ,cancel}) => {
    const [id,setId] =useState(task.id);
    const [text,setText] =useState(task.text)
    const [day,setDay] =useState(task.day)
    const [reminder,setReminder] =useState(task.reminder)
    const onEdit = e =>{
        console.log(e)
        console.log(text)

        console.log(day)
        console.log(reminder)
        console.log(id)
        e.preventDefault()
        if(!text){
            alert('Please add a task')
            
        }
        onUpdate({text,day,reminder,id})
        setText('')
        setDay('')
        setReminder(false)
        setId()

    }
    return (
        <h3 style={{overflow: "auto"}}>
           <form onSubmit={onEdit}>
            <table style={{width:"100%"}} >

            <thead>
                <tr style={{textAlign: 'left'}}>
                    <th>Task</th>
                    <th>Day & Time</th> 
                    <th>Set Reminder</th>
                    <th>Save</th> 
                    <th>Cancel</th>
                </tr>
            </thead> 
            <tbody>
                <tr>
                <td>
                     <input className="mb-3" type="text" placeholder='Add Task' required="required" name ="text" value={text} onChange={e=>setText(e.target.value)} />
                </td>
                <td>
                    <input type="text" placeholder='Add Day & Time' required="required" name ="day"  value={day} onChange={e=>setDay(e.target.value)}  />
                </td>
                <td>
                    <input  type="checkbox" checked={reminder} name ="reminder" value={reminder} onChange={e=>setReminder(e.currentTarget.checked)}/>
                </td>
                <td>
                <input style={{ color: 'blue'}} type="submit" value='Save Task'/>
                </td>
                <td> 
                    <TiCancel style={{
                        color: 'grey',textAlign:'right', cursor: 'pointer'
                        }} onClick={() =>cancel(task)} />
                </td>
      
                </tr>
            </tbody>    
            </table>
            </form>
            
        </h3>
    )
}
export default EditTag 