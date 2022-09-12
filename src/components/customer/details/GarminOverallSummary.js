import React, { useState } from 'react'
import HikingIcon from '@mui/icons-material/Hiking';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import {Grid, Typography,Paper,Box} from '@mui/material'
import { styled } from '@mui/material/styles';
import GarminDateFilter from './GarminDateFilter';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const GarminOverallSummary = (props) => {
    const garminData = props.data;
    const healthSummary = garminData.healthSummary.sort((a,b) => (a.calendardate>b.calendardate?1:-1))
    const date = healthSummary.map(row => row.calendardate);
    console.log(date)

    const [startDate,setStartDate] = useState(date[0]);
    const [endDate,setEndDate] = useState(date.at(-1));
    const getStartDate = (inputStartDate) => {
        setStartDate(inputStartDate);
        console.log(startDate)
    }
    const getEndDate = (inputEndDate) => {
        setEndDate(inputEndDate);
        console.log(endDate);
    }

    const startIndex = date.indexOf(startDate);
    const endIndex = date.indexOf(endDate)
    const getDataAvg = (table,category,start,end) => {
        var total = 0;
        var item;
        for (let i=start;i<=end;i++){
          item = table[i];
          total = total + parseInt(item[category]);
        }
        var avg = parseInt(total/(end-start+1));
        return avg
      }
    
    const secToMin = (val) => {
        return parseInt(val/60);
    }
    const getRankCategory = (val) => {
        if (val<5000){
          return 'Sedentary';
        }else if(5000 <= val < 7500){
          return 'Low Active'
        }else if(7500 <= val < 10000){
          return 'Somewhat Active'
        }else if(10000 <= val < 12500){
          return 'Active'
        }else{
          return 'Highly Active'
        }
    }
    
    const avgSteps = getDataAvg(healthSummary,"steps",startIndex,endIndex);
    const stepsCategory = getRankCategory(avgSteps);
    const avgIntenseMins = secToMin(getDataAvg(healthSummary,"vigorousintensitydurationinseconds",startIndex,endIndex));
    const avgIntenseMinsCategory = getRankCategory(avgIntenseMins);
    const avgActivityTime = secToMin(getDataAvg(garminData.activitySummary,"durationinseconds",startIndex,endIndex));
    const avgCalorie = getDataAvg(healthSummary,"activekilocalories",startIndex,endIndex);
    const avgRestHR = getDataAvg(healthSummary,"restingheartrateinbeatsperminute",startIndex,endIndex);
    const avgHighHR = getDataAvg(healthSummary,"maxheartrateinbeatsperminute",startIndex,endIndex);
    
    const stepsDesc = "Step Count";
    const intensityDesc = "Intensity";
    const activitiesDesc = "Activity Output";
    const heartrateDesc = "Heart Rate (HR)"
    const stepFirstText = "Average Daily Step Count: " + avgSteps + " steps";
    const stepSecondText = "Fitness Category: " + stepsCategory;
    const intensityFirstText = "Average Daily Intensity Duration: " + avgIntenseMins + " mins";
    const intensitySecondText = "Fitness Category: " + avgIntenseMinsCategory;
    const activityFirstText = "Average Daily Activity Duration: " + avgActivityTime + " mins";
    const activitySecondText = "Average Daily Caloric Output: " + avgCalorie + " kcal";
    const heartFirstText = "Average Daily Resting HR: " + avgRestHR + " bpm";
    const heartSecondText = "Average Daily High HR: " + avgHighHR + " bpm";
    
    return (
        <div>
            <div className='date'>
                <GarminDateFilter getStartDate={getStartDate} getEndDate={getEndDate} date={date}/>
            </div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid className="category" item xs={3}>
                        <div className="steps">
                            <div className='cate_header'>
                                <HikingIcon />
                                <h3>{stepsDesc}</h3>
                            </div>
                            <div className='content'>
                                <p>{stepFirstText}</p>
                                <p>{stepSecondText}</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid className="category" item xs={3}>
                        <div className="intensity">
                            <div className='cate_header'>
                                <AccessAlarmIcon />
                                <h3>{intensityDesc}</h3>
                            </div>
                            <div className='content'>
                                <p>{intensityFirstText}</p>
                                <p>{intensitySecondText}</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid className="category" item xs={3}>
                        <div className="activity">
                            <div className='cate_header'>
                                <DirectionsBikeIcon />
                                <h3>{activitiesDesc}</h3>
                            </div>
                            <div className='content'>
                                <p>{activityFirstText}</p>
                                <p>{activitySecondText}</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid className="category" item xs={3}>
                        <div className="heartrate">
                            <div className='cate_header'>
                                <FavoriteIcon />
                                <h3>{heartrateDesc}</h3>
                            </div>
                            <div className='content'>
                                <p>{heartFirstText}</p>
                                <p>{heartSecondText}</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            
        </div>
    )
}

export default GarminOverallSummary