import React from 'react';
import { Badge } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

function Activitats() {
    return (
        <div>
            <h2>Actividades
                <Badge bg="success"></Badge>
            </h2>
            <ul>
                <li>Playas: Relájate en las hermosas playas de Palma, como Playa de Palma y Cala Major.</li>
                <li>Visita a la Catedral: Explora el interior de La Seu y admira sus impresionantes vitrales.</li>
                <li>Paseo en bicicleta: Alquila una bicicleta y recorre el paseo marítimo o explora el campo circundante. </li>
            </ul>
        </div>
    );
}

export default Activitats