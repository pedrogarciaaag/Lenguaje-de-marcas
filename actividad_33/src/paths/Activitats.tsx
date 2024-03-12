import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image'

import Card from 'react-bootstrap/Card'
import Playa from '../images/playa.jpg';
import Catedral from '../images/catedral.jpg';
import Bicicleta from '../images/bicicleta.jpg';

function Activitats() {
  return (
    <div className="p-3">
      <h2 className="text-success">Actividades</h2>
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <Card.Header className="text-white bg-success">Playas</Card.Header>
            </Accordion.Header>
            <Accordion.Body>
              <Card.Body>
                Relájate en las hermosas playas de Palma, como Playa de Palma y Cala Major. Disfruta del sol, el mar azul y la arena suave. No olvides probar los deliciosos mariscos en los restaurantes cercanos.
              </Card.Body>
              <div className="d-flex justify-content-center">
                <Image src={Playa} fluid className="mt-3" style={{maxHeight: "200px"}} />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Card>
        <Card>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <Card.Header className="text-white bg-success">Visita a la Catedral</Card.Header>
            </Accordion.Header>
            <Accordion.Body>
              <Card.Body>
                Explora el interior de La Seu, una impresionante catedral gótica ubicada en el corazón de Palma. Admira sus impresionantes vitrales, su majestuoso altar y su rica historia. Asegúrate de visitar el museo adyacente para aprender más sobre su construcción y significado cultural.
              </Card.Body>
              <div className="d-flex justify-content-center">
                <Image src={Catedral} fluid className="mt-3" style={{maxHeight: "200px"}} />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Card>
        <Card>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <Card.Header className="text-white bg-success">Paseo en bicicleta</Card.Header>
            </Accordion.Header>
            <Accordion.Body>
              <Card.Body>
                Alquila una bicicleta y recorre el paseo marítimo, disfrutando de las impresionantes vistas al mar. También puedes explorar el campo circundante, con sus hermosos olivares y viñedos. Es una excelente manera de disfrutar del clima soleado y conocer la isla a tu propio ritmo.
              </Card.Body>
              <div className="d-flex justify-content-center">
                <Image src={Bicicleta} fluid className="mt-3" style={{maxHeight: "200px"}} />
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Card>
      </Accordion>
    </div>
  );
}

export default Activitats;
