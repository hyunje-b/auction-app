// src/App.js
import React from 'react';
import './App.css';
import AuctionItem from './components/AuctionItem.js';

function App() {
  const items = [
    {
      name: '현대 아반떼 AD 1.6 GDI',
      price: 5300000,
      image: 'https://via.placeholder.com/300x200?text=아반떼',
    },
    {
      name: '기아 K5 2세대 2.0 노블레스',
      price: 7200000,
      image: 'https://via.placeholder.com/300x200?text=K5',
    },
    {
      name: '쉐보레 스파크 LT',
      price: 3800000,
      image: 'https://via.placeholder.com/300x200?text=스파크',
    },
  ];

  return (
    <div className="App">
      <h1>🚗 실시간 중고차 경매장</h1>
      <div className="item-list">
        {items.map((item, idx) => (
          <AuctionItem
            key={idx}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
