import React from 'react';
import './Task.css';


const Task = ({task,  handleTaskClickmodified}) => {
    return (
//        <div className="task-container">
//    
//           {task.title}
//    
//        </div>);
        <div className = "task-container" style={task.completed ? {borderLeft: "6px solid chartreuse" }: {}}>
            <div className = "task-title" onClick={() => handleTaskClickmodified(task.id)}>
                {task.title}
            </div>


        </div>
    );

}


export default Task;