import React from 'react';
import { useSelector } from 'react-redux';
import LotteryCard from '../LotteryCard/LotteryCard';

const LotteryList = () => {
  const lotteryData = useSelector((state) => state.lotteryData);
  const searchText = useSelector((state) => state.searchText);
  const sortBy = useSelector((state) => state.sortBy);

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

  const sortedLotteries = sortLotteries([...filteredLotteries], sortBy);

  return (
    <div className="lottery-cards-container">
      {sortedLotteries.map((lottery) => (
        <LotteryCard key={lottery.id} lottery={lottery} />
      ))}
    </div>
  );
};

export default LotteryList;
