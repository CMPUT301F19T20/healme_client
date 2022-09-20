import React from 'react'
import {Grid} from '@mui/material'
import {HeaderItem,DataItem} from '../garmingrids/GridStyle';
import DataTable from 'react-data-table-component';
import {cols, womenSitToStandData, menSitToStandData } from './Metrics';
import { useSelector, useDispatch} from 'react-redux';
import {changeSitToStandTableStatus} from 'src/store/slices/mocapMetricsSlice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


const SitToStand = () => {

    const dispatch = useDispatch();
    const sitToStandTableShow = useSelector((state) => state.mocapTableStatus.sitToStandShow);
    
    const handleClickOpen = () => {
        dispatch(changeSitToStandTableStatus(true))
    };
    
    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            dispatch(changeSitToStandTableStatus(false));
        }
    };
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

            <div className="tableShowButton">
                <Button onClick={handleClickOpen} sx={{marginBottom:'1rem', bgcolor:"#333", color:'white'}}>View Metrics</Button>
            </div>
            <Dialog disableEscapeKeyDown open={sitToStandTableShow} onClose={handleClose} fullWidth maxWidth="xl">
                <DialogTitle>Sit to Stand Metrics</DialogTitle>
                <DialogContent>
                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap'}}>
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
                </Box>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} sx={{color:'#333'}}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default SitToStand