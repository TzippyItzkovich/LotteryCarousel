import React, { useState } from 'react';
import './LotteryCard.css';

const LotteryCard = ({ lottery }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  const renderBlueSide = () => {
    return (
      <div className="blue-side">
        <div className="left-side">
          <img className="lottery-logo" src={lottery.logoSrc} alt={lottery.lotteryName} />
        </div>
        <div className="right-side">
          <h3 className="jackpot">{lottery.jackpot}</h3>
          <p className="draw-time">Draw Time: {lottery.drawTime}</p>
          <p className="lottery-name">{lottery.lotteryName}</p>
          <div className="button-section">
            <button className="card-link" onClick={handleLinkClick}>
              Link to another page
            </button>
            <button className="flip-btn" onClick={handleFlip}>
              Result
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  
  

  const renderResultSide = () => {
    return (
      <div className="result-side">
        <p className="result-datetime">Static Date/Time: {lottery.resultDateTime}</p>
        <div className="result-numbers">
          {lottery.resultNumbers.slice(0, 8).map((number, index) => (
            <span key={index} className="result-ball">{number}</span>
          ))}
        </div>
        <button className="card-link" onClick={handleLinkClick}>Link to another page</button>
        <button className="flip-btn" onClick={handleFlip}>Back</button>
      </div>
    );
  };

  return (
    <div
      className={`lottery-card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="card-inner">
        <div className="card-front">
          {renderBlueSide()}
        </div>
        <div className="card-back">
          {renderResultSide()}
        </div>
      </div>
    </div>
  );
};

export default LotteryCard;
