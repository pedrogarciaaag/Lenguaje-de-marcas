document.getElementById("boton").addEventListener("click", miFuncion);

function miFuncion(){
    let añadir = document.createElement("li");
    let escribir = document.getElementById("escribir").value;
    let texto = document.createTextNode(escribir);

    añadir.appendChild(texto);
    if (escribir ===""){
        alert("Escribe algo")
    }
    else{
        document.getElementById("lista").appendChild(añadir);
    }
}
