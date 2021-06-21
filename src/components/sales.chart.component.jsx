import React from 'react';
import ReactApexChart from 'react-apexcharts'


const SalesChart = (props) => {
    let customVal = {
        series: [{
            name: 'Total Revenue',
            data: props.values
          }],
          options: {
            fill: {
              colors: ["#f5bb11"]
          },
          chart: {
            height: 350,
            type: 'bar',
              foreColor: '#fff',

              tooltip: {
                theme: 'dark',
             }
        },
        plotOptions: {
              bar: {
                borderRadius: 10,
                dataLabels: {
                  position: 'center', // top, center, bottom
                },
              }
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                return val
              },
              offsetY: -20,
              style: {
                fontSize: '12px',
                colors: ["#fff"]
              }
            },
            
            xaxis: {
              categories: props.labels,
              position: 'top',
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              },
              crosshairs: {
                fill: {
                  type: 'gradient',
                  gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                  }
                }
              },
              tooltip: {
                theme: 'dark',
                enabled: false,
              }
            },
            yaxis: {
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
                formatter: function (val) {
                  return val ;
                }
              }
            
            },
          },
          
    }

    return ( 
    <div id="chartContainer">
        <ReactApexChart options={customVal.options} series={customVal.series} type="bar" height={350} />
    </div> );
}
 


export default SalesChart;