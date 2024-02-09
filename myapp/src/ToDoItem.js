import React from "react";
import { Button } from "react-bootstrap";

function ToDoItem({content, removeTask}){
    return (
        <li>
            {content}
            <Button variant="danger" onClick={removeTask}>X</Button>
        </li>
    )
}
export default ToDoItem;
