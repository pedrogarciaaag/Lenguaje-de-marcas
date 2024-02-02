import React, {useState} from "react";

function TodoButton(){
    const [cont,setCont] = React.useState(0);
    const [palabra,setPalabra] = React.useState("hola")

    function click(){
        setCont(prevCont => prevCont +1);
    }

    return(
        <div>
            <p>{cont}</p>
            <button onClick={click}>Click</button>
        </div>
    )
}

export default TodoButton