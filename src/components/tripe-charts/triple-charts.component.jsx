import React from 'react';

import Card from '../card/card.component'
import './triple-charts.styles.css'

import ReactApexChart from 'react-apexcharts'



function TripleCharts(props) {
    const myvar1 = {
        series: [{
          data: props.brands.values
        }],
        options: {
            fill: {
                colors: ["#f5bb11"]
            },
          chart: {
            type: 'bar',
            height: 350,
            foreColor: '#fff',

          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: props.brands.labels,
          }
        },
      };
    const myvar2 = {
        series: [{
          data: props.categories.values
        }],
        options: {
            fill: {
                colors: ["#f5bb11"]
            },
          chart: {
            type: 'bar',
            height: 350,
            foreColor: '#fff',

          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: props.categories.labels,
          }
        },
      };
    const myvar3 = {
        series: [{
          data: props.cars.values
        }],
        options: {
            fill: {
                colors: ["#f5bb11"]
            },
          chart: {
            type: 'bar',
            height: 350,
            foreColor: '#fff',

          },
          plotOptions: {
            bar: {
              borderRadius: 4,
              horizontal: true,
            }
          },
          dataLabels: {
            enabled: false
          },
          xaxis: {
            categories: props.cars.labels,
          }
        },
      };


    return (
        <div className="TripleCharts">
            <Card customClass="custom-card">
            <div id="chart">
                <ReactApexChart options={myvar1.options} series={myvar1.series} type="bar" height={300} />
            </div>
            </Card>
            <Card customClass="custom-card">
            <div id="chart">
                <ReactApexChart options={myvar2.options} series={myvar2.series} type="bar" height={300} />
            </div>
            </Card>
            <Card customClass="custom-card">
            <div id="chart">
                <ReactApexChart options={myvar3.options} series={myvar3.series} type="bar" height={300} />
            </div>
            </Card>
        </div>
    );
}

export default TripleCharts;
