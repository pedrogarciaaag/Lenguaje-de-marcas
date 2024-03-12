import React from 'react';

export type Razas = Root2[]

export interface Root2 {
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


function Breeds() {
    
  const [razas,setRazas] = React.useState([] as Razas);

    React.useEffect(() => {
      fetch("https://api.thecatapi.com/v1/breeds",{
        headers:{
          "x-api-key": "api_key=live_eHZBWpK7DPYUgjrOgSY9yAtKs8Lk0P3UFgobMhi69NmH5axT3MsI1im1I3RFIdMp"
        }
      })
        .then((response)=> response.json())
        .then((data:Razas)=>{
          setRazas(data)
        });
    },[])

    
    return(
      <>
      {razas.map((raza,i)=>{
        return <p>{raza.name}</p>
      })}
      </>
    )
    
  }
  
  export default Breeds;