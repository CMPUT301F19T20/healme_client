import React from 'react'
import {Grid, Typography,Paper,Box,MenuItem, Button} from '@mui/material'
import {HeaderItem,DataItem} from '../GridStyle';
import {cols, womenLeftShoulderData, womenRightShoulderData, menLeftShoulderData, menRightShoulderData} from './Metrics';
import DataTable from 'react-data-table-component';


const ShoulderROM = () => {
    const [isLeft, setisLeft] = React.useState(true);
    const handleChange = () => {
        setisLeft(isLeft => !isLeft);
    }

    const direction = isLeft?'Left':'Right';

    return (
        <div>
            <Box sx={{ width: '100%',marginBottom:'' }}>
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
            <Button onClick={handleChange} sx={{marginBottom:'1rem', bgcolor:"#333", color:'white'}}>{direction}</Button>
            {isLeft && <Box sx={{ width: '100%', display:'flex',justifyContent:'space-around', marginBottom:'1rem'}}>
                <Box sx={{width:'40%'}}>
                    <DataTable
                        title={'Shoulder Flexion Normative Data (Degrees) – Men Left Shoulder'}
                        columns={cols}
                        data={menLeftShoulderData}
                        subHeader
                        persistTableHead
                    />
                </Box>
                <Box sx={{width:'40%'}}>
                    <DataTable
                        title={'Shoulder Flexion Normative Data (Degrees) – Women Left Shoulder'}
                        columns={cols}
                        data={womenLeftShoulderData}
                        subHeader
                        persistTableHead
                    />
                </Box>
            </Box>}
            {!isLeft &&<Box sx={{ width: '100%', display:'flex',justifyContent:'space-around',marginBottom:'1rem'}}>
                <Box sx={{width:'40%'}}>
                    <DataTable
                        title={'Shoulder Flexion Normative Data (Degrees) – Men Right Shoulder'}
                        columns={cols}
                        data={menRightShoulderData}
                        subHeader
                        persistTableHead
                    />
                </Box>
                <Box sx={{width:'40%'}}>
                    <DataTable
                        title={'Shoulder Flexion Normative Data (Degrees) – Women Right Shoulder'}
                        columns={cols}
                        data={womenRightShoulderData}
                        subHeader
                        persistTableHead
                    />
                </Box>
            </Box>}
        </div>
    )
}

export default ShoulderROM