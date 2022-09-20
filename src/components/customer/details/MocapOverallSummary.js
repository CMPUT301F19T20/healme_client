import React from 'react'
import {Box,Grid} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';

const MocapOverallSummary = (props) => {
    const mocapdata = {
        'sit_to_stand' : 1,
        'shoulder' : 1,
        'single_leg' : 1,
        'gait' : 1,
        'step' : 1
    }
    const testname = ['sit_to_stand','shoulder','single_leg','gait','step'];
    const testdone = [false,false,false,false,false];
    for (let i=0;i<testname.length;i++){
        if (mocapdata[testname[i]] != undefined){
            testdone[i] = true;
        }
    }

    return (
        <div>
            <div className='title'>
                <h1>Motion Capture Summary</h1>
            </div>
            <Box sx={{ width: '100%' }} className='summary'>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid className="category" item xs={6} md={4}>
                        <div className="sit_to_stand">
                           <div className='cate_header'>
                                <h3>Sit to Stand:</h3>
                                <h3>{testdone[0] == true ? <CheckIcon /> : <CloseIcon />}</h3>
                            </div>
                        </div>
                    </Grid>
                    <Grid className="category" item xs={6} md={4}>
                        <div className="shoulder">
                            <div className='cate_header'>
                                <h3>Shoulder ROM:</h3>
                                <h3>{testdone[1] == true ? <CheckIcon /> : <CloseIcon />}</h3>
                            </div>
                        </div>
                    </Grid>
                    <Grid className="category" item xs={6} md={4}>
                        <div className="single_leg">
                            <div className='cate_header'>
                                <h3>Single Leg Balance:</h3>
                                <h3>{testdone[2] == true ? <CheckIcon /> : <CloseIcon />}</h3>
                            </div>
                        </div>
                    </Grid>
                    <Grid className="category" item xs={6} md={4}>
                        <div className="gait">
                            <div className='cate_header'>
                                <h3>3 Meter Gait Test:</h3>
                                <h3>{testdone[3] == true ? <CheckIcon /> : <CloseIcon />}</h3>
                            </div>
                        </div>
                    </Grid>
                    <Grid className="category" item xs={6} md={4}>
                        <div className="step">
                            <div className='cate_header'>
                                <h3>2 minute Step Test:</h3>
                                <h3>{testdone[4] == true ? <CheckIcon /> : <CloseIcon />}</h3>
                            </div>
                        </div>
                    </Grid>
                    <Grid className="category" item xs={6} md={4}>
                        <div className="step">
                            <div className='cate_header'>
                                <h3>Time Up and Go Test(TUG):</h3>
                                <h3>{testdone[4] == true ? <CheckIcon /> : <CloseIcon />}</h3>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default MocapOverallSummary