import React from 'react'
import GarminSummary from './GarminSummary';
import GarminOverallSummary from './GarminOverallSummary';


export const Garmin = (props) => {

  return (
    <div>
      <GarminOverallSummary data={props.data} name={props.name}/>
      <GarminSummary data={props.data}/>
    </div>
  )
}
