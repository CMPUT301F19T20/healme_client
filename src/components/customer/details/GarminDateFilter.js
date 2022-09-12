import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function GarminDateFilter(props) {
  console.log(props)
  const [open, setOpen] = React.useState(false);
  const [startDate, setStartDate] = React.useState(props.date[0]);
  const [endDate, setEndDate] = React.useState(props.date[props.date.length-1]);
  const startDates = props.date;
  const endDates = props.date;
  const validEnd = endDates.slice(startDates.indexOf(startDate));
  const validEndItems = [];
  const startDatesItems = [];
  for (let i=0;i<validEnd.length;i++){
      validEndItems.push(<MenuItem key={i} value={validEnd[i]}>{validEnd[i]}</MenuItem>)
  }
  for (let i=0;i<startDates.length;i++){
    startDatesItems.push(<MenuItem key={i} value={startDates[i]}>{startDates[i]}</MenuItem>)
  } 

  const handleStartChange = (event) => {
      setStartDate(event.target.value);
      props.getStartDate(event.target.value)
  };

  const handleEndChange = (event) => {
    setEndDate(event.target.value);
    props.getEndDate(event.target.value)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleConfirm = (event, reason) => {
    if (reason !== 'backdropClick') {
      props.getStartDate(startDate);
      props.getEndDate(endDate);
      setOpen(false);
    }
  };

  

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <div className='date' style={{marginRight:'8rem'}}>
        <h2 style={{marginRight:'10px'}}>From:{startDate}</h2>
        <h2>To:{endDate}</h2>
      </div>
      <Button onClick={handleClickOpen} sx={{marginBottom:'1rem', bgcolor:"#333", color:'white'}}>Select Date</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Select Date Period</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-dialog-select-label">Start Date</InputLabel>
                <Select
                    labelId="demo-dialog-select-label"
                    id="demo-dialog-select"
                    value={startDate}
                    onChange={handleStartChange}
                    input={<OutlinedInput label="startDate" />}
                >
                    {startDatesItems}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">End Dates</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={endDate}
                onChange={handleEndChange}
                input={<OutlinedInput label="endDate" />}
              >
                {validEndItems}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleConfirm} sx={{color:'#333'}}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
