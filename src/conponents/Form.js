import React from "react";

const Form = ({setinputtext,todo,dos, settodo,inputtext,setStatus}) =>{
  const handleKeyPress = document.getElementById('textinput')
  
  if(handleKeyPress !=null)
  {
    
    handleKeyPress.addEventListener("keypress", (e)=>{
      
      if(e.key==='Enter')
      {
        submittodoHandler()
      }
    })
  }
    const  inputTextHander = (e) =>{
      setinputtext(e.target.value)
    }
    const submittodoHandler = (e) => {
      //e.prevenDefault()
      //console.log(e)
      settodo(prev => {
        const newtodo = [
          ...todo,{
            text : inputtext,
            id: Math.random()*1000,
            completed : false
          }
        ]
        
        //Save to local storage
        const jsonTodo = JSON.stringify(newtodo)
        localStorage.setItem('todo',jsonTodo)
        return newtodo
      }
      )
      setinputtext("")
    }
    const statusHandler =(e) =>{
      console.log(e.target.value)
      setStatus(e.target.value)
    }
    return(
    <div className="formm">
      <input id="textinput"  value={inputtext} onChange={inputTextHander} type="text" className="todo-input" />
      <button onClick={submittodoHandler}  className="todo-button" type="button">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
    );
}
export default Form;