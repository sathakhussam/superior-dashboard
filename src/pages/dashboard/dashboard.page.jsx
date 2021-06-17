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
import {topSellingCarsWithName, topSellingCategory, topSellingBrands} from '../../api/triplegraphs'

import {ordersHome} from '../../api/ordersHome'
import SalesChart from '../../components/sales.chart.component'
// import React, { Component } from 'react';
// import { OrderHome } from './api/ordersPage';
// eslint-disable-next-line no-unused-vars

class Dashboard extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      choice: "year",
      allOrders: [],
      allUsers: [],
      MiniWidget: {
        totalRevenue: 0,
            totalOrders: 0,
            totalCustomers: 0,
            growth: 0,
          },
          salesChart: {
            labels : [],
            values : [],
          },
          brandsChart : {values: [], labels: []},
          categoryChart : {values: [], labels: []},
          carsChart : {values: [], labels: []}
        }
    }
    
    customChange = async (e) => {
      this.setState({
        [e.target.name] : e.target.value
      }, this.customChangeHandler)
    }

    customChangeHandler = async () => {
      const filteredOrders = filterByDates(this.state.choice, this.state.allOrders)
      const newArr = await ordersHome(filterByDates(this.state.choice == "custom" ? "year" : this.state.choice, this.state.allOrders), this.state.choice == "custom" ? "year" : this.state.choice)
      const ArrOfBrands = await topSellingBrands(filteredOrders)
      const ArrOfCategory = await topSellingCategory(filteredOrders)
      const ArrOfCars = await topSellingCarsWithName(filteredOrders)
      console.log(ArrOfCars)
      this.setState({
        MiniWidget: {
          ...this.state.MiniWidget,
          totalRevenue: filteredOrders.map(item => parseFloat(item.cost)).reduce((a,b) => a+b,0),
          totalOrders: filteredOrders.length,
          totalCustomers: this.state.allUsers.length,
          // growth: filteredOrders.map(item => item.cost).reduce((a,b) => a+b,0) - prevData.map(item => item.cost).reduce((a,b) => a+b,0)/prevData.map(item => item.cost).reduce((a,b) => a+b,0),
        },
        salesChart: {labels: newArr["names"], values: newArr["value"]},
        brandsChart: ArrOfBrands,
        categoryChart: ArrOfCategory,
        carsChart: ArrOfCars,
      })
    }
 
    async componentDidMount() {
      try {
      const token = await API.post("users/login", {"email": "admin@marthadark.ga", "password": "helloworld123"})
      this.setState({token: token.data.token})
      const allOrders = await (await API.get("orders/", {headers: {"Authorization": `Bearer ${token.data.token}`}})).data.data
      const allUsers = await (await API.get("users/", {headers: {"Authorization": `Bearer ${token.data.token}`}})).data.data
      this.setState({
        allOrders,allUsers
      })
      const filteredOrders = filterByDates(this.state.choice, this.state.allOrders)
      const newArr = await ordersHome(filterByDates("week", this.state.allOrders), "week")
      const ArrOfBrands = await topSellingBrands(filteredOrders)
      const ArrOfCategory = await topSellingCategory(filteredOrders)
      const ArrOfCars = await topSellingCarsWithName(filteredOrders)
      console.log(ArrOfCars)
      this.setState({
        MiniWidget: {
          ...this.state.MiniWidget,
          totalRevenue: filteredOrders.map(item => parseFloat(item.cost)).reduce((a,b) => a+b,0),
          totalOrders: filteredOrders.length,
          totalCustomers: allUsers.length,
          // growth: filteredOrders.map(item => item.cost).reduce((a,b) => a+b,0) - prevData.map(item => item.cost).reduce((a,b) => a+b,0)/prevData.map(item => item.cost).reduce((a,b) => a+b,0),
        },
        salesChart: {labels: newArr["names"], values: newArr["value"]},
        brandsChart: ArrOfBrands,
        categoryChart: ArrOfCategory,
        carsChart: ArrOfCars,
      })
    } catch(e) {
      console.log(e)
    }
    }

    render() {
        return (
            <div className="Dashboard">
                <Card customClass="custom-card custom-card-searchby">
                  <label>
                    Sort By 
                  <select value={this.state.choice} onChange={this.customChange} className="searchby" name="choice" id="">
                    <option value="year">Yearly</option>
                    <option value="month">Monthly</option>
                    <option value="week">Weekly</option>
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
                <TripleCharts brands={this.state.brandsChart} categories={this.state.categoryChart} cars={this.state.carsChart} />
            </div>
        );
    }
}

export default Dashboard;