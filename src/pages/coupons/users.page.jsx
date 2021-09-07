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
            choseDate: "",
            datee: "",
            newCoupon: false,
        }
    }

    async componentDidMount() {
        const token = localStorage.getItem("jwt")
        const allUsers = await (await API.get("coupons/", {headers: {"Authorization": `Bearer ${token}`}})).data.data
        this.setState({allUsers: allUsers})
        // console.log(this.state.allUsers)
    }
    
    handleValueChange = (e) => {
        console.log(e.target.value)
        this.setState({[e.target.name]: e.target.value})
        
    }

    customSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem("jwt")
        const datesep = this.state.datee.split("-")
        var allUsers;
        if (this.state.choseDate == "false") allUsers = await (await API.post("coupons/", {type: this.state.searchType, value:this.state.searchName, isDate: false},{headers: {"Authorization": `Bearer ${token}`}})).data.data
        if (this.state.choseDate == "true") allUsers = await (await API.post("coupons/", {type: this.state.searchType, value:this.state.searchName, isDate: true, "expiringOn": `${datesep[1]}-${datesep[2]}-${datesep[0]}`},{headers: {"Authorization": `Bearer ${token}`}})).data.data
        const allUser = await (await API.get("coupons/", {headers: {"Authorization": `Bearer ${token}`}})).data.data
        this.setState({allUsers: allUser, searchType: "", searchName: "", newCoupon: true}, () => setTimeout(this.setState({newCoupon: false}), 1000)) 
    }
    async ExpireToken(id, expired, idx) {
        const token = localStorage.getItem("jwt")
        if (!expired){
            const theDifferent = this.state.allUsers
            theDifferent[idx]["expired"] = true
            await (await API.put(`coupons/${id}`,{}, {headers: {"Authorization": `Bearer ${token}`}})).data.data
            this.setState({
                allUsers: theDifferent
            })
        }
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
                        <input value={this.state.searchName} onChange={this.handleValueChange} placeholder="Enter The Value" type="number" name="searchName" id="" />
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
                    <label>
                        <div className="Addspace"></div>
                        Select Expiration Type 
                        <select value={this.state.choseDate} onChange={this.handleValueChange} name="choseDate" id="">
                            <option value="">Select Type</option>
                            <option value="false">Once</option>
                            <option value="true">Date</option>
                        </select>
                    </label>
                    { this.state.choseDate == "true" ? 
                    <label>
                        Please Select An Expiration Date
                        <input type="date" name="datee" value={this.state.datee} onChange={this.handleValueChange} id="" className="myowninput" />
                    </label>
                    : null
                    }
                    <button className="btn btn-primary">Create Coupon</button>
                    </form>
                </Card>
                <Card customClass="custom-card">
                <div className="top-div">
                    <h3>All available coupons</h3>
                </div>
                <table className="rtable">
                    <thead>
                        <tr>
                        <th>Coupon Key</th>
                        <th>Expired</th>
                        <th>Type</th>
                        <th>Value</th>
                        <th>Used By UserID</th>
                        <th>Action</th>
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
                                    <td>{user.user.length >= 1 ? `${user.user[0]} ${user.user.length > 1 ? "and " + (user.user.length-1).toString() + " more": ""}` : "No One Has Used"}</td>
                                    <td><a className={`${user.expired ? "a-disabled": ""}`} href="#" onClick={() => this.ExpireToken(user.key, user.expired, idx)}>{user.expired? "Expired":"Expire the token"}</a></td>
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