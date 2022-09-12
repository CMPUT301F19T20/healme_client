import React from 'react'
import {Grid, Typography,Paper,Box} from '@mui/material'
import {HeaderItem,DataItem} from '../GridStyle';
import DataTable from 'react-data-table-component';
import {cols,menGaitdata,womenGaitdata} from './Metrics';


const GaitTest = () => {
    return (
        <div>
            <Box sx={{ width: '100%',marginBottom:'1rem' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <HeaderItem>Time</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={3}>
                        <HeaderItem>Average</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={3}>
                        <HeaderItem>Flagged for review</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={3}>
                        <HeaderItem>Video</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '100%', display:'flex',justifyContent:'space-around',marginBottom:'1rem'}}>
                <Box sx={{width:'45%'}}>
                    <DataTable
                        title={'3 Meter Gait Speed (m/sec) Normative Data - Men'}
                        columns={cols}
                        data={menGaitdata}
                        subHeader
                        persistTableHead
                    />
                </Box>
                <Box sx={{width:'45%'}}>
                    <DataTable
                        title={'3 Meter Gait Speed (m/sec) Normative Data - Women'}
                        columns={cols}
                        data={womenGaitdata}
                        subHeader
                        persistTableHead
                    />
                </Box>
            </Box>
        </div>
    )
}

export default GaitTest