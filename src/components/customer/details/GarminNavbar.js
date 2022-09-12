import React, { useEffect,useState } from 'react'
import {AppBar, Toolbar, IconButton, Typography, Stack, Button} from "@mui/material"
import HikingIcon from '@mui/icons-material/Hiking';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';

const GarminNavbar = (props) => {
    const [currPeriod, setCurrPeriod] = useState('4w')
    const getCurrPeriod = (period) => {
        props.getPeriod(period);
        setCurrPeriod(period)
    };
    

    var icon,text,curr_color;
    if (props.type == 'steps'){
        icon = <HikingIcon />;
        text = 'Step Count';
        curr_color = '#0FB4E4';
    }else if (props.type == 'intensity'){
        icon = <AccessAlarmIcon />;
        text = 'Intensity Minutes';
        curr_color = '#00A36C';
    }else if(props.type == 'activity'){
        icon = <DirectionsBikeIcon />;
        text = 'Activities Tracked';
        curr_color = '#E49B0F';
    }else{
        icon = <FavoriteIcon />
        text = 'Heart Rate';
        curr_color = '#D22B2B'
    }

    const currIs7d = currPeriod=='7d' ? true : false;
    const currIs4w = currPeriod=='4w' ? true : false;
    const currIs1y = currPeriod=='1y' ? true : false;
    
    return (
        <div>
            <AppBar position='static' sx={{bgcolor:"inherit"}}>
                <Toolbar sx={{display:'flex', justifyContent:'center'}}>
                    <div style={{alignItems:'center', marginRight:'1rem'}}>
                        <h5 style={{color:'#474244'}}>Select Period:</h5>
                    </div>
                    <Stack direction='row' spacing={5}>
                        <Button  
                            onClick={() => getCurrPeriod('7d')}
                            sx={{
                                bgcolor:currIs7d?'#474244':'inherit',
                                color:currIs7d?'inherit':'#474244'
                            }}
                         >7d</Button>
                        <Button 
                            onClick={() => getCurrPeriod('4w')}
                            sx={{
                                bgcolor:currIs4w?'#474244':'inherit',
                                color:currIs4w?'inherit':'#474244'
                            }}
                        >4w</Button>
                        <Button  
                            onClick={() => getCurrPeriod('1y')}
                            sx={{
                                bgcolor:currIs1y?'#474244':'inherit',
                                color:currIs1y?'inherit':'#474244'
                            }}
                        >1y</Button>
                    </Stack>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default GarminNavbar

