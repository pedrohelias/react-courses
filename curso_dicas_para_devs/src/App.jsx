import React, { useState } from "react";
import './App.css';
import AddTask from "./components/AddTask";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import {v4 as uuidv4} from "uuid";

const App = () => {
  //let mensagem = "olá mundo!";
  const [tasks, setTasks] = useState([ //lista de objetos

    {
    id: "1",
    title: "Estudar programação!",
    completed: false,

    },

    {  
    
    id: "2",
    title: "Ler Livros",
    completed: true,
    
    },

  
]); //ao utilizar um state, sempre se coloca[variavel a ser alterada, nome da função que vai altera-la]
  const handleTaskClickmodified = (taskId) => {
    const newTasks = tasks.map((task)=>{
      if(task.id === taskId) return {...task, completed: !task.completed}
      return task;
    });

    setTasks(newTasks);

  };
  const handleTaskAddition = (taskTitle) => { //lidar com a adição de tasks
    const newTask = [...tasks,{ //...tasks significa tudo que está em task
      id: uuidv4(),
      title: taskTitle,
      completed: false
    }]

    setTasks(newTask);

  }

  return( 
    <div>
      <div className = "container">
        <AddTask handleTaskAddition={handleTaskAddition}></AddTask>
        
        <Tasks tasks={tasks}  handleTaskClickmodified = { handleTaskClickmodified}></Tasks>
       

      </div>
    </div>
  )
}


//O App é o componente pai da tasks pois está renderizando a tasks

export default App ;