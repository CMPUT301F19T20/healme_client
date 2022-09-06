import React from 'react'
import HikingIcon from '@mui/icons-material/Hiking';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import {Grid, Typography,Paper,Box} from '@mui/material'
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const GarminOverallSummary = (props) => {
    const stepsDesc = "Step Count";
    const intensityDesc = "Intensity";
    const activitiesDesc = "Activity Output";
    const heartrateDesc = "Heart Rate (HR)"
    const stepFirstText = "Average Daily Step Count: " + props.avgSteps + " steps";
    const stepSecondText = "Fitness Category: " + props.avgStepsCategory;
    const intensityFirstText = "Average Daily Intensity Duration: " + props.avgTime + " mins";
    const intensitySecondText = "Fitness Category: " + props.avgTimeCategory;
    const activityFirstText = "Average Daily Activity Duration: " + props.avgDuration + " mins";
    const activitySecondText = "Average Daily Caloric Output: " + props.avgEnergy + " kcal";
    const heartFirstText = "Average Daily Resting HR: " + props.avgRestHR + " bpm";
    const heartSecondText = "Average Daily High HR: " + props.avgHighHR + " bpm";
    const date = props.date;
    
    return (
        <div>
            <div className='title'>
                <h1>Garmin Daily Averages</h1>
            </div>
            <div className='date'>
                <h3>Date: {date[0]} to {date.at(-1)}</h3>
            </div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid className="category" item xs={6}>
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
                    <Grid className="category" item xs={6}>
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
                    <Grid className="category" item xs={6}>
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
                    <Grid className="category" item xs={6}>
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