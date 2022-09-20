import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import GarminNavbar from 'src/components/customer/details/GarminNavbar';
import { GoalBarChart } from 'src/components/customer/charts/GoalBarchart';
import GarminIntensityGrid from 'src/components/customer/details/garmingrids/GarminIntensityGrid';
import GarminIntensityList from 'src/components/customer/details/GarminIntensityList';
import BasicBarChart from '../../charts/BasicBarChart';

const Intensity = (props) => {
    
    const [period,setPeriod] = useState('4w')
    const handlePeriodState = (period) => {
        setPeriod(period);
        props.changeState(period);
    };
    
    const date = props.data.healthSummary.map(row => row['calendardate']);
    const intenseDuration = props.data.healthSummary.map(row => row['vigorousintensitydurationinseconds']);
    const moderateDuration = props.data.healthSummary.map(row => row['moderateintensitydurationinseconds']);
    
    const data = [];
    for (let i=0;i<date.length;i++){
        data.push({date:date[i],moderateDuration:moderateDuration[i],intenseDuration:intenseDuration[i]});
    }
    data.sort((a,b) => (a.date>b.date)?1:-1);
    
    let subData;
    if (period=='7d'){
        subData = data.slice(0,7);
    }else if(period=='4w'){
        subData = data.slice(0,30);
    }else{
        subData = data;
    }

    const totalMinutes = [];
    for (let i=0;i<intenseDuration.length;i++){
        totalMinutes.push(parseInt((parseInt(moderateDuration[i])+(parseInt(intenseDuration[i])*2))/60));
    }
    return (
        <div>
            <div style={{marginBottom:'1rem'}}>
                <GarminNavbar getPeriod={handlePeriodState} type={'intensity'}/>
            </div>
            <div style={{marginBottom:'1rem'}}>
                <GarminIntensityGrid data={subData} />
            </div>
            <div style={{marginBottom:'1rem',marginTop:'1rem'}}>
                <BasicBarChart 
                    data={totalMinutes} 
                    color={'#00A36C'} 
                    text={'Intensity Minutes'}
                    title={'Intensity Minutes'}
                    date={subData.map(row=>row.date)} 
                />
            </div>
            <div>
                <GarminIntensityList data={subData} goal={20}/>
            </div>
        </div>
    )
}

export default Intensity