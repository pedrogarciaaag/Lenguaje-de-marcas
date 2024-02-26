import React from "react";
import { filas } from "./Lista";
import Fila from "./Fila";


function Table(){
    return <>
       <table className="table table-bordered table-dark text-center">
            <thead className="thead-light">
                <tr>
                <th className="col-md-1">Producto</th>
                    <th className="col-md-1">Cantidad</th>
                    <th className="col-md-1">Precio</th>
                    <th className="col-md-1">Tienda</th>
                    <th className="col-md-1">Notas</th>
                    <th className="col-md-1 ">Comprado</th>
                    <th className="col-md-1">Imagen</th>
                </tr>
            </thead>
            <tbody>
                {filas.map((fila, index) => <Fila key={index} fila={fila} />)}
            </tbody>
       </table>
    </>
}
export default Table;