import React, { useState } from "react";
import './App.css';
import AddTask from "./components/AddTask";
import Button from "./components/Button";
import Tasks from "./components/Tasks";

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


  return( 
    <div>
      <div className = "container">
        <AddTask></AddTask>
        
        <Tasks tasks={tasks}></Tasks>
       

      </div>
    </div>
  )
}


//O App é o componente pai da tasks pois está renderizando a tasks

export default App ;