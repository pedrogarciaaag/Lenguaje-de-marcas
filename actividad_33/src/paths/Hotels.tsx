import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import HotelPamplona from '../images/hotelpamplona.jpg';
import UrPalacioAvenida from '../images/UrPalacioAvenida.jpg';
import Melia from '../images/melia.jpg'

function Hotels() {
    return (
        <div >
            <h2 style={{ color: 'green' }} >Hoteles Recomendados</h2>
            <ListGroup style={{ width: '600px' }}>
                <ListGroup.Item >
                    <Image src={HotelPamplona} fluid />
                    <h4>Hotel Pamplona</h4>
                    <p>Este hotel cuenta con habitaciones insonorizadas, dotadas de baño completo con amenities, TV con pantalla plana, aire acondicionado y calefacción. Puedes elegir entre una cama de matrimonio o dos camas individuales</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Image src={UrPalacioAvenida} fluid />
                    <h4>Ur Palacio Avenida</h4>
                    <p>Este hotel es un moderno establecimiento que abrió sus puertas en el año 2009 tras haberse llevado a cabo una cuidada restauración por el reconocido arquitecto Bruno Borrione, del equipo de Philippe Starck, quien logró una combinación perfecta entre diseño y confort. Los detalles y los materiales utilizados en la reconversión de este emblemático edificio que en su día y desde el año 1942 era el cine Avenida, al actual Hotel UR Palacio Avenida, lo han convertido en un referente de hotel boutique en la ciudad. Una combinación de modernos diseños conviviendo en perfecta armonía</p>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Image src={Melia} fluid />
                    <h4>Hotel Victoria Gran Meliá</h4>
                    <p>ste es un hotel de cinco estrellas ubicado en el corazón del paseo marítimo, con vistas a las hermosas aguas azules de la Bahía de Palma. Las habitaciones han sido recientemente renovadas y la mayoría ofrece impresionantes vistas panorámicas</p>
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default Hotels;
