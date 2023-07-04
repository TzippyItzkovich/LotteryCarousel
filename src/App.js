import React, { useState } from 'react';
import LotteryCard from './Components/LotteryCard/LotteryCard.js';
import './App.css';
import log5071go from './g5071.svg';

const lotteryData = [
  {
    id: 1,
    lotteryName: 'Aottery A',
    jackpot: '1,000,000',
    drawTime: '8:00 PM',
    resultDateTime: '2024-05-04 20:00:00',
    resultNumbers: [5, 10, 15, 20, 25],
    logoSrc: log5071go,
  },
  {
    id: 2,
    lotteryName: 'Lottery B',
    jackpot: '2,000,000',
    drawTime: '10:30 PM',
    resultDateTime: '2025-05-01 22:30:00',
    resultNumbers: [3, 7, 12, 18, 30],
    logoSrc: log5071go,
  },
  {
    id: 3,
    lotteryName: 'XXX',
    jackpot: '1,500',
    drawTime: '10:30 PM',
    resultDateTime: '2022-07-04 22:30:00',
    resultNumbers: [3, 7, 12, 18, 30],
    logoSrc: log5071go,
  },
  // Add more lottery data objects as needed
];

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const filteredLotteries = lotteryData.filter((lottery) => {
    return lottery.lotteryName.toLowerCase().includes(searchText.toLowerCase());
  });

  const sortLotteries = (lotteries, sortBy) => {
    switch (sortBy) {
      case 'date':
        return lotteries.sort((a, b) => new Date(a.resultDateTime) - new Date(b.resultDateTime));
      case 'jackpot':
        return lotteries.sort((a, b) => parseInt(a.jackpot.replace(/,/g, '')) - parseInt(b.jackpot.replace(/,/g, '')));
      case 'name':
        return lotteries.sort((a, b) => a.lotteryName.localeCompare(b.lotteryName));
      default:
        return lotteries;
    }
  };

  const sortedLotteries = sortLotteries(filteredLotteries, sortBy);

  return (
    <div className="app-container">
      <div className="header">
        <input
          type="text"
          placeholder="Search by lottery name..."
          value={searchText}
          onChange={handleSearchChange}
        />
        <select value={sortBy} onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="date">Date</option>
          <option value="jackpot">Jackpot</option>
          <option value="name">Lottery Name</option>
        </select>
      </div>
      <div className="lottery-cards-container">
        {sortedLotteries.map((lottery) => (
          <LotteryCard key={lottery.id} lottery={lottery} />
        ))}
      </div>
    </div>
  );
};

export default App;
