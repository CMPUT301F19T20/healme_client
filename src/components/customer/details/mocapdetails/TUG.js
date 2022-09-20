import React from 'react'
import {Grid, Typography,Paper,Box} from '@mui/material'
import {HeaderItem,DataItem} from '../garmingrids/GridStyle';

const TUG = () => {
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <HeaderItem>Total time to complete test</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={6}>
                        <HeaderItem>Gait aid used</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default TUG