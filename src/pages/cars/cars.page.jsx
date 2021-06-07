import React, { Component } from 'react';
import "./cars.styles.css"

import Card from '../../components/card/card.component'

class CarsPage extends Component {
    render() {
        return (
            <div className="OrdersPage">
                <Card customClass="custom-card">
                <div className="top-div">
                    <h3>All Available Cars</h3>
                    <a className="btn btn-primary" href="#">Add new</a>
                </div>
                <table class="rtable">
                    <thead>
                        <tr>
                        <th>Car Name</th>
                        <th>Type</th>
                        <th>Brand</th>
                        <th>Ratings</th>
                        <th>KM Included</th>
                        <th>Hourly Rate</th>
                        <th>Per Day Rate</th>
                        <th>Pre Deposit</th>
                        <th>Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>FERRARI 276</td>
                            <td>SUV</td>
                            <td>Lamborghini</td>
                            <td>4</td>
                            <td>250</td>
                            <td>170 AED</td>
                            <td>170 AED</td>
                            <td>170 AED</td>
                            <td>9876545642</td>
                        </tr>
                    </tbody>
                </table>
                </Card>
            </div>
        );
    }
}

export default CarsPage;