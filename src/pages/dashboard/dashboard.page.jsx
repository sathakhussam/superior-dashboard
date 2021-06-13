import React, { Component } from 'react';
import './dashboard.styles.css'
// import ApexCharts, {ReactApexChart} from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

// Components
import MiniWidget from '../../components/mini-widget/mini-widget.component';
import Card from '../../components/card/card.component'
import TripleCharts from '../../components/tripe-charts/triple-charts.component'

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
          salesChart: {

            series: [{
                name: 'No Of Sales',
                data: [1001, 2212, 1212 , 183]
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
                  categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
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
        }
    }

    render() {
        return (
            <div className="Dashboard">
                <Card customClass="custom-card custom-card-searchby">
                  <label>
                    Sort By 
                  <select className="searchby" name="SearchBy" id="">
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                    <option value="custom">Custom</option>
                  </select>
                  </label>
                  <input type="date" name="" id="" className="myowninput" />
                </Card>
                <MiniWidget />
                <Card customClass="custom-card" >
                <h3>Sales Analytics</h3>
                <div id="chartContainer">
                  <ReactApexChart options={this.state.salesChart.options} series={this.state.salesChart.series} type="bar" height={350} />
                </div>
                </Card>
                <TripleCharts />
            </div>
        );
    }
}

export default Dashboard;