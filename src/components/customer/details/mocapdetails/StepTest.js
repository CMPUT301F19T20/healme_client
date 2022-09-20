import React from 'react'
import {Grid} from '@mui/material'
import {HeaderItem,DataItem} from '../garmingrids/GridStyle';
import DataTable from 'react-data-table-component';
import {cols, womenStepdata, menStepdata} from './Metrics';
import { useSelector, useDispatch} from 'react-redux';
import {changeStepTableStatus} from 'src/store/slices/mocapMetricsSlice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



const StepTest = () => {
    const dispatch = useDispatch();
    const stepTableShow = useSelector((state) => state.mocapTableStatus.stepTestShow);
    
    const handleClickOpen = () => {
        dispatch(changeStepTableStatus(true))
    };
    
    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            dispatch(changeStepTableStatus(false));
        }
    };
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

            <div className="tableShowButton">
                <Button onClick={handleClickOpen} sx={{marginBottom:'1rem', bgcolor:"#333", color:'white'}}>View Metrics</Button>
            </div>
            <Dialog disableEscapeKeyDown open={stepTableShow} onClose={handleClose} fullWidth maxWidth="xl">
                <DialogTitle>Step Test Metrics</DialogTitle>
                <DialogContent>
                <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap'}}>
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
                </Box>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} sx={{color:'#333'}}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default StepTest