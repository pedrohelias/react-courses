import React from 'react';
import './Task.css';
import { useHistory } from 'react-router-dom';


const Task = ({task,  handleTaskClickmodified, handleTaskDeletion}) => {
    
    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`);
    }
    
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

            <div className= "buttons-container">
                <button className = "remove-task-button" onClick={()=> handleTaskDeletion(task.id)}>x</button>
                <button className = "task-details-button" onClick = {handleTaskDetailsClick}>info</button>
            </div>

            


        </div>
    );

}


export default Task;