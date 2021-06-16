import React, { Component } from 'react';
import "./cars.styles.css"
import { Link } from 'react-router-dom';

import Card from '../../components/card/card.component'
import API from '../../api/api'


let allCar = [  ]
class CarsPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allCars: [],
            searchName: "",
            searchType: "",
            searchBrand: "",
        }
    }

    async componentDidMount() {
        const token = await API.post("users/login", {"email": "admin@marthadark.ga", "password": "helloworld123"})
        const allCars = await (await API.get("cars/", {headers: {"Authorization": `Bearer ${token.data.token}`}})).data.data
        allCar = allCars.cars

        this.setState({allCars: allCars.cars})
    }
    
    handleValueChange = (e) => {
        // if (e.target.name == "searchName") this.setState({ [e.target.name]: e.target.value, allCars: allCar.filter(val => val.name.toLowerCase().includes(e.target.value)) });
        // if (e.target.name == "searchType") this.setState({ [e.target.name]: e.target.value, allCars: allCar.filter(val => val.type.toLowerCase().includes(e.target.value)) });
        this.setState({ [e.target.name]: e.target.value}, () => {
            // let myFilteredCars;
            // if ()
            let myFilteredCars = allCar.filter(val => val.name.toLowerCase().includes(this.state.searchName))
            console.log(myFilteredCars)
            myFilteredCars = myFilteredCars.filter(val => val.type.toLowerCase().includes(this.state.searchType))
            console.log(myFilteredCars)
            myFilteredCars = myFilteredCars.filter(val => val.brand.includes(this.state.searchBrand))
            console.log(myFilteredCars)
            this.setState({
                allCars: myFilteredCars
            })
        })
    }
    
    render() {

        return (
            <div className="OrdersPage">
                <Card customClass="custom-card-sep">
                    <label>
                        Search By Name
                        <input value={this.state.searchName} onChange={this.handleValueChange} placeholder="Search By Name" type="text" name="searchName" id="" />
                    </label>
                    <label>
                        <div className="Addspace"></div>
                        Search By Type 
                        <select value={this.state.searchType} onChange={this.handleValueChange} name="searchType" id="">
                            <option value="">Select Type</option>
                            <option value="sports">Sports</option>
                            <option value="luxury">Luxury</option>
                            <option value="special">Special</option>
                            <option value="SUV">SUV</option>
                            <option value="convertibles">Convertibles</option>
                        </select>
                    </label>
                    <label>
                        Search By Brand
                        <select name="searchBrand" value={this.state.searchBrand} onChange={this.handleValueChange} id="">
                            <option value="">Select Brand</option>
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
                        {
                            this.state.allCars.map((car, idx) => {
                            console.log("here")
                            return <tr key={`carsid-${idx}`}>
                                <td><Link to="/cars/seperate">{car.name}</Link></td>
                                <td>{car.type}</td>
                                <td>{car.brand}</td>
                                <td>{car.ratings}</td>
                                <td>{car.KMIncluded}</td>
                                <td>{car.hourlyRate}</td>
                                <td>{car.perDayRate}</td>
                                <td>{car.preDeposit}</td>
                                <td>{car.contact}</td>
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

export default CarsPage;