import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useSelector, useDispatch} from 'react-redux';
import { changeSleepDate } from 'src/store/slices/garminSleepDateSlice';
import { changeHrvDate } from 'src/store/slices/garminHrvDateSlice';


const GarminDateSelector = (props) => {
    const dispatch = useDispatch();
    const currDate = props.currDate;
    const selectDateHandler = (event) => {
        if (props.type == "sleep"){
            dispatch(changeSleepDate(event.target.value));
        }else if(props.type == "hrv"){
            dispatch(changeHrvDate(event.target.value));
        }
    }
    const datelists = props.data.map(row => (
    <MenuItem value={row.calendardate.slice(0,10)}>{row.calendardate.slice(0,10)}</MenuItem>))

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Date</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currDate}
                    label="date"
                    onChange={selectDateHandler}
                >
                    {datelists}
                </Select>
            </FormControl>
        </div>
    )
}

export default GarminDateSelector