import React from 'react';
import './AuctionItem.css';

function AuctionItem({ name, price, image }) {
  return (
    <div className="auction-item">
      <img src={image} alt={name} className="car-image" />
      <h3>{name}</h3>
      <p>현재가: ₩{price.toLocaleString()}</p>
      <button onClick={() => alert(`${name}에 입찰하셨습니다!`)}>입찰하기</button>
    </div>
  );
}

export default AuctionItem;
