import React, { Component } from 'react';
import API from '../../api/api'
import {Link} from 'react-router-dom'

import Card from '../../components/card/card.component'
import '../users/users.styles.css'
class OrdersPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            allUsers: [],
            searchName: "",
            searchType: "",
            newCoupon: false
        }
    }

    async componentDidMount() {
        const token = localStorage.getItem("jwt")
        const allUsers = await (await API.get("coupons/", {headers: {"Authorization": `Bearer ${token}`}})).data.data
        this.setState({allUsers: allUsers})
        // console.log(this.state.allUsers)
    }
    
    handleValueChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        
    }

    customSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem("jwt")
        const allUsers = await (await API.post("coupons/", {type: this.state.searchType, value:this.state.searchName},{headers: {"Authorization": `Bearer ${token}`}})).data.data
        const allUser = await (await API.get("coupons/", {headers: {"Authorization": `Bearer ${token}`}})).data.data
        this.setState({allUsers: allUser, searchType: "", searchName: "", newCoupon: true}, () => setTimeout(this.setState({newCoupon: false}), 1000)) 
    }

    render() {
        return (
            <div className="OrdersPage">
                <Card customClass="custom-card-sep">
                {
                    this.state.newCoupon ? 
                    <p>Coupon successfully created</p>
                    :
                    null
                }
                <form onSubmit={this.customSubmit} method="post">
                <label>
                        Value Of Coupon
                        <input value={this.state.searchName} onChange={this.handleValueChange} placeholder="Search By Name" type="number" name="searchName" id="" />
                    </label>
                    <label>
                        <div className="Addspace"></div>
                        Type Of Coupon 
                        <select value={this.state.searchType} onChange={this.handleValueChange} name="searchType" id="">
                            <option value="">Select Type</option>
                            <option value="percentage">Percentage</option>
                            <option value="fixed">fixed</option>

                        </select>
                    </label>
                    <button className="btn btn-primary">Create Coupon</button>
                    </form>
                </Card>
                <Card customClass="custom-card">
                <div className="top-div">
                    <h3>All available users</h3>
                </div>
                <table className="rtable">
                    <thead>
                        <tr>
                        <th>Coupon Key</th>
                        <th>Used</th>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Used By UserID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {   
                            this.state.allUsers.map((user, idx) => {
                                return <tr key={`users-idx-${idx}`}>
                                    <td>{user.key}</td>
                                    <td>{`${user.expired ? "Yes" : "No"}`}</td>
                                    <td>{user.type}</td>
                                    <td>{user.value}{user.type == 'fixed' ? ' AED' : "%"}</td>
                                    <td>{user.user}</td>
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