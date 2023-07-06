import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setLotteryData } from './redux/actions';
import axios from 'axios';
import './App.css';
import Header from './Components/Header/Header';
import LotteryList from './Components/LotteryList/LotteryList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchLotteryData = async () => {
      try {
        const response = await axios.get('https://jsonkeeper.com/b/DW6W', {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        });
        const data = response.data;
        dispatch(setLotteryData(data));
      } catch (error) {
        console.error('Error fetching lottery data:', error);
      }
    };

    fetchLotteryData();
  }, [dispatch]);

  
  return (
    <div className="app-container">
      <Header />
      <LotteryList />
    </div>
  );
};

export default App;
