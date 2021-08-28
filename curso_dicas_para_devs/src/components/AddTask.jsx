import React from 'react';
import "./AddTask.css";
import Button from './Button';

const AddTask = () => {
    return ( 
        
        <div className="add-task-container">

            <input type="text" className="add-task-input"></input>
            <Button>adicionar</Button>

        </div>


    );
}
 
export default AddTask;