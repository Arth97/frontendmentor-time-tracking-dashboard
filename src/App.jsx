import { useState } from 'react';
import ProfileCard from './components/ProfileCard/profileCard';
import TimeCard from './components/TimeCard/timeCard';
import './App.css'

function App() {
  const [dateTime, setDateTime] = useState("daily")

  return (
    <div className="main-container">
      <div class="parent">
        <ProfileCard classname="profile-card" setDateTime={setDateTime}></ProfileCard>
        <TimeCard title={"Work"} dateTime={dateTime}></TimeCard>
        <TimeCard title={"Play"} dateTime={dateTime}></TimeCard>
        <TimeCard title={"Study"} dateTime={dateTime}></TimeCard>
        <TimeCard title={"Exercise"} dateTime={dateTime}></TimeCard>
        <TimeCard title={"Social"} dateTime={dateTime}></TimeCard>
        <TimeCard title={"Self Care"} dateTime={dateTime}></TimeCard>
      </div>
    </div>
  )
}

export default App
