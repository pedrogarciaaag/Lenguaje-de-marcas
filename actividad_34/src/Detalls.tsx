import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Raza } from './Breeds';


export interface Buscador {
  id: string
  url: string
  width: number
  height: number
}

function Detalls() {

  const [searchParams] = useSearchParams();
  const [raza, setRaza] = React.useState({} as Raza);
  const [buscadorImg, setBuscadorImg] = React.useState({} as Buscador);

  React.useEffect(() => {
    fetch("https://api.thecatapi.com/v1/breeds/" + searchParams.get("id"), {
      headers: {
        "x-api-key": "api_key=live_eHZBWpK7DPYUgjrOgSY9yAtKs8Lk0P3UFgobMhi69NmH5axT3MsI1im1I3RFIdMp"
      }
    })
      .then((response) => response.json())
      .then((data: Raza) => {
        setRaza(data)
      });
  }, [searchParams])

  React.useEffect(() => {
    fetch(" https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=" + searchParams.get("id"), {
      headers: {
        "x-api-key": "api_key=live_eHZBWpK7DPYUgjrOgSY9yAtKs8Lk0P3UFgobMhi69NmH5axT3MsI1im1I3RFIdMp"
      }
    })
      .then((response) => response.json())
      .then((data: Buscador[]) => {
        setBuscadorImg(data[0])
      });
  }, [searchParams])


  return (
    <>
      <Card style={{ width: '600px' }}>
        <Card.Img variant="top" src={buscadorImg.url} />
        <Card.Body>
          <Card.Title><h3>{raza.name}</h3></Card.Title>
          <Card.Text>
            <p>{raza.description}</p>
            <ul>
              <li><b>Origen de la raza: </b>{raza.origin}</li>
              <li><b>Esperanza de vida: </b>{raza.life_span}</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )

}

export default Detalls;