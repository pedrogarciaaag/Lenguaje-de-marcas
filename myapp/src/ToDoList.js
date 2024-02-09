import React from "react";
import TodoButton from "./ToDoButton";
import ToDoItem from "./ToDoItem";
import { Button } from "react-bootstrap";

function ToDoList(){
    const[tasks,setTasks] = React.useState(["Tasca 1","Tasca 2"]);

    function addTask(task){
        setTasks(currentTasks => [...currentTasks,task])
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
            <TodoButton addTask={addTask} />
        </div>
    );
}
export default ToDoList;