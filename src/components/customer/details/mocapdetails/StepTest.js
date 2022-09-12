import React from 'react'
import {Grid, Typography,Paper,Box} from '@mui/material'
import {HeaderItem,DataItem} from '../GridStyle';
import DataTable from 'react-data-table-component';
import {cols, womenStepdata, menStepdata} from './Metrics';


const StepTest = () => {
    return (
        <div>
            <Box sx={{ width: '100%', marginBottom:'1rem' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                        <HeaderItem>Repetitions</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={3}>
                        <HeaderItem>Failed Repetitions</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={3}>
                        <HeaderItem>Steps</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={3}>
                        <HeaderItem>Rests</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '100%', display:'flex',justifyContent:'space-around',marginBottom:'1rem'}}>
                <Box sx={{width:'45%'}}>
                    <DataTable
                        title={'2 Minute Step Test (reps) Normative Data - Men'}
                        columns={cols}
                        data={menStepdata}
                        subHeader
                        persistTableHead
                    />
                </Box>
                <Box sx={{width:'45%'}}>
                    <DataTable
                        title={'2 Minute Step Test (reps) Normative Data - Women'}
                        columns={cols}
                        data={womenStepdata}
                        subHeader
                        persistTableHead
                    />
                </Box>
            </Box>
        </div>
    )
}

export default StepTest