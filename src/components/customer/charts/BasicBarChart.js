import React from 'react'
import dynamic from 'next/dynamic';

const BasicBarChart = (props) => {
    const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
    const data = props.data;
    const date = props.date
    return (
        <div>
            <Chart
            type="bar"
            height={300}
            series={[{
                name:props.title,
                data:data,
            }]}
            options={{
                chart:{
                    type:'bar'
                },
                plotOptions: {
                    bar: {
                        columnWidth: '40%',
                        horizontal:false,
                        endingShape:'rounded',
                        dataLabels:{
                            position:'top'
                        }
                    }
                },
                title:{
                    text:'Daily '+props.title,
                    align:'left',
                    style:{
                        fontSize:  '20px',
                        fontWeight:  'bold',
                        color:  '#263238'
                    },
                },
                colors: [props.color],
                dataLabels: {
                    enabled: true,
                    style:{
                        colors:['#1B1212']
                    }
                    
                },
                xaxis:{
                    categories:date,
                },
                yaxis:{
                    title:{
                        text:props.text
                    }
                },
                fill:{
                    opacity:1
                }

            }}
            />
        </div>
    )
}

export default BasicBarChart