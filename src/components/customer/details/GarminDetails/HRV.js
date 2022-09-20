import React from 'react'
import GarminHrvLineChart from '../../charts/GarminHrvLineChart';
import GarminHrvGrid from '../garmingrids/GarminHrvGrid'
import { useSelector} from 'react-redux';
import GarminDateSelector from '../datefilters/GarminDateSelector';

const HRV = (props) => {

    const garminHrvDate = useSelector((state) => state.garminHrvDate.date);
    const currData = props.data.find((row) => {
        return row.calendardate.slice(0,10) == garminHrvDate;
    });
    const startTime = parseInt(currData.starttimeinseconds);
    const timeConverter = (timeStamp) => {
        var a = new Date(timeStamp*1000);
        var hours = a.getHours() < 10 ? '0'+ a.getHours() : a.getHours();
        var minutes = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes()
        var seconds = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds()
        var time = hours + ":" + minutes + ":" + seconds;
        return time
    }

    const timeLabels = [];
    const timeValues = [];
    Object.keys(currData.hrvvalues).forEach(key => {
        timeLabels.push(timeConverter(parseInt(key)+startTime))
    })
    Object.values(currData.hrvvalues).forEach(value => {
        timeValues.push(value)
    })
    
    return (
        <div>
            <GarminHrvGrid data={props.data} />
            <div className='hrvContents'>
                <div className='hrvChart'>
                    <GarminHrvLineChart timeLabels={timeLabels} timeValues={timeValues} />
                </div>
                <GarminDateSelector data={props.data} currDate={garminHrvDate} type={"hrv"}/>
            </div>
        
        </div>
    )
}

export default HRV