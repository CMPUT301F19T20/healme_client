import React from 'react'
import {Grid, Typography,Paper,Box} from '@mui/material'
import { styled } from '@mui/material/styles';
import { HeaderItem,DataItem } from './GridStyle';

const GarminIntensityGrid = (props) => {
    const moderateWeekly = [], intenseWeekly = [];
    for (let i=0;i<props.data.length;i+=7){
        if ((i+7) > props.data.length){
            break
        }
        moderateWeekly.push(props.data.slice(i,i+7).map(row => parseInt(row.moderateDuration)/60).reduce((partialSum,a) => partialSum+a,0));
        intenseWeekly.push(props.data.slice(i,i+7).map(row => parseInt(row.intenseDuration)/60).reduce((partialSum,a) => partialSum+a,0));
    }
    
    const avgModerate = parseInt(moderateWeekly.reduce((partialSum,a) => partialSum+a,0)/moderateWeekly.length);
    const avgVigorous = parseInt(intenseWeekly.reduce((partialSum,a) => partialSum+a,0)/intenseWeekly.length);
    
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <HeaderItem>Average Weekly Moderate Intensity</HeaderItem>
                        <DataItem>{avgModerate} mins</DataItem>
                    </Grid>
                    <Grid item xs={4}>
                        <HeaderItem>Average Weekly Vigorous Intensity</HeaderItem>
                        <DataItem>{avgVigorous} mins</DataItem>
                    </Grid>
                    <Grid item xs={4}>
                        <HeaderItem>Average Weekly Total Intensity</HeaderItem>
                        <DataItem>{avgVigorous+avgModerate*2} mins</DataItem>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default GarminIntensityGrid