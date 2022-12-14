import React from 'react'
import {Grid, Typography,Paper,Box} from '@mui/material'
import { styled } from '@mui/material/styles';
import { HeaderItem,DataItem } from './GridStyle';


const GarminHRGrid = (props) => {
    const resthr = parseInt(props.data.map(row => parseInt(row.restHR)).reduce((partialSum,a) => partialSum+a,0)/props.data.length);
    const highhr = parseInt(props.data.map(row => parseInt(row.highHR)).reduce((partialSum,a) => partialSum+a,0)/props.data.length);

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <HeaderItem>Average Resting HR </HeaderItem>
                        <DataItem>{resthr} bpm</DataItem>
                    </Grid>
                    <Grid item xs={6}>
                        <HeaderItem>Average Max HR</HeaderItem>
                        <DataItem>{highhr} bpm</DataItem>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default GarminHRGrid