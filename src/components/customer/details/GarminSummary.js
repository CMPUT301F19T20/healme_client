import React, {useState} from 'react'
import Collapsible from '../Collapsible';

import Steps from 'src/components/customer/details/GarminDetails/Steps';
import Intensity from 'src/components/customer/details/GarminDetails/Intensity';
import Heartrate from 'src/components/customer/details/GarminDetails/Heartrate';
import Activities from 'src/components/customer/details/GarminDetails/Activities';
import Sleep from 'src/components/customer/details/GarminDetails/Sleep';
import HRV from './GarminDetails/HRV';


const GarminSummary = (props) => {
    console.log(props.data)
    const [stepPeriod,setStepPeriod] = useState('4w');
    const [intensityPeriod, setIntensityPeriod] = useState('4w');
    const [activityPeriod, setActivityPeriod] = useState('4w');
    const [hrPeriod, setHrPeriod] = useState('4w');

    const changeStepState = (state) => {
        setStepPeriod(state);
    }
    const changeIntensityState = (state) => {
        setIntensityPeriod(state);
    }
    const changeActivityState = (state) => {
        setActivityPeriod(state);
    }
    const changehrState = (state) => {
        setHrPeriod(state);
    }
   
    return (
        <div>
            <div>
                <Collapsible label="Step Count Summary" color="#0FB4E4" >
                    <Steps data={props.data} changeState={changeStepState}/>
                </Collapsible>
            </div>
            <div>
                <Collapsible label="Intensity Summary" color="#00A36C" > 
                    <Intensity data={props.data} color={'#00A36C'} changeState={changeIntensityState}/>
                </Collapsible>
            </div>
            <div>
                <Collapsible label="Heart Rate Summary" color="#D22B2B" >
                    <Heartrate data={props.data} changeState={changehrState}/>
                </Collapsible>
            </div>
            <div>
                <Collapsible label="Activities Summary" color="#E49B0F" >
                    <Activities data={props.data} changeState={changeActivityState}/>
                </Collapsible>
            </div>
            <div>
                <Collapsible label="Sleep Summary" color="#928989" >
                    <Sleep data={props.data.sleepSummary}/>
                </Collapsible>
            </div>
            <div>
                <Collapsible label="HRV Summary" color="#333" >
                    <HRV data={props.data.hrvSummary}/>
                </Collapsible>
            </div>
        </div>
    )
}

export default GarminSummary