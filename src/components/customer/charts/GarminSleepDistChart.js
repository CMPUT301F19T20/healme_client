import React from 'react'
import dynamic from 'next/dynamic';

const GarminSleepDistChart = (props) => {
    const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
    const distribution = props.distribution;
    const timeLabels = props.timeLabels;
    console.log(distribution)
    return (
        <div>
            <Chart
            type="area"
            height={300}
            series={[{
                name: 'Sleep Quality Distribution',
                data:distribution,
            }
            ]}
            options={{
                chart:{
                    type:'area',
                    zoom:{
                        enabled:false
                    }
                },
                stroke:{
                    curve:'straight'
                },
                colors: ['#0F90E4','#E40F2F'],
                // title: {
                //     text: 'Sleep Quality Duration Distribution',
                //     align: 'left',
                //     style:{
                //         fontSize:  '20px',
                //         fontWeight:  'bold',
                //         color:  '#263238'
                //     },
                // },
                
                dataLabels: {
                    enabled: false,
                    style:{
                        colors:['#1B1212']
                    }
                    
                },
                labels:timeLabels,
                legend:{
                    horizontalAlign:'left'
                },
                yaxis:{
                    labels:{
                        formatter: function(val,index){
                            if (val==3){
                                return "Deep"
                            }
                            if(val==4){
                                return "Light"
                            }
                            if(val==5){
                                return "REM"
                            }
                            if(val==6){
                                return "Awake"
                            }
                        }
                    }
                }
                
                
            }}
            />
        </div>
    )
}

export default GarminSleepDistChart