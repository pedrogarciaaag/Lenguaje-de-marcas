import React, {useState} from "react";
import { Button } from 'react-bootstrap';

function TodoButton({ addTask }){
    const [task,setTask] = React.useState("");

    function click(){
        addTask(task);
        setTask("")
    }

    return(
        <div>
            <input type="text" value={task} onChange={e => setTask(e.target.value)}></input>
            <Button onClick={click}>Añadir tarea</Button>
        </div>
    )
}

export default TodoButton