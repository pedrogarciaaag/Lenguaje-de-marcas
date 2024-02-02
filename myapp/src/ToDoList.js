import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList(){
    const[tasks,setTasks] = React.useState(["Tasca 1","Tasca 2"]);

    return(
        <div>
            <h2>La meva llista de Tasques</h2>
            <ul>
                {tasks.map((task,index)=> (
                    <ToDoItem key={index} content={task} />
                ))}
            </ul>
        </div>
    );
}
export default ToDoList;