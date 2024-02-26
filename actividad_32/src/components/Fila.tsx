import React from "react";

export interface FilaProps {
    producto: string,
    cantidad: number ,
    precio: number,
    tienda: string,
    notas: string ,
    comprado: Boolean,
    imagen: string, 
}

const Fila : React.FC<{fila: FilaProps}> = ({fila}) => (
    <tr>
        <td>{fila.producto}</td>
        <td>{fila.cantidad}</td>
        <td>{fila.precio}</td>
        <td>{fila.tienda}</td>
        <td>{fila.notas}</td>
        <td>{fila.comprado ? 'Sí' : 'No'}</td>
        <td><img src={fila.imagen} alt={fila.producto} style={{width: "200px", height: "150px"}} /></td>
    </tr>
)

export default Fila;
