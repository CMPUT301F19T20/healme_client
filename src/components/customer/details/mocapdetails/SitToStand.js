import React from 'react'
import {Grid, Typography,Paper,Box} from '@mui/material'
import {HeaderItem,DataItem} from '../GridStyle';
import DataTable from 'react-data-table-component';
import {cols, womenSitToStandData, menSitToStandData } from './Metrics';

const SitToStand = () => {
    return (
        <div>
            <Box sx={{ width: '100%', marginBottom:'1rem' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={2.4}>
                        <HeaderItem>Total Repetitions</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={2.4}>
                        <HeaderItem>Average seated knee angle</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={2.4}>
                        <HeaderItem>Rests</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={2.4}>
                        <HeaderItem>Flagged for review</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={2.4}>
                        <HeaderItem>Video</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '100%', display:'flex',justifyContent:'space-around',marginBottom:'1rem'}}>
                <Box sx={{width:'45%'}}>
                    <DataTable
                        title={'Normative Data for Sit to Stands (Reps) - Women'}
                        columns={cols}
                        data={womenSitToStandData}
                        subHeader
                        persistTableHead
                    />
                </Box>
                <Box sx={{width:'45%'}}>
                    <DataTable
                        title={'Normative Data for Sit to Stands (Reps) - Men'}
                        columns={cols}
                        data={menSitToStandData}
                        subHeader
                        persistTableHead
                    />
                </Box>
            </Box>
        </div>
    )
}

export default SitToStand