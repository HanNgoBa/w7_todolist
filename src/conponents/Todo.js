import React from "react";

const Todo = ({text,dos,todo,settodo}) => {
    
    const deleteHandler = () => {
        var todo1 = todo.filter(
            (el) => el.id !== dos.id)
            // const jsonTodo = JSON.stringify(todo1)
            // localStorage.setItem('todo',jsonTodo)
        settodo(todo1)
    }
    const completeHandler = ()=>{
        settodo(todo.map((item) => {
            if(item.id === dos.id)
            {
                return ({
                    ...item, completed: !item.completed
                })
            }
            return item
        })
        )
    }
    return (
        <div className="todo">
            <li className={`todo-item ${dos.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn"> 
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}
export default Todo;