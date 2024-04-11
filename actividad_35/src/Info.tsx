import React from 'react';
import Button from 'react-bootstrap/Button';
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

function infoBrawlers (){

    const[brawlers,setBrawlers] = React.useState ([] as Brawlers)

    React.useEffect

}

export default infoBrawlers
