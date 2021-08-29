import React from "react";
import Task from "./Task";


const Tasks  = ({tasks,  handleTaskClickmodified}) => {


    return(
        <div>
            

          {tasks.map(task => <Task task = {task}  handleTaskClickmodified={ handleTaskClickmodified}> </Task>)}


        </div> 
    );
};

export default Tasks;
