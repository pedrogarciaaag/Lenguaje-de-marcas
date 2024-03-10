import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import HotelPamplona from '../images/hotelpamplona.jpg';
import UrPalacioAvenida from '../images/UrPalacioAvenida.jpg';

function Hotels() {
    return (
        <div>
            <h2>Hoteles Recomendados</h2>
            <ListGroup>
                <ListGroup.Item>
                    <Image src={HotelPamplona} fluid />
                    <h4>Hotel Pamplona</h4>
                    <p>Ubicado en el corazón de la ciudad, ofrece comodidad y elegancia.</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Image src={UrPalacioAvenida} fluid />
                    <h4>Ur Palacio Avenida</h4>
                    <p>Un hotel boutique con encanto en una ubicación céntrica.</p>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Hotels;
