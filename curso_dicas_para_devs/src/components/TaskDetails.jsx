import React from 'react';
import Button from "./Button";
import { useHistory, useParams } from 'react-router-dom';
import "./TaskDetails.css"

const TaskDetails = () => {
    
    const params = useParams();

    console.log(params);
   
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();//vai fazer o botao voltar
    }

    return ( 
        
        <div>

            <div className="back-button-details">
                <Button onClick={handleBackButtonClick}>Voltar</Button>



            </div>
            <div className="Task-Details-Container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam mollitia dolores fugiat iste nesciunt quam.</p>

            </div>

        </div>
    
    
        );
}
 
export default TaskDetails;