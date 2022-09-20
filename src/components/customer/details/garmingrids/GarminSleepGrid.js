import React from 'react'
import {Grid, Typography,Paper,Box} from '@mui/material'
import { styled } from '@mui/material/styles';
import { HeaderItem,DataItem } from './GridStyle';

const GarminSleepGrid = (props) => {
    const deep = parseInt(parseInt(props.deep)/60);
    const light = parseInt(parseInt(props.light)/60);
    const rem = parseInt(parseInt(props.rem)/60);
    const awake = parseInt(parseInt(props.awake)/60);

    const timeFormatter = (time) =>{
        const minutes = time%60;
        const hours = parseInt(time/60);
        console.log(minutes,hours)
        const ans = hours+'h '+minutes+'min';
        return ans
    }
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <HeaderItem>Deep Sleep Duration</HeaderItem>
                        <DataItem>{timeFormatter(deep)}</DataItem>
                    </Grid>
                    <Grid item xs={3}>
                        <HeaderItem>Light Sleep Duration</HeaderItem>
                        <DataItem>{timeFormatter(light)}</DataItem>
                    </Grid>
                    <Grid item xs={3}>
                        <HeaderItem>Rem Sleep Duration</HeaderItem>
                        <DataItem>{timeFormatter(rem)}</DataItem>
                    </Grid>
                    <Grid item xs={3}>
                        <HeaderItem>Awake Duration</HeaderItem>
                        <DataItem>{timeFormatter(awake)}</DataItem>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default GarminSleepGrid