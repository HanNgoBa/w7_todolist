import React from "react";
import Todo from "./Todo";

const Todolist = ({todo,settodo, filterTodo}) =>{
  
    return(
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodo.lenght!==0 ? filterTodo.map((dos) => (
          <Todo settodo={settodo} text={dos.text} key={dos.id} dos={dos} todo={todo}/>
        )) : ""}
      </ul>
    </div>
    );
}
export default Todolist;