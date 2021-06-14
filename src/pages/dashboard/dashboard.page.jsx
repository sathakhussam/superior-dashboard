import React, { Component } from 'react';
import './dashboard.styles.css'
// import ApexCharts, {ReactApexChart} from 'apexcharts'

// Components
import MiniWidget from '../../components/mini-widget/mini-widget.component';
import Card from '../../components/card/card.component'
import TripleCharts from '../../components/tripe-charts/triple-charts.component'
import API from '../../api/api'
import filterByDates from '../../api/filterbyDate';
// import {RevenueWidget, OrderWidget} from '../../api/miniWidget'
// import {topSellingCarsWithName, topSellingCategory, topSellingBrands} from '../../api/triplegraphs'

import {ordersHome} from '../../api/ordersHome'
import SalesChart from '../../components/sales.chart.component'
// import React, { Component } from 'react';
// import { OrderHome } from './api/ordersPage';
// eslint-disable-next-line no-unused-vars

class Dashboard extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      MiniWidget: {
        totalRevenue: 0,
            totalOrders: 0,
            totalCustomers: 0,
            growth: 0,
          },
          salesChart: {
            labels : [],
            values : [],
          }
        }
    }
    
    async componentDidMount() {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      try {
      const token = await API.post("users/login", {"email": "admin@marthadark.ga", "password": "helloworld123"})
      this.setState({token: token.data.token})
      const allOrders = await (await API.get("orders/", {headers: {"Authorization": `Bearer ${token.data.token}`}})).data.data
      const allUsers = await (await API.get("users/", {headers: {"Authorization": `Bearer ${token.data.token}`}})).data.data
      // console.log(allUsers)
      // console.log(filterByDates("year",allOrders))
      const filteredOrders = filterByDates("year", allOrders)
      const newArr = await ordersHome(filterByDates("year", allOrders))
      console.log(newArr)
      this.setState({
        MiniWidget: {
          ...this.state.MiniWidget,
          totalRevenue: filteredOrders.map(item => parseFloat(item.cost)).reduce((a,b) => a+b,0),
          totalOrders: filteredOrders.length,
          totalCustomers: allUsers.length,
          // growth: filteredOrders.map(item => item.cost).reduce((a,b) => a+b,0) - prevData.map(item => item.cost).reduce((a,b) => a+b,0)/prevData.map(item => item.cost).reduce((a,b) => a+b,0),
        },
        salesChart: {labels: newArr["names"], values: newArr["value"]}
      })
      // const newArr = await topSellingCategory(filterByDates("year", allOrders))
      // const newArr = await topSellingBrands(filterByDates("year", allOrders))
      // console.log(newArr)

      // const orderHome = await OrderHome(filterByDates("year", allOrders), "19 May 2021", null, "Ferrari")
      // console.log(myarr)
    } catch(e) {
      console.log(e.message)
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
                <MiniWidget values={this.state.MiniWidget}/>
                <Card customClass="custom-card" >
                <h3>Sales Analytics</h3>
                <SalesChart labels={this.state.salesChart.labels} values={this.state.salesChart.values} />
                </Card>
                <TripleCharts />
            </div>
        );
    }
}

export default Dashboard;