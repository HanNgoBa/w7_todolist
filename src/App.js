import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './conponents/Form';
import Todolist from './conponents/Todolist';

function App() {
  
  //const storageTodo = JSON.parse(localStorage.getItem('todo'))
  const [inputtext,setinputtext] = useState("")
  const [todo, settodo] = useState(() =>{
    const storageTodo = JSON.parse(localStorage.getItem('todo' ?? []))
    return storageTodo;
  })
  const jsonTodo = JSON.stringify(todo)
  localStorage.setItem('todo',jsonTodo)
  const [status, setStatus] = useState("all")
  const [filterTodo, setFilterTodo] = useState([])
  
  useEffect(() => {
    filterHandler()
    
  },[todo, status])
  const filterHandler = () =>{
    switch(status){
      case "completed":
        setFilterTodo(todo.filter(dos => dos.completed===true))
        break
      case "uncompleted":
        setFilterTodo(todo.filter(dos => dos.completed===false))
        break
      default:
        setFilterTodo(todo)
        break
    }
  }
  
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form inputtext={inputtext} todo={todo} settodo={settodo} setinputtext={setinputtext} setStatus={setStatus}/>
      <Todolist settodo={settodo} todo={todo} filterTodo={filterTodo}/>
    </div>
  );
}

export default App;
