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
            customDate: "2021-02-01",
            customDate1: "2021-02-01",
        }
    }

    async componentDidMount() {
        const token = localStorage.getItem("jwt")
        const allOrders = await (await API.get("orders/", {headers: {"Authorization": `Bearer ${token}`}})).data.data
        this.setState({allOrders: allOrders, allOrderss: allOrders})
    }
    
    handleValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value}, () => {
            let myFilteredCars;
            if (this.state.searchDate == "custom") myFilteredCars = filterByDate(this.state.searchDate, this.state.allOrderss, this.state.customDate, this.state.customDate1)
            else myFilteredCars = filterByDate(this.state.searchDate, this.state.allOrderss)
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
                  <select value={this.state.searchDate} onChange={this.handleValueChange} className="searchby" name="searchDate" id="">
                    <option value="year">Yearly</option>
                    <option value="month">Monthly</option>
                    <option value="week">Weekly</option>
                    <option value="custom">Custom</option>
                  </select>
                  </label>
                  {
                    this.state.searchDate == "custom" ?
                    <div>
                      From : <input type="date" name="customDate1" value={this.state.customDate1} onChange={this.handleValueChange} id="" className="myowninput" />
                      To : <input type="date" name="customDate" value={this.state.customDate} onChange={this.handleValueChange} id="" className="myowninput" />
                    </div>
                    :
                    null
                  }
                </Card>
                </div>
                <Card customClass="custom-card">
                <div className="top-div">
                    <h3>All available orders</h3>
                    <Link className="btn btn-primary" to="orders/create/new">Place Order</Link>
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
                            <td><Link to={`/orders/${val["_id"]}`}>{val.customID}</Link></td>
                            <td>{val.carName}</td>
                            <td>{val.userEmail}</td>
                            <td>{val.bookByDays ? val.pickUpDate : "null"}</td>
                            <td>{val.bookByDays ? val.dropDate : "null"}</td>
                            <td>{val.bookByDays ? "No" : val.numberOfHours}</td>
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