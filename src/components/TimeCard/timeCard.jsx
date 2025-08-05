import React from 'react';
import './timeCard.css';
import { useEffect, useState } from 'react';
import data from '../../data/data.json';

const TimeCard = ({title, dateTime}) => {
	const [cardData, setCardData] = useState(null)

	useEffect(() => {
		const filteredData = data.filter(d => d.title==title)
		setCardData(filteredData[0])
		console.log("tets", filteredData)
	},[dateTime, title])

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
					<p className="text-xl">{title}</p>
					<button className="text-3xl">···</button>
				</div>

				<div className="mt-4 flex flex-col items-start gap-4">
					<h1 className="text-5xl">
						{cardData && (cardData?.timeframes[dateTime]?.current)}hrs
					</h1>
					<p className="prev-time">
						Last {
							{
								daily: "day",
								weekly: "week",
								monthly: "month",
							}[dateTime]
						} - {cardData && (cardData?.timeframes[dateTime]?.previous)}hrs
					</p>
				</div>
			</div>
		</div>
	);
};

export default TimeCard;