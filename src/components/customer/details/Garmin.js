import React from 'react'
import GarminSummary from './GarminSummary';
import GarminOverallSummary from './GarminOverallSummary';


export const Garmin = (props) => {
  const avgSteps = props.overall_info.avgSteps;
  const avgStepsCategory = props.overall_info.stepsCategory;
  const avgIntenseMins = props.overall_info.avgIntenseMins;
  const avgIntenseMinsCategory = props.overall_info.avgIntenseMinsCategory;
  const avgActivityTime = props.overall_info.avgActivityTime;
  const avgCalorie = props.overall_info.avgCalorie;
  const avgRestHR = props.overall_info.avgRestHR;
  const avgHighHR = props.overall_info.avgHighHR;
  const date = props.data.healthSummary.sort((a,b) =>(a.calendardate>b.calendardate)?1:-1).map(row => row.calendardate);
  console.log(date)
  return (
    <div>
      <GarminOverallSummary avgSteps={avgSteps} avgStepsCategory={avgStepsCategory} date={date}
          avgTime={avgIntenseMins} avgTimeCategory={avgIntenseMinsCategory} avgDuration={avgActivityTime}
          avgEnergy={avgCalorie} avgRestHR={avgRestHR} avgHighHR={avgHighHR} name={props.name}/>
      <GarminSummary data={props.data}/>
    </div>
  )
}
