import React from 'react';
import Collapsible from '../Collapsible';
import GaitTest from './mocapdetails/GaitTest';
import ShoulderROM from './mocapdetails/ShoulderROM';
import SingleLegBalance from './mocapdetails/SingleLegBalance';
import SitToStand from './mocapdetails/SitToStand';
import StepTest from './mocapdetails/StepTest';
import TUG from './mocapdetails/TUG';

const MocapSummary = () => {
  return (
    <div>
        <div>
            <Collapsible label="Sit to Stand" color="#0FB4E4" >
                <SitToStand />
            </Collapsible>
        </div>
        <div>
            <Collapsible label="Shoulder ROM" color="#00A36C" > 
                <ShoulderROM />
            </Collapsible>
        </div>
        <div>
            <Collapsible label="Single Leg Balance" color="#E49B0F" >
                <SingleLegBalance />
            </Collapsible>
        </div>
        <div>
            <Collapsible label="3 Meter Gait Test" color="#D22B2B" >
                <GaitTest />
            </Collapsible>
        </div>
        <div>
            <Collapsible label="2 Minute Step Test" color="#36454F" >
                <StepTest />
            </Collapsible>
        </div>
        <div>
            <Collapsible label="Time Up and Go Test(TUG)" color="#36454F" >
                <TUG />
            </Collapsible>
        </div>
    </div>
  )
}

export default MocapSummary