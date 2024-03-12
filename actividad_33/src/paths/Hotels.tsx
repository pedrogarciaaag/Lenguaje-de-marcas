import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import HotelPamplona from '../images/hotelpamplona.jpg';
import UrPalacioAvenida from '../images/UrPalacioAvenida.jpg';
import Melia from '../images/melia.jpg'

function Hotels() {
    return (
        <div>
            <h2 style={{ color: 'green' }} >Hoteles Recomendados</h2>
            <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card style={{ width: '400px' }}>
                        <Card.Img variant="top" src={HotelPamplona} />
                        <Card.Body>
                            <Card.Title>Hotel Pamplona</Card.Title>
                            <Card.Text>
                                Este hotel cuenta con habitaciones insonorizadas, dotadas de baño completo con amenities, TV con pantalla plana, aire acondicionado y calefacción. Puedes elegir entre una cama de matrimonio o dos camas individuales
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '400px' }}>
                        <Card.Img variant="top" src={UrPalacioAvenida} />
                        <Card.Body>
                            <Card.Title>Ur Palacio Avenida</Card.Title>
                            <Card.Text>
                                Este hotel es un moderno establecimiento que abrió sus puertas en el año 2009 tras haberse llevado a cabo una cuidada restauración por el reconocido arquitecto Bruno Borrione, del equipo de Philippe Starck, quien logró una combinación perfecta entre diseño y confort. Los detalles y los materiales utilizados en la reconversión de este emblemático edificio que en su día y desde el año 1942 era el cine Avenida, al actual Hotel UR Palacio Avenida, lo han convertido en un referente de hotel boutique en la ciudad.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '400px' }}>
                        <Card.Img variant="top" src={Melia} />
                        <Card.Body>
                            <Card.Title>Hotel Victoria Gran Meliá</Card.Title>
                            <Card.Text>
                                Este es un hotel de cinco estrellas ubicado en el corazón del paseo marítimo, con vistas a las hermosas aguas azules de la Bahía de Palma. Las habitaciones han sido recientemente renovadas y la mayoría ofrece impresionantes vistas panorámicas
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Hotels;
