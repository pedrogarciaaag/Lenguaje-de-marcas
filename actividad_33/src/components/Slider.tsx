import Carousel from 'react-bootstrap/Carousel';
import Almudaina from '../images/almudaina.jpg';
import CascoAntiguo from '../images/palma3.jpg';
import Seu from '../images/seu.jpg';

function UncontrolledExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img src={Almudaina} style={{width: "100%", height: "auto"}} className="d-block mx-auto"/>
        <Carousel.Caption>
          <h3>La Almudaina</h3>
          <p>El Palacio Real de La Almudaina, construido en el siglo XIV, ofrece vistas impresionantes del mar y es un lugar imperdible para los amantes de la historia.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={CascoAntiguo} style={{width: "80%", height: "auto"}} className="d-block mx-auto"/>
        <Carousel.Caption>
          <h3>Casco antiguo</h3>
          <p>Pasea por las estrechas calles empedradas del casco antiguo, donde encontrarás tiendas encantadoras, cafeterías y edificios históricos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Seu} style={{width: "80%", height: "auto"}} className="d-block mx-auto"/>
        <Carousel.Caption>
          <h3>La Seu</h3>
          <p>La majestuosa catedral gótica de La Seu es un ícono de la ciudad y un testimonio de su pasado histórico.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
