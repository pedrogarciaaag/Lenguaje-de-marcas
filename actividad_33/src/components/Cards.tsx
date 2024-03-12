import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Pizza from '../images/pizza.jpeg'
import Rodeo from '../images/rodeo.jpg'
import Mercado from '../images/mercado.jpg'
import TresMares from '../images/tresmares.jpg'
import Grill from '../images/grill.jpg'
import MarChica from '../images/marchica.jpg'

function Cards() {
  return (
    <Row xs={1} md={3} className="g-4">
        <Col>
            <Card>
            <Card.Img variant="top" src={Mercado} style={{ height: '240px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>Mercado del Olivar</Card.Title>
                <Card.Text>
                Explora este mercado cubierto para degustar productos locales como embutidos, quesos y aceitunas.
                </Card.Text>
                <Button variant="success" href='https://www.google.com/maps/place/Mercado+del+Olivar/@39.5737478,2.6509183,17z/data=!3m1!4b1!4m6!3m5!1s0x129792516a335099:0x218eeb57367f67d5!8m2!3d39.5737478!4d2.6534932!16s%2Fg%2F11ggvyqghq?hl=es&entry=ttu'>Google maps</Button>
            </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card>
            <Card.Img variant="top" src={Rodeo} style={{ height: '240px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>Rodeo Grill Ramón y Cajal</Card.Title>
                <Card.Text>
                Carne de calidad tratada sin complejos. Un clásico de la isla donde el sota caballo y rey no suele fallar. 
                </Card.Text>
                <Button variant="success" href='https://www.google.com/maps/place/Rodeo+Grill+Ram%C3%B3n+y+Cajal/@39.5753764,2.6391065,17z/data=!3m1!4b1!4m6!3m5!1s0x1297925c29c5dae5:0xc0bd44ebbc833b4d!8m2!3d39.5753723!4d2.6416814!16s%2Fg%2F11b8t56934?hl=es&entry=ttu'>Google maps</Button>
            </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card>
            <Card.Img variant="top" src={Pizza} style={{ height: '240px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>Pizza Industria</Card.Title>
                <Card.Text>
                En Pizza Industria nos gusta dibujar, nos gusta nuestra isla, Mallorca, nos gustan las frases, nuestros dixits, nos gustan los juegos y acertijos, nos gusta mucho lo que hacemos.
                </Card.Text>
                <Button variant="success" href='https://www.google.com/maps/place/Pizza+Industria+Mallorca/@39.5753966,2.6313817,15z/data=!4m10!1m2!2m1!1sPizza+Industria!3m6!1s0x1297925da52a735d:0x70f14d7a84f28413!8m2!3d39.5733654!4d2.6404551!15sCg9QaXp6YSBJbmD1c3RyaWEiA4gBAVoRIg9waXp6YSBpbmR1c3RyaWGSARBwaXp6YV9yZXN0YXVyYW504AEA!16s%2Fg%2F1tf09pks?hl=es&entry=ttu'>Google maps</Button>
            </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card>
            <Card.Img variant="top" src={TresMares} style={{ height: '240px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>Tres Mares</Card.Title>
                <Card.Text>
                Este restaurante se enfoca en la cocina Gaditana, especialmente en productos del mar. Ofrece mariscos, pescados, arroces, potajes y carnes                </Card.Text>
                <Button variant="success" href='https://www.google.es/maps/place/Tres+Mares/@39.56727,2.6258044,17z/data=!3m1!4b1!4m6!3m5!1s0x1297930795007c0d:0xa9165289e81d731b!8m2!3d39.5672659!4d2.6283793!16s%2Fg%2F11tcw2bjz_?entry=ttu'>Google maps</Button>
            </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card>
            <Card.Img variant="top" src={Grill} style={{ height: '240px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>Las Tres Palas Grill</Card.Title>
                <Card.Text>
                Este lugar ofrece carnes a la brasa y cocina mallorquina                </Card.Text>
                <Button variant="success" href='https://www.google.es/maps/place/Restaurante+las+Tres+Palas+Grill/@39.5114174,2.7536998,15.25z/data=!4m6!3m5!1s0x12979643e2afb639:0x7bd08c3ce44aba46!8m2!3d39.5117752!4d2.7559943!16s%2Fg%2F1v1n_0_v?entry=ttu'>Google maps</Button>
            </Card.Body>
            </Card>
        </Col>
        <Col>
            <Card>
            <Card.Img variant="top" src={MarChica} style={{ height: '240px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>MarChica Palma</Card.Title>
                <Card.Text>
                Este restaurante ofrece una propuesta gastronómica única en Palma. Puedes disfrutar de su gastronomía acompañada de la mejor coctelería y música                </Card.Text>
                <Button variant="success" href='https://www.google.es/maps/place/MarChica+Palma/@39.5508529,2.6204365,17z/data=!3m1!4b1!4m6!3m5!1s0x12979208bcb96e55:0xf908eb840a1b6b3f!8m2!3d39.5508488!4d2.6230114!16s%2Fg%2F11b77634zd?entry=ttu'>Google maps</Button>
            </Card.Body>
            </Card>
        </Col>
    </Row>
  );
}

export default Cards;
