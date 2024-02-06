import React from "react";
import ToDoItem from "./ToDoItem";
import { Button } from "react-bootstrap";

function ToDoList(){
    const[tasks,setTasks] = React.useState(["Tasca 1","Tasca 2"]);

    function addTask(){
        setTasks(currentTasks => [...currentTasks,"Nueva Tarea"])
    }

    function removeTask(taskIndex){
        setTasks(currentTasks => currentTasks.filter((task, index) => index !== taskIndex))
    }

    return(
        <div>
            <h2>La meva llista de Tasques</h2>
            <ul>
                {tasks.map((task,index)=> (
                    <ToDoItem key={index} content={task} removeTask={() => removeTask(index)} />
                ))}
            </ul>
            <Button variant ="succes" onClick={addTask} style={{color: 'white'}}>
                Añadir tarea
            </Button>
        </div>
    );
}
export default ToDoList;