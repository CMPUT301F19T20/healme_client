import React from 'react'
import GarminSleepGrid from '../garmingrids/GarminSleepGrid'
import { Piechart } from '../../charts/Piechart'
import BasicBarChart from '../../charts/BasicBarChart'
import _ from 'lodash'
import GarminSleepDistChart from '../../charts/GarminSleepDistChart'
import GarminDateSelector from '../datefilters/GarminDateSelector'
import { useSelector} from 'react-redux';

const Sleep = (props) => {
    
    const garminSleepDate = useSelector((state) => state.garminSleepDate.date);
    const currData = props.data.find((row) => {
        return row.calendardate.slice(0,10) == garminSleepDate;
    });
    
    const deep = currData.deepsleepdurationinseconds;
    const light = currData.lightsleepdurationinseconds;
    const rem = currData.remsleepinseconds;
    const awake = currData.awakedurationinseconds;
    const sleepLevels = currData.sleeplevelsmap;
    const parsedSleepLevels = [];
    for (let i=0;i<currData.sleeplevelsmap.deep.length;i++){
        parsedSleepLevels.push({"type":"deep","start":sleepLevels.deep[i].startTimeInSeconds,'end':sleepLevels.deep[i].endTimeInSeconds})
    }
    for (let i=0;i<currData.sleeplevelsmap.light.length;i++){
        parsedSleepLevels.push({"type":"light","start":sleepLevels.light[i].startTimeInSeconds,'end':sleepLevels.light[i].endTimeInSeconds})
    }
    for (let i=0;i<currData.sleeplevelsmap.rem.length;i++){
        parsedSleepLevels.push({"type":"rem","start":sleepLevels.rem[i].startTimeInSeconds,'end':sleepLevels.rem[i].endTimeInSeconds})
    }
    for (let i=0;i<currData.sleeplevelsmap.awake.length;i++){
        parsedSleepLevels.push({"type":"awake","start":sleepLevels.awake[i].startTimeInSeconds,'end':sleepLevels.awake[i].endTimeInSeconds})
    }

    parsedSleepLevels.sort((a,b) => (a.start>b.start)?1:-1);
    const arrUnique = (array) => {
        var cleaned = [];
        array.forEach(element => {
            var unique = true;
            cleaned.forEach(item => {
                if (_.isEqual(element,item)) unique=false;
            })
            if (unique) cleaned.push(element)
        });
        return cleaned;
    }

    const timeConverter = (timeStamp) => {
        var a = new Date(timeStamp*1000);
        var hours = a.getHours() < 10 ? '0'+ a.getHours() : a.getHours();
        var minutes = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes()
        var seconds = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds()
        var time = hours + ":" + minutes + ":" + seconds;
        return time
    }
    const uniq = arrUnique(parsedSleepLevels);
    const timeLabels = [], values = [];
    const qualityValues = {'deep':3,'light':4,'rem':5,'awake':6}
    uniq.forEach(row => {
        console.log(row)
        timeLabels.push(timeConverter(parseInt(row.start)));
        timeLabels.push(timeConverter(parseInt(row.end)));
        values.push(qualityValues[row.type]);
        values.push(qualityValues[row.type]);
    })

    const pieSeries = [deep,light,rem,awake].map(item => parseInt(parseInt(item)/60));
    return (
        <div>
            <GarminSleepGrid deep={deep} light={light} rem={rem} awake={awake}/>
            <div className='sleep_charts'>
                <div className='sleep_quality_piechart'>
                    <h2>Sleep Quality Duration Percentage</h2>
                    <div className='quality_pct_chart'>
                        <Piechart labels={['deep','light','rem','awake']} series={pieSeries} fontSize={'10px'}/>
                    </div> 
                </div>
                <div className='sleep_quality_barchart'>
                    <h2>Sleep Quality Distribution</h2>
                    <div>
                        <GarminSleepDistChart distribution={values} timeLabels={timeLabels} />
                    </div>
                </div>
                <GarminDateSelector data={props.data} currDate={garminSleepDate} type={"sleep"}/>
            </div>
        </div>
    )
}

export default Sleep