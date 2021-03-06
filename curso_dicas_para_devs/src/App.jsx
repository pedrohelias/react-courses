import React, { useEffect, useState } from "react";
import './App.css';
import AddTask from "./components/AddTask";
import Button from "./components/Button";
import Tasks from "./components/Tasks";
import {v4 as uuidv4} from "uuid";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";
import axios from "axios"; //para fazer requisição http para a API, é necessário fazer a requisição logo quando a página é montada

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
    completed: false,
    
    },

  
]); //ao utilizar um state, sempre se coloca[variavel a ser alterada, nome da função que vai altera-la]
 
  useEffect(()=>{
    console.log("foi renderizado pela primeira vez")

   const fetchTasks = async() => {

      const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit-10") //pegando tarefas da api

      setTasks(data) //setando na aplicação
    };
   
    
    //useEffect é feito para não retornar nada
    fetchTasks();
  }, []); //useEffect é um hook. Ele executa esse bloco de código sempre que uma variável dentro do useEffect muda
//para executar sempre que a tela inicia, é só deixar a lista vazia

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

  };

  const handleTaskDeletion= (taskId) => { //lidar com a adição de tasks. Precisar estar aqui para ser filho do settasks
    const newTask = tasks.filter(task => task.id !== taskId);
    setTasks(newTask);
  };

  return( 
   <Router>
      <div className = "container">
        <Header></Header>


        <Route path="/" exact render={()=>( //atenção para o parenteses, ele entrega um return
          
          <div>  
            <AddTask handleTaskAddition={handleTaskAddition}></AddTask>
            <Tasks tasks={tasks} handleTaskClickmodified={handleTaskClickmodified} handleTaskDeletion={handleTaskDeletion}></Tasks>
          </div>

        )}>

        </Route>

        <Route path="/:taskTitle" exact component={TaskDetails}> 
        




        </Route>
        
      </div>
  
    </Router>
  );
}


//O App é o componente pai da tasks pois está renderizando a tasks

export default App ;