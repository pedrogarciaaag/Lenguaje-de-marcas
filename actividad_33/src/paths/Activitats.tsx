import Accordion from 'react-bootstrap/Accordion';
import Image from 'react-bootstrap/Image'
import Playa from '../images/playa.jpg';
import Catedral from '../images/catedral.jpg';
import Bicicleta from '../images/bicicleta.jpg';

function BasicExample() {
  return (
    <div>
      <h2 style={{ color: 'green' }} >Activitades</h2>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Playas</Accordion.Header>
                <Accordion.Body>
                Relájate en las hermosas playas de Palma, como Playa de Palma y Cala Major. Disfruta del sol, el mar azul y la arena suave. No olvides probar los deliciosos mariscos en los restaurantes cercanos.
                </Accordion.Body>
                <Image src={Playa} fluid />
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Visita a la Catedral</Accordion.Header>
                <Accordion.Body>
                Explora el interior de La Seu, una impresionante catedral gótica ubicada en el corazón de Palma. Admira sus impresionantes vitrales, su majestuoso altar y su rica historia. Asegúrate de visitar el museo adyacente para aprender más sobre su construcción y significado cultural.
                </Accordion.Body>
                <Image src={Catedral} fluid />
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Paseo en bicicleta</Accordion.Header>
                <Accordion.Body>
                Alquila una bicicleta y recorre el paseo marítimo, disfrutando de las impresionantes vistas al mar. También puedes explorar el campo circundante, con sus hermosos olivares y viñedos. Es una excelente manera de disfrutar del clima soleado y conocer la isla a tu propio ritmo.
                </Accordion.Body>
                <Image src={Bicicleta} fluid />
              </Accordion.Item>
            </Accordion>
      </div>
  );
}

export default BasicExample;
