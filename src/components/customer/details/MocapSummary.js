import React from 'react';
import Collapsible from '../Collapsible';

const MocapSummary = () => {
  return (
    <div>
        <div>
            <Collapsible label="Sit to Stand" color="#0FB4E4" >
                Sit to Stand
            </Collapsible>
        </div>
        <div>
            <Collapsible label="Shoulder ROM" color="#00A36C" > 
                Shoulder ROM
            </Collapsible>
        </div>
        <div>
            <Collapsible label="Single Leg Balance" color="#E49B0F" >
                Single Leg Balance
            </Collapsible>
        </div>
        <div>
            <Collapsible label="3 Meter Gait Test" color="#D22B2B" >
                3 Meter Gait Test
            </Collapsible>
        </div>
        <div>
            <Collapsible label="2 Minute Step Test" color="#36454F" >
                2 Minute Step Test
            </Collapsible>
        </div>
    </div>
  )
}

export default MocapSummary