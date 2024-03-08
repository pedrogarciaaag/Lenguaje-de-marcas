import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function BasicExample() {
  return (
    <CardGroup>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Mercado del Olivar</Card.Title>
            <Card.Text>
            Explora este mercado cubierto para degustar productos locales como embutidos, quesos y aceitunas.
            </Card.Text>
            <Button variant="primary">Google maps</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Mercado del Olivar</Card.Title>
            <Card.Text>
            Explora este mercado cubierto para degustar productos locales como embutidos, quesos y aceitunas.
            </Card.Text>
            <Button variant="primary">Google maps</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Mercado del Olivar</Card.Title>
            <Card.Text>
            Explora este mercado cubierto para degustar productos locales como embutidos, quesos y aceitunas.
            </Card.Text>
            <Button variant="primary">Google maps</Button>
        </Card.Body>
        </Card>
    </CardGroup>
  );
}

export default BasicExample;
