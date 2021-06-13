import React, { Component } from 'react';

import Card from '../../components/card/card.component'
import './users.styles.css'
class OrdersPage extends Component {
    render() {
        return (
            <div className="OrdersPage">
                <Card customClass="custom-card-sep">
                    <label>
                        Search By Name
                        <input placeholder="Search By Name" type="text" name="" id="" />
                    </label>
                </Card>
                <Card customClass="custom-card">
                <div className="top-div">
                    <h3>All available users</h3>
                </div>
                <table class="rtable">
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
                        <tr>
                            <td>17BFS91</td>
                            <td>FERRARI 276</td>
                            <td>sathakhussam@gmail.com</td>
                            <td>June 21 2021</td>
                            <td>June 21 2021</td>
                            <td>Null</td>
                            <td>17,200 AED</td>
                        </tr>
                    </tbody>
                </table>
                </Card>
            </div>
        );
    }
}

export default OrdersPage;