import React from 'react';
import './Card.css';

const Card = ({ card }) => {
    return (
        <li className="card">
            <img src={`https:${card.Image}`} alt={card.Name} />
            <div>
                <h3>{card.Name}</h3>
                <p>Lowest Price: {card['Lowest Price']}</p>
                <p>Highest Price: {card['Highest Price']}</p>
                <a href={card['Link Marketplace']} target="_blank" rel="noopener noreferrer">Marketplace Link</a>
            </div>
        </li>
    );
};

export default Card;
