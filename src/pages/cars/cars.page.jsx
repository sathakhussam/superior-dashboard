import React, { Component } from 'react';
import "./cars.styles.css"
import { Link } from 'react-router-dom';

import Card from '../../components/card/card.component'

class CarsPage extends Component {
    render() {
        return (
            <div className="OrdersPage">
                <Card customClass="custom-card-sep">
                    <label>
                        Search By Name
                        <input placeholder="Search By Name" type="text" name="" id="" />
                    </label>
                    <label>
                        <div className="Addspace"></div>
                        Search By Type 
                        <select name="Type" id="">
                            <option value="sports">Sports</option>
                            <option value="luxury">Luxury</option>
                            <option value="special">Special</option>
                            <option value="SUV">SUV</option>
                            <option value="convertibles">Convertibles</option>
                        </select>
                    </label>
                    <label>
                        Search By Brand
                        <select name="Type" id="">
                            <option value="Ferrari">Ferrari</option>
                            <option value="Lamborghini">Lamborghini</option>
                            <option value="Ford">Ford</option>
                            <option value="Audi">Audi</option>
                            <option value="Bentlay">Bentlay</option>
                            <option value="Cadillac">Cadillac</option>
                            <option value="Polaris">Polaris</option>
                            <option value="Range Rover">Range Rover</option>
                            <option value="BMW">BMW</option>
                            <option value="McLaren">McLaren</option>
                            <option value="Rolls Royce">Rolls Royce</option>
                            <option value="Chevrolet">Chevrolet</option>
                            <option value="Porsche">Porsche</option>
                            <option value="Lincoln">Lincoln</option>
                            <option value="Maseratti">Maseratti</option>
                            <option value="Corvette">Corvette</option>
                        </select>
                    </label>
                </Card>
                <Card customClass="custom-card">
                <div className="top-div">
                    <h3>All Available Cars</h3>
                    <Link className="btn btn-primary" to="/cars/new">Add new</Link>
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