import React from 'react';
import './profileCard.css';

import { useEffect } from 'react';

const ProfileCard = ({setDateTime, dateTime}) => {

  useEffect(() => {
    console.log("dateTime", dateTime)
  })

  return (
    <div className="profile-card">
      <div className="top-card">
        <img src="public/image-jeremy.png" alt="Avatar" className="avatar" />
        <div className="mt-8 text-white text-left flex flex-col items-start gap-3">
          <p className="text-gray-400">Report for</p>
          <h1 className="text-4xl">Jeremy Robson</h1>
        </div>
      </div>

      <div className="bottom-card">
        <button onClick={setDateTime("daily")}>Daily</button>
        <button onClick={setDateTime("weekly")}>Weekly</button>
        <button onClick={setDateTime("monthly")}>Monthly</button>
      </div>
    </div>
  );
};

export default ProfileCard;