import React, { useEffect, useState } from 'react';
import './App.css';
import cardData from './data/cardData';

function App() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setCollections(cardData);
  }, []);

  return (
    <div className="container">
      <h1>One Piece TCG Cards</h1>
      {collections.map((collection, index) => (
        <div className="collection" key={index}>
          <h2>{collection.Name}</h2>
          <p>Release Date: {collection['Release Date']}</p>
          <a href={collection.Link} target="_blank" rel="noopener noreferrer">Collection Link</a>
          <ul className="cards">
            {collection.Cards.map((card, cardIndex) => (
              <li className="card" key={cardIndex}>
                <img src={`https:${card.Image}`} alt={card.Name} />
                <div>
                  <h3>{card.Name}</h3>
                  <p>Lowest Price: {card['Lowest Price']}</p>
                  <p>Highest Price: {card['Highest Price']}</p>
                  <a href={card['Link Marketplace']} target="_blank" rel="noopener noreferrer">Marketplace Link</a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default App;
