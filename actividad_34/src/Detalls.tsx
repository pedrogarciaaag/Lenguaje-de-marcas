import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export interface Razas{
  weight: Weight
  id: string
  name: string
  cfa_url?: string
  vetstreet_url?: string
  vcahospitals_url?: string
  temperament: string
  origin: string
  country_codes: string
  country_code: string
  description: string
  life_span: string
  indoor: number
  lap?: number
  alt_names?: string
  adaptability: number
  affection_level: number
  child_friendly: number
  dog_friendly: number
  energy_level: number
  grooming: number
  health_issues: number
  intelligence: number
  shedding_level: number
  social_needs: number
  stranger_friendly: number
  vocalisation: number
  experimental: number
  hairless: number
  natural: number
  rare: number
  rex: number
  suppressed_tail: number
  short_legs: number
  wikipedia_url?: string
  hypoallergenic: number
  reference_image_id?: string
  cat_friendly?: number
  bidability?: number
}

export interface Weight {
  imperial: string
  metric: string
}


function Detalls() {
  
  const [searchParams] = useSearchParams();
  const [razas,setRazas] = React.useState({} as Razas);

    React.useEffect(() => {
      fetch("https://api.thecatapi.com/v1/breeds/" + searchParams.get("id"),{
        headers:{
          "x-api-key": "api_key=live_eHZBWpK7DPYUgjrOgSY9yAtKs8Lk0P3UFgobMhi69NmH5axT3MsI1im1I3RFIdMp"
        }
      })
        .then((response)=> response.json())
        .then((data:Razas)=>{
          setRazas(data)
        });
    },[searchParams])

    
    return(
      <>
        <Card style={{ width: '600px' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title><h3>{razas.name}</h3></Card.Title>
            <Card.Text>
            <p>{razas.description}</p>
              <ul>
                <li><b>Origen de la raza: </b>{razas.origin}</li>
                <li><b>Esperanza de vida: </b>{razas.life_span}</li>
              </ul>
            </Card.Text>
        </Card.Body>
    </Card>
      </>
    )
    
  }
  
  export default Detalls;