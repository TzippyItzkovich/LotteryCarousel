// // App.js

import React, { useState } from 'react';
import LotteryCard from './Components/LotteryCard/LotteryCard.js';
import './App.css'; // Import the CSS file for the App component
import log5071go from './g5071.svg';

const lotteryData = [
  {
    id: 1,
    lotteryName: 'Lottery A',
    jackpot: '1,000,000',
    drawTime: '8:00 PM',
    resultDateTime: '2023-07-04 20:00:00',
    resultNumbers: [5, 10, 15, 20, 25],
    logoSrc: log5071go,
  },
  {
    id: 2,
    lotteryName: 'Lottery B',
    jackpot: '2,000,000',
    drawTime: '10:30 PM',
    resultDateTime: '2023-07-04 22:30:00',
    resultNumbers: [3, 7, 12, 18, 30],
    logoSrc: log5071go,
  },
  // Add more lottery data objects as needed
];


const App = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredLotteries = lotteryData.filter((lottery) => {
    return lottery.lotteryName.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="app-container">
      <input
        type="text"
        placeholder="Search by lottery name..."
        value={searchText}
        onChange={handleSearchChange}
      />
      <div className="lottery-cards-container">
        {filteredLotteries.map((lottery) => (
          <LotteryCard key={lottery.id} lottery={lottery} />
        ))}
      </div>
    </div>
  );
};

export default App;



