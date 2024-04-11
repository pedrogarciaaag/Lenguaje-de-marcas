import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export type Brawlers = Brawler[]

export interface Brawler {
  Nombre: string
  Nivel: number
  Disponible: boolean
  Imagen: string
}

function InfoBrawlers (){

    const[brawlers,setBrawlers] = React.useState ([] as Brawlers)

    React.useEffect(() => {
      fetch("https://raw.githubusercontent.com/pedrogarciaaag/Lenguaje-de-marcas/main/actividad_35/data.json")
        .then((response)=>response.json())
        .then((data:Brawlers)=>{
            setBrawlers(data)
        }) 
    }, [])
    
    return(
        <div>
            {brawlers.map(brawlers=>(
                <Row xs={1} md={3} className="g-4">
                <Col>
                    <Card>
                    <Card.Img variant="top" src={brawlers.Imagen} style={{ height: '200px', objectFit: 'cover' }} />
                    <Card.Body>
                        <Card.Title>{brawlers.Nombre}</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>Nivel: {brawlers.Nivel}</li>
                                <li>Disponible: {brawlers.Disponible}</li>
                            </ul>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                
            </Row>
            ))}
        </div>
    )

}

export default InfoBrawlers
