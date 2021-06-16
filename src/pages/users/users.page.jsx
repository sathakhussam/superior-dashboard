import React, { Component } from 'react';
import API from '../../api/api'
import {Link} from 'react-router-dom'

import Card from '../../components/card/card.component'
import './users.styles.css'
class OrdersPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allUsers: [],
            searchName: "",
            allUserss: []
        }
    }

    async componentDidMount() {
        const token = await (await API.post("users/login", {"email": "admin@marthadark.ga", "password": "helloworld123"}))
        const allUsers = await (await API.get("users/", {headers: {"Authorization": `Bearer ${token.data.token}`}})).data.data
        this.setState({allUsers: allUsers, allUserss: allUsers})
        console.log(this.state.allUsers)
    }
    
    handleValueChange = (e) => {
        this.setState({ [e.target.name]: e.target.value}, () => {
            let myFilteredCars = this.state.allUserss.filter(val => val.name.toLowerCase().includes(this.state.searchName))
            this.setState({
                allUsers: myFilteredCars
            })
        })
    }
    

    render() {
        return (
            <div className="OrdersPage">
                <Card customClass="custom-card-sep">
                    <label>
                        Search By Name
                        <input placeholder="Search By Name" type="text" name="searchName" value={this.state.searchName} onChange={this.handleValueChange} id="" />
                    </label>
                </Card>
                <Card customClass="custom-card">
                <div className="top-div">
                    <h3>All available users</h3>
                </div>
                <table className="rtable">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Phone</th>
                        <th>Country</th>
                        <th>Pincode</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            this.state.allUsers.map((user, idx) => {
                                return <tr key={`users-idx`}>
                                    <td><Link to="/users/seperate">{user["_id"].slice(0,5)}..</Link></td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.billingDetail.country}</td>
                                    <td>{user.billingDetail.pincode}</td>
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