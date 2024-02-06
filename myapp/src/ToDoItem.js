import React from "react";

function ToDoItem({content, removeTask}){
    return (
        <li>
            {content}
            <button onClick={removeTask}>X</button>
        </li>
    )
}
export default ToDoItem