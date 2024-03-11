import React from 'react';
import Cards from '../components/Cards'

function Restaurants() {
    return (
        <div>
            <h2 style={{ color: 'green' }}>Restaurantes y Gastronomía</h2>
            <ul>
                <Cards/>
            </ul>
        </div>
    );
}

export default Restaurants