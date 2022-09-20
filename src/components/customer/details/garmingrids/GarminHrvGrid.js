import React from 'react'
import {Grid, Typography,Paper,Box} from '@mui/material'
import { HeaderItem,DataItem } from './GridStyle';

const GarminHrvGrid = (props) => {
    console.log(props.data)
    const overnightAvg = props.data[0].lastnightavg;
    const fiveMinsHigh = props.data[0].lastnight5minhigh;
    return (
        <div>
            <Box sx={{width:'100%'}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <HeaderItem>Overnight Average </HeaderItem>
                        <DataItem>{overnightAvg} ms</DataItem>
                    </Grid>
                    <Grid item xs={6}>
                        <HeaderItem>Highest 5 Minutes Average</HeaderItem>
                        <DataItem>{fiveMinsHigh} ms</DataItem>
                    </Grid>
                </Grid> 
            </Box>
        </div>
    )
}

export default GarminHrvGrid