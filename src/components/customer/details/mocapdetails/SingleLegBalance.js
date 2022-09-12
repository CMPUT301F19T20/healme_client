import React from 'react';
import {Grid, Typography,Paper,Box} from '@mui/material';
import {HeaderItem,DataItem} from '../GridStyle';
import {cols,menSLBdata,womenSLBdata} from './Metrics';
import DataTable from 'react-data-table-component';


const SingleLegBalance = () => {
    return (
        <div>
            <Box sx={{ width: '100%', marginBottom:'1rem'}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={2}>
                        <HeaderItem>Total time balanced</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={2}>
                        <HeaderItem>Sway in hips</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={2}>
                        <HeaderItem>Sway in shoulders</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={2}>
                        <HeaderItem>Rotation of spine</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={2}>
                        <HeaderItem>Lean</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={2}>
                        <HeaderItem>Video</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ width: '100%', display:'flex',justifyContent:'space-around',marginBottom:'1rem'}}>
                <Box sx={{width:'45%'}}>
                    <DataTable
                        title={'Single Leg Balance (Seconds) Normative Data - Men'}
                        columns={cols}
                        data={menSLBdata}
                        subHeader
                        persistTableHead
                    />
                </Box>
                <Box sx={{width:'45%'}}>
                    <DataTable
                        title={'Single Leg Balance (Seconds) Normative Data - Women'}
                        columns={cols}
                        data={womenSLBdata}
                        subHeader
                        persistTableHead
                    />
                </Box>
            </Box>
        </div>
    )
}

export default SingleLegBalance