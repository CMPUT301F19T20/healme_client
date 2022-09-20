import React from 'react'
import {Grid, Typography,Paper} from '@mui/material'
import {HeaderItem,DataItem} from '../garmingrids/GridStyle';
import DataTable from 'react-data-table-component';
import {cols,menGaitdata,womenGaitdata} from './Metrics';
import { useSelector, useDispatch} from 'react-redux';
import {changeGaitTableStatus} from 'src/store/slices/mocapMetricsSlice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const GaitTest = () => {
    const dispatch = useDispatch();
    const gaitTableShow = useSelector((state) => state.mocapTableStatus.gaitTestShow);
    
    const handleClickOpen = () => {
        dispatch(changeGaitTableStatus(true))
    };
    
    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            dispatch(changeGaitTableStatus(false));
        }
    };
    
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

            <div className="tableShowButton">
                <Button onClick={handleClickOpen} sx={{marginBottom:'1rem', bgcolor:"#333", color:'white'}}>View Metrics</Button>
            </div>
            <Dialog disableEscapeKeyDown open={gaitTableShow} onClose={handleClose} fullWidth maxWidth="xl">
                <DialogTitle>Gait Test Metrics</DialogTitle>
                <DialogContent>
                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap'}}>
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
                </Box>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} sx={{color:'#333'}}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default GaitTest