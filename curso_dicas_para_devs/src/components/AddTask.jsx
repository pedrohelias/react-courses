//import React from 'react';
import React, { useState} from 'react'; //esse é o correto a se usar quando se usa State e React
//import { useState } from 'react/cjs/react.production.min';
import "./AddTask.css";
import Button from './Button';



const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState(""); //padrão string vazia

    const handleInputChange = (e) => { //feito para lidar com a alteração do input
        //console.log(e.target.value); testar via console log
        setInputData(e.target.value);
    };

    const handleTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData(""); //limpar o campo para adicionar task toda vez que se adiciona uma nova task

    };
    return ( 
        
        <div className="add-task-container">

            <input value={inputData} onChange={handleInputChange} type="text" className="add-task-input"></input>;
            <Button onClick={handleTaskClick}>adicionar</Button>;

        </div>


    );
}
 
export default AddTask;