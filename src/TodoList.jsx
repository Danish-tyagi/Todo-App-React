import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./TodoList.css"
export default function TodoList() {
    let [todos, setTodos] = useState([{ task:"Sample-Task" , id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {

        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone:false}]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
    let deleteTodo = (id) => {
         setTodos(() => todos.filter((prevTodos) => prevTodos.id != id));
    };

    let markAllDone = () =>  {
        setTodos((prevTodos) => 
         prevTodos.map((todo) => {
            return {
                ...todo,
                isDone: true,
            }
         }))
    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => 
         prevTodos.map((todo) => {
            if(todo.id == id) {
            return {
                ...todo,
                isDone: true,
            } 
        } else {
                return todo;
        }
        }))
    }

    return(
        <div className="cont">
            <input id="input"
            placeholder="Add new task"  
            value={newTodo} 
            onChange={updateTodoValue}>
            </input>
            <br />
            <button onClick={addNewTask} id="btn" className="addbtn">Add Task</button>
            <br /><br /><br /><br />
            <hr style={{background: "rgb(160, 7, 160)" , height: ' 2px'}}></hr>
            <h2>Task Todo </h2>
            <ul className="list">
                {todos.map((todo) => (

                    <li key={todo.id} >
                        <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)} id="btn" >delete</button>
                        <button onClick={() => markAsDone(todo.id)} id="btn" className="btn1">Mark As Done</button>
                        </li>
                ))}
            </ul>
            <br />
            <button onClick={markAllDone} id="btn">Mark As All Done</button>
        </div>
    );

}