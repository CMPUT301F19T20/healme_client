import React from 'react'
import dynamic from 'next/dynamic';

const GarminHrvLineChart = (props) => {
    const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
    const timeLabels = props.timeLabels;
    const hrvValues = props.timeValues;
    return (
        <div>
            <Chart
            type="line"
            height={300}
            series={[{
                name: 'Heart Rate Variable (Night)',
                data:hrvValues
            }]}
            options={{
                chart:{
                    type:'line',
                    zoom:{
                        enabled:false
                    }
                },
                colors: ['#0F90E4'],
                title: {
                    text: 'Night Time HRV Summary',
                    align: 'left',
                    style:{
                        fontSize:  '20px',
                        fontWeight:  'bold',
                        color:  '#263238'
                    },
                },
                
                dataLabels: {
                    enabled: true,
                    style:{
                        colors:['#1B1212']
                    }
                    
                },
                xaxis:{
                    categories:timeLabels,
                },
                yaxis:{
                    title:{
                        text:'MS'
                    }
                },

            }}
            />
        </div>
    )
}

export default GarminHrvLineChart