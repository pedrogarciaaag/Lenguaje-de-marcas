import React from 'react';
import Image from 'react-bootstrap/Image';

function Restaurants() {
    return (
        <div>
            <h2>Restaurantes y Gastronomía</h2>
            <ul>
                <li>Mercado del Olivar: Explora este mercado cubierto para degustar productos locales como embutidos, quesos y aceitunas.
                <Image src="https://www.ponderosabeach.com/wp-content/uploads/F-Palma-Guide-shopping-to-do-mallorca-Cathedral-940x456.jpg" thumbnail />
                </li>
                <li>Tapas y paella: Prueba las tapas tradicionales y la deliciosa paella en los restaurantes locales.
                <Image src="https://www.ponderosabeach.com/wp-content/uploads/F-Palma-Guide-shopping-to-do-mallorca-Cathedral-940x456.jpg" thumbnail />
                </li>
                <li>Mariscos frescos: No te pierdas los restaurantes que sirven mariscos frescos directamente del Mediterráneo.
                <Image src="https://www.ponderosabeach.com/wp-content/uploads/F-Palma-Guide-shopping-to-do-mallorca-Cathedral-940x456.jpg" thumbnail />
                </li>
            </ul>
        </div>
    );
}

export default Restaurants