import React from 'react'
import {Grid} from '@mui/material'
import {HeaderItem,DataItem} from '../garmingrids/GridStyle';
import {cols, womenLeftShoulderData, womenRightShoulderData, menLeftShoulderData, menRightShoulderData} from './Metrics';
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch} from 'react-redux';
import { changeShoulderTableStatus, changeShoulderLeft } from 'src/store/slices/mocapMetricsSlice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



const ShoulderROM = () => {
    
    const dispatch = useDispatch();
    const shoulderTableShow = useSelector((state) => state.mocapTableStatus.shoulderRomShow);
    const shoulderLeft = useSelector((state) => state.mocapTableStatus.shoulderRomLeft);
    const direction = shoulderLeft?'Left':'Right';

    const handleClickOpen = () =>{
        dispatch(changeShoulderTableStatus(true));
    }

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            dispatch(changeShoulderTableStatus(false));
        }
    }

    const handleChange = () =>{
        dispatch(changeShoulderLeft(!shoulderLeft))
    }

    return (
        <div>
            <Box sx={{ width: '100%',marginBottom:'1rem' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <HeaderItem>Shoulder flexion</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={4}>
                        <HeaderItem>Flagged for review</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                    <Grid item xs={4}>
                        <HeaderItem>Video</HeaderItem>
                        <DataItem>N/A</DataItem>
                    </Grid>
                </Grid>
            </Box>
            <div className="tableShowButton">
                <Button onClick={handleClickOpen} sx={{marginBottom:'1rem', bgcolor:"#333", color:'white'}}>View Metrics</Button>
            </div>
            <Dialog disableEscapeKeyDown open={shoulderTableShow} onClose={handleClose} fullWidth maxWidth="xl">
                <DialogTitle>Shoulder ROM Metrics</DialogTitle>
                <DialogContent>
                    <Button onClick={handleChange} sx={{marginBottom:'1rem', bgcolor:"#333", color:'white'}}>{direction}</Button>
                    {shoulderLeft && <Box sx={{ width: '100%', display:'flex',justifyContent:'space-around', marginBottom:'1rem'}}>
                        <Box sx={{width:'45%'}}>
                            <DataTable
                                title={'Left Shoulder Flexion Normative Data (Degrees) – Men'}
                                columns={cols}
                                data={menLeftShoulderData}
                                subHeader
                                persistTableHead
                            />
                        </Box>
                        <Box sx={{width:'45%'}}>
                            <DataTable
                                title={'Left Shoulder Flexion Normative Data (Degrees) – Women'}
                                columns={cols}
                                data={womenLeftShoulderData}
                                subHeader
                                persistTableHead
                            />
                        </Box>
                    </Box>}
                    {!shoulderLeft &&<Box sx={{ width: '100%', display:'flex',justifyContent:'space-around',marginBottom:'1rem'}}>
                        <Box sx={{width:'45%'}}>
                            <DataTable
                                title={'Right Shoulder Flexion Normative Data (Degrees) – Men'}
                                columns={cols}
                                data={menRightShoulderData}
                                subHeader
                                persistTableHead
                            />
                        </Box>
                        <Box sx={{width:'45%'}}>
                            <DataTable
                                title={'Right Shoulder Flexion Normative Data (Degrees) – Women'}
                                columns={cols}
                                data={womenRightShoulderData}
                                subHeader
                                persistTableHead
                            />
                        </Box>
                    </Box>}
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} sx={{color:'#333'}}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default ShoulderROM