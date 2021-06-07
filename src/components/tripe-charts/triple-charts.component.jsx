import React from 'react';

import Card from '../card/card.component'
import './triple-charts.styles.css'

import ReactApexChart from 'react-apexcharts'



function TripleCharts(props) {
    const myvar = {
        series: [{
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
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
            categories: ["Ferrari", "Lambor..", "Merce..", "BMW", "Benz", "mcLaren", "Masera..", "Ford", "Chevro..  "],
          }
        },
      };


    return (
        <div className="TripleCharts">
            <Card customClass="custom-card">
            <div id="chart">
                <ReactApexChart options={myvar.options} series={myvar.series} type="bar" height={300} />
            </div>
            </Card>
            <Card customClass="custom-card">
            <div id="chart">
                <ReactApexChart options={myvar.options} series={myvar.series} type="bar" height={300} />
            </div>
            </Card>
            <Card customClass="custom-card">
            <div id="chart">
                <ReactApexChart options={myvar.options} series={myvar.series} type="bar" height={300} />
            </div>
            </Card>
        </div>
    );
}

export default TripleCharts;
