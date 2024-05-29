import React, { useEffect, useState } from 'react';
import './App.css';
import cardData from './data/cardData';
import Collection from './components/collection/Collection';

function App() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setCollections(cardData);
  }, []);

  return (
    <div className="container">
      <h1>One Piece TCG Cards</h1>
      {collections.map((collection, index) => (
        <Collection key={index} collection={collection} />
      ))}
    </div>
  );
}

export default App;
