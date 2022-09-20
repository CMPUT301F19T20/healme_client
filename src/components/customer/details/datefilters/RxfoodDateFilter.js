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


export default function RxFoodDateFilter(props) {
  const [open, setOpen] = React.useState(false);
  const [startDate, setStartDate] = React.useState(props.datePeriods[0].date_since.slice(0,10));
  const [endDate, setEndDate] = React.useState(props.datePeriods[0].date_until.slice(0,10));
  const startDates = props.datePeriods.map(datePeriod => datePeriod.date_since.slice(0,10));
  const endDates = props.datePeriods.map(datePeriod => datePeriod.date_until.slice(0,10));
  const validEnd = endDates[startDates.indexOf(startDate)];
  const validEndItem = <MenuItem key={validEnd} value={validEnd}>{validEnd}</MenuItem>

  React.useEffect(() =>{
      setEndDate(validEnd);
  },[startDate]);

  const handleStartChange = (event) => {
      setStartDate(event.target.value);
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
      props.getDate(startDate+' to: '+endDate);
      setOpen(false);
    }
  };

  

  var startDatesItems = props.datePeriods.map(datePeriod => {

    const period = datePeriod.date_since.slice(0,10)
    return <MenuItem key={period} value={period}>{period}</MenuItem>
  });
  var endDatesItems = props.datePeriods.map(datePeriod => {

    const period = datePeriod.date_until.slice(0,10)
    return <MenuItem key={period} value={period}>{period}</MenuItem>
  });

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
                value={validEnd}
                input={<OutlinedInput label="endDate" />}
              >
                {validEndItem}
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
