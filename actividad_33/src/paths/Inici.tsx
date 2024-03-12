import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function Inici() {
    return(
        <div >
            <h2 style={{ color: 'green', textAlign:'center' }}>Palma de Mallorca</h2>
            <p>Palma de Mallorca, la capital de la isla de Mallorca en las Islas Baleares, tiene una rica historia que se remonta a la época romana. Aquí algunos puntos destacados:</p>
            <ul>
                <li>Fundación: Palma fue fundada por los romanos en el año 123 a.C. con el nombre de “Palmaria Palmensis”.</li>
                <li>Influencias culturales: A lo largo de los siglos, ha sido influenciada por los romanos, los árabes y los cristianos, lo que se refleja en su arquitectura, gastronomía y tradiciones.</li>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Image src="https://www.ponderosabeach.com/wp-content/uploads/F-Palma-Guide-shopping-to-do-mallorca-Cathedral-940x456.jpg" thumbnail />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center',margin:'40px' }}>
                <Button href='https://pedrogarciaaag.github.io/Lenguaje-de-marcas/Actividad_30/'>Comprar billetes</Button>
            </div>

        </div>
    )
}

export default Inici;
  