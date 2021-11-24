import React  from "react"
import Task from "./Task"

const Tasks = ({tasks , onDelete,onToggle}) => {

    

    return (
        <React.Fragment>
        {
            tasks.map((task,index)=>(<Task 
                key={index} 
                 task={task} 
                 onDelete={onDelete} 
                 onToggle={onToggle}/>
            ))
        }


        </React.Fragment >
    )
}
export default Tasks