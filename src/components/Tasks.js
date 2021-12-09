import React  from "react"
import Task from "./Task"
import EditTag from "./EditTag"

const Tasks = ({tasks , onDelete,onEdit,onToggle,onUpdate,cancel,taskId}) => {

    

    return (
        <React.Fragment>
        {
            tasks.map((task,index)=>(  <React.Fragment key={index}>
                {taskId === task.id ? (<EditTag  task={task} onUpdate ={onUpdate}cancel={cancel} taskId={taskId}/>):
                (<Task  task={task} onDelete={onDelete} onEdit ={onEdit}onToggle={onToggle}/>)}
                
           </React.Fragment >
            ))
        }


        </React.Fragment >
    )
}
export default Tasks