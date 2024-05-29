import React from 'react';
import Card from '../card/Card';
import './Collection.css';

const Collection = ({ collection }) => {
    return (
        <div className="collection">
            <h2>{collection.Name}</h2>
            <p>Release Date: {collection['Release Date']}</p>
            <a href={collection.Link} target="_blank" rel="noopener noreferrer">Collection Link</a>
            <ul className="cards">
                {collection.Cards.map((card, cardIndex) => (
                    <Card key={cardIndex} card={card} />
                ))}
            </ul>
        </div>
    );
};

export default Collection;
