import React, { Component } from 'react';
import "./orders.styles.css"
import { Link } from 'react-router-dom';
import API from '../../api/api'
import Card from '../../components/card/card.component'
import filterByDate from '../../api/filterbyDate'

class OrdersPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allOrders: [],
            searchDate: "",
            allOrderss: [],
            customDate: "2021-01-01",
        }
    }

    async componentDidMount() {
        const token = await (await API.post("users/login", {"email": "admin@marthadark.ga", "password": "helloworld123"}))
        const allOrders = await (await API.get("orders/", {headers: {"Authorization": `Bearer ${token.data.token}`}})).data.data
        this.setState({allOrders: allOrders, allOrderss: allOrders})
    }
    
    handleValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value}, () => {
            let myFilteredCars;
            if (this.state.searchDate == "custom") myFilteredCars = filterByDate(this.state.searchDate, this.state.allOrderss, this.state.customDate)
            myFilteredCars = filterByDate(this.state.searchDate, this.state.allOrderss)
            console.log(myFilteredCars)
            this.setState({
                allOrders: myFilteredCars
            })
        })
    }

    render() {
        return (
            <div className="OrdersPage">
                <div>
                <Card customClass="custom-card custom-card-searchby">
                  <label>
                    Sort By 
                  <select className="searchby" name="searchDate" value={this.state.searchDate} onChange={this.handleValueChange}>
                    <option value="week">Weekly</option>
                    <option value="month">Monthly</option>
                    <option value="year">Yearly</option>
                    <option value="custom">Custom</option>
                  </select>
                  </label>
                  {
                      this.state.searchDate == "custom" ? <input type="date" name="customDate" value={this.state.searchDate} onChange={this.handleValueChange} id="" className="myowninput" /> : null
                  }
                </Card>
                </div>
                <Card customClass="custom-card">
                <div className="top-div">
                    <h3>All available users</h3>
                    <Link className="btn btn-primary" href="#">Place Order</Link>
                </div>
                <table className="rtable">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Car Name</th>
                        <th>User Email</th>
                        <th>Pickup Date</th>
                        <th>Drop Date</th>
                        <th>No Of Hours</th>
                        <th>Total Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.allOrders.map((val, idx) => {
                        return <tr key={`orders-id-${idx}`}>
                            <td>{val["_id"].slice(0,5)}..</td>
                            <td>{val.carName}</td>
                            <td>sathakhussam@gmail.com</td>
                            <td>{val.bookByDays ? val.pickUpDate : "null"}</td>
                            <td>{val.bookByDays ? val.dropDate : "null"}</td>
                            <td>{val.bookByDays ? "null" : val.noOfHours}</td>
                            <td>{val.cost} AED</td>
                        </tr>
                            })
                        }
                    </tbody>
                </table>
                </Card>
            </div>
        );
    }
}

export default OrdersPage;