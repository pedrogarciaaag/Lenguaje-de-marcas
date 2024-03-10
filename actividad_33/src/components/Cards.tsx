import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Pizza from '../images/pizza.jpeg'
import Rodeo from '../images/rodeo.jpg'
import Mercado from '../images/mercado.jpg'

function BasicExample() {
  return (
    <CardGroup>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Mercado} />
        <Card.Body>
            <Card.Title>Mercado del Olivar</Card.Title>
            <Card.Text>
            Explora este mercado cubierto para degustar productos locales como embutidos, quesos y aceitunas.
            </Card.Text>
            <Button variant="primary" href='https://www.google.com/maps/place/Mercado+del+Olivar/@39.5737478,2.6509183,17z/data=!3m1!4b1!4m6!3m5!1s0x129792516a335099:0x218eeb57367f67d5!8m2!3d39.5737478!4d2.6534932!16s%2Fg%2F11ggvyqghq?hl=es&entry=ttu'>Google maps</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Rodeo} />
        <Card.Body>
            <Card.Title>Rodeo Grill Ramón y Cajal</Card.Title>
            <Card.Text>
            Carne de calidad tratada sin complejos. Un clásico de la isla donde el sota caballo y rey no suele fallar. 
            </Card.Text>
            <Button variant="primary" href='https://www.google.com/maps/place/Rodeo+Grill+Ram%C3%B3n+y+Cajal/@39.5753764,2.6391065,17z/data=!3m1!4b1!4m6!3m5!1s0x1297925c29c5dae5:0xc0bd44ebbc833b4d!8m2!3d39.5753723!4d2.6416814!16s%2Fg%2F11b8t56934?hl=es&entry=ttu'>Google maps</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={Pizza} />
        <Card.Body>
            <Card.Title>Pizza Industria</Card.Title>
            <Card.Text>
            En Pizza Industria nos gusta dibujar, nos gusta nuestra isla, Mallorca, nos gustan las frases, nuestros dixits, nos gustan los juegos y acertijos, nos gusta mucho lo que hacemos.
            </Card.Text>
            <Button variant="primary" href='https://www.google.com/maps/place/Pizza+Industria+Mallorca/@39.5753966,2.6313817,15z/data=!4m10!1m2!2m1!1sPizza+Industria!3m6!1s0x1297925da52a735d:0x70f14d7a84f28413!8m2!3d39.5733654!4d2.6404551!15sCg9QaXp6YSBJbmR1c3RyaWEiA4gBAVoRIg9waXp6YSBpbmR1c3RyaWGSARBwaXp6YV9yZXN0YXVyYW504AEA!16s%2Fg%2F1tf09pks?hl=es&entry=ttu'>Google maps</Button>
        </Card.Body>
        </Card>
    </CardGroup>
  );
}

export default BasicExample;
