import React from 'react';
import {Grid} from '@mui/material';
import {HeaderItem,DataItem} from '../garmingrids/GridStyle';
import {cols,menSLBdata,womenSLBdata} from './Metrics';
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch} from 'react-redux';
import {changeSlbTableStatus} from 'src/store/slices/mocapMetricsSlice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';


const SingleLegBalance = () => {
    const dispatch = useDispatch();
    const slbTableShow = useSelector((state) => state.mocapTableStatus.slbShow);

    const handleClickOpen = () =>{
        dispatch(changeSlbTableStatus(true));
    }

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            dispatch(changeSlbTableStatus(false));
        }
    }

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
            <div className="tableShowButton">
                <Button onClick={handleClickOpen} sx={{marginBottom:'1rem', bgcolor:"#333", color:'white'}}>View Metrics</Button>
            </div>
            <Dialog disableEscapeKeyDown open={slbTableShow} onClose={handleClose} fullWidth maxWidth="xl">
                <DialogTitle>Single Leg Balance Metrics</DialogTitle>
                <DialogContent>
                <Box sx={{ width: '100%', display:'flex',justifyContent:'space-around',marginBottom:'1rem'}}>
                    <Box sx={{width:'45%'}}>
                        <DataTable
                            title={'Single Leg Balance (Sec) Normative Data - Men'}
                            columns={cols}
                            data={menSLBdata}
                            subHeader
                            persistTableHead
                        />
                    </Box>
                    <Box sx={{width:'45%'}}>
                        <DataTable
                            title={'Single Leg Balance (Sec) Normative Data - Women'}
                            columns={cols}
                            data={womenSLBdata}
                            subHeader
                            persistTableHead
                        />
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

export default SingleLegBalance