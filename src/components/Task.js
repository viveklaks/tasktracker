import React from 'react'
import {RiDeleteBin5Line} from 'react-icons/ri'
import {FiEdit} from 'react-icons/fi'

export const Task = ({task, onDelete ,onEdit, onToggle}) => {
    return (
        <div className={`task ${task.reminder? "reminder":""}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3 ><div style={{textAlign:'left',flex: 4}}>{task.text}</div>
            <RiDeleteBin5Line style={{
                color: 'red',textAlign:'right', cursor: 'pointer',flex: 1
            }} onClick={() =>onDelete(task.id)} />
            <FiEdit style={{
                color: 'grey',textAlign:'right', cursor: 'pointer'
            }} onClick={() =>onEdit(task.id)}/>
            </h3>
            <p>{task.day}</p>
            <p>{task.reminder? "reminder":""}</p>
        </div>
    )
}
export default Task