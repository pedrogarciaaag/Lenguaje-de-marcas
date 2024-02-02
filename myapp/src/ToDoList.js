import React from "react";
import ToDoItem from "./ToDoItem";
import { Button } from "react-bootstrap";

function ToDoList(){
    const[tasks,setTasks] = React.useState(["Tasca 1","Tasca 2"]);

    function addTask(){
        setTasks(currentTasks => [...currentTasks,"Nueva Tarea"])
    }
    return(
        <div>
            <h2>La meva llista de Tasques</h2>
            <ul>
                {tasks.map((task,index)=> (
                    <ToDoItem key={index} content={task} />
                ))}
            </ul>
            <Button variant ="succes" onClick={addTask}>
                Añadir tarea
            
            </Button>
        </div>
    );
}
export default ToDoList;