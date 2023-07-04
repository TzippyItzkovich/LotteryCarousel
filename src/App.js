import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLotteryData } from './redux/actions';
import './App.css';
import Header from './Components/Header/Header';
import LotteryList from './Components/LotteryList/LotteryList';
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
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the setLotteryData action when the component mounts
    dispatch(setLotteryData(lotteryData));
  }, [dispatch]);

  return (
    <div className="app-container">
      <Header />
      <LotteryList />
    </div>
  );
};

export default App;
