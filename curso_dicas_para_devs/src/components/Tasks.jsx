import React from "react";
import Task from "./Task";


const Tasks  = ({tasks,  handleTaskClickmodified, handleTaskDeletion}) => {


    return(
        <div>
            

          {tasks.map(task => <Task task = {task}  handleTaskClickmodified={ handleTaskClickmodified} handleTaskDeletion = {handleTaskDeletion}> </Task>)}


        </div> 
    );
};

export default Tasks;
