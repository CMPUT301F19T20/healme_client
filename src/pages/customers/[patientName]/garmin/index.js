import React, { useEffect, useState } from 'react'
import Detail_navbar from 'src/components/customer/detail-navbar'
import { patient_name } from '../index'
import { garminData } from 'src/components/customer/PageTable'
import { Garmin } from 'src/components/customer/details/Garmin'
import { useRouter } from 'next/router'

const UserGarmin = () => {

  const [garminData,setGarminData]=useState();

  useEffect(() => {
    const firstname = sessionStorage.getItem('currPatient')
    async function getData(){
      const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify({firstName:firstname})
      };
      const data = await fetch('http://localhost:4000/patientDetails/garminData', requestOptions)
      .then(res => {
          if (res.ok){
              return res.json();
          }
          if(!res || !res.ok || res.status >= 400){
              return;
          }
      })
      .then(data => {
          if (data){
              return data;
          }
      })
      setGarminData(data);
      return data;
    };
    getData();
  },[])

  if (garminData!=undefined){
  
    return (
      <div>
          <Detail_navbar firstName={garminData.firstName} lastName={garminData.lastName} currPage={'garmin'}/>
          <Garmin data={garminData} name={garminData.firstName+garminData.lastName}/>
      </div>
    )
  }else{
    return null;
  }
}


export default UserGarmin