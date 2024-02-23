import React from "react";
import { filas } from "./Lista";
import Fila from "./Fila";


function Table(){
    return <>
       <table className="table table-striped table-dark text-center">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Tienda</th>
                    <th scope="col">Notas</th>
                    <th scope="col">Comprado</th>
                    <th scope="col">Imagen</th>
                </tr>
            </thead>
            <tbody>
                {filas.map((fila, index) => <Fila key={index} fila={fila} />)}
            </tbody>
       </table>
    </>
}
export default Table;