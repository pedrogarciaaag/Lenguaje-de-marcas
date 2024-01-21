function añadir(){
    let añadir = document.createElement("li");
    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    añadir.appendChild(checkbox);

    let escribir = document.getElementById("escribir").value;
    let texto = document.createTextNode(escribir);
    añadir.appendChild(texto);

    if (escribir ===""){
        alert("Escribe algo")
    }
    else{
        document.getElementById("lista").appendChild(añadir);
    }

    let span = document.createElement("span");
    let cruz = document.createTextNode(" X");
    span.className = "cerrar";
    span.appendChild(cruz);
    añadir.appendChild(span);

    span.onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


function filtrar(tipo) {
    let lista = document.getElementById("lista");
    let tareas = Array.from(lista.children);
    tareas.forEach(tarea => {
        switch(tipo) {
            case 'todas':
                tarea.style.display = "list-item";
                break;
            case 'activas':
                if (tarea.firstChild.checked) {
                    tarea.style.display = "none";
                } else {
                    tarea.style.display = "list-item";
                }
                break;
            case 'completadas':
                if (tarea.firstChild.checked) {
                    tarea.style.display = "list-item";
                } else {
                    tarea.style.display = "none";
                }
                break;
        }
    });
}
