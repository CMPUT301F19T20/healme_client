import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';

const Detail_navbar = (props) => {
    const name = props.firstName+' '+props.lastName;
    const currPage = props.currPage;

    const generalState = currPage=='general' ? true : false;
    const mocapState = currPage=='mocap' ? true : false;
    const foodState = currPage=='foodrx' ? true : false;
    const garminState = currPage=='garmin' ? true : false;
    const surveyState = currPage=='survey' ? true : false;

    const router = useRouter();
    const redirect = (category) => {
        const pathname = '/customers/' + props.firstName + '/' +category;
        router.push({
            pathname:pathname,
            query:{'firstname':props.firstName,'lastname':props.lastName}
        },pathname)
    }
    return (

    <nav className="nav">
        <h1 className="title"> {name} </h1>
        <ul>
            <li>
                <a style={{fontSize:generalState?'25px':'15px', fontWeight:generalState?'bold':'normal'}} onClick={() => redirect('')}>General</a>
            </li>

            <li>
                <a style={{fontSize:mocapState?'25px':'15px', fontWeight:mocapState?'bold':'normal'}}onClick={() => redirect('lightbuzz')}>Motion Analysis</a>
            </li>
        
            <li>
                <a style={{fontSize:foodState?'25px':'15px', fontWeight:foodState?'bold':'normal'}}onClick={() => redirect('foodrx')}>Food Intake</a>
            </li>
            <li>
                <a style={{fontSize:garminState?'25px':'15px', fontWeight:garminState?'bold':'normal'}}onClick={() => redirect('garmin')}>Garmin</a>
            </li>
            
            <li>
                <a style={{fontSize:surveyState?'25px':'15px', fontWeight:surveyState?'bold':'normal'}}onClick={() => redirect('survey')}>Survey</a>
            </li>
        </ul>
    </nav>
  )
}

export default Detail_navbar;