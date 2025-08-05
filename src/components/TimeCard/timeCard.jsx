import React from 'react';
import './timeCard.css';

const TimeCard = ({title}) => {
  const classMap = {
    Work: 'work-bg',
    Play: 'play-bg',
    Study: 'study-bg',
    Exercise: 'exercise-bg',
    Social: 'social-bg',
    'Self Care': 'selfcare-bg',
  };

  const backgroundClass = classMap[title] || '';

  return (
    <div className={`time-card ${backgroundClass}`}>
      <div className="inner-card">
        <div className="flex flex-row justify-between">
          <p>{title}</p>
          <button>...</button>
        </div>

        <div className="mt-7 flex flex-col items-start gap-4">
          <h1>TIME</h1>
          <p>last dateTime</p>
        </div>
      </div>
    </div>
  );
};

export default TimeCard;