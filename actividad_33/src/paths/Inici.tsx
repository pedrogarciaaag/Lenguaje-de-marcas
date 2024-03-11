import React from 'react';
import Image from 'react-bootstrap/Image';

function Inici() {
    return(
        <div>
            <h2 style={{ color: 'green' }}>Palma de Mallorca</h2>
            <p>Palma de Mallorca, la capital de la isla de Mallorca en las Islas Baleares, tiene una rica historia que se remonta a la época romana. Aquí algunos puntos destacados:</p>
            <ul>
                <li>Fundación: Palma fue fundada por los romanos en el año 123 a.C. con el nombre de “Palmaria Palmensis”.</li>
                <li>Influencias culturales: A lo largo de los siglos, ha sido influenciada por los romanos, los árabes y los cristianos, lo que se refleja en su arquitectura, gastronomía y tradiciones.</li>
            </ul>
            <Image src="https://www.ponderosabeach.com/wp-content/uploads/F-Palma-Guide-shopping-to-do-mallorca-Cathedral-940x456.jpg" thumbnail />
        </div>
    )
}

export default Inici;
  