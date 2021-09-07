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
            title: "",
            message: "",
            to: "",
            load: false,
            msg: "",
            newCoupon: false,
        }
    }

    async componentDidMount() {
        const token = localStorage.getItem("jwt")
        const allUsers = await (await API.get("users/", {headers: {"Authorization": `Bearer ${token}`}})).data.data
        this.setState({allUsers: allUsers})
        // console.log(this.state.allUsers)
    }
    
    handleValueChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        
    }

    customSubmit = async (e) => {
        e.preventDefault()
        const token = localStorage.getItem("jwt")
        this.setState({load: true})
        const allUsers = await (await API.post("/send",{
            "title": this.state.title,
            "message": this.state.message,
            "to": this.state.to,
        },{headers: {"Authorization": `Bearer ${token}`}})).data.data
        this.setState({title: "", message: "", to: true}, () => setTimeout(this.setState({newCoupon: false}), 1000)) 
        this.setState({load: false})
    }

    render() {
        return (
            <div className="OrdersPage">
                <Card customClass={`custom-card-sep ${this.state.load? "noscroll": ""}`}>
                {
                    this.state.newCoupon ? 
                    <p>Notification Sent Successfully</p>
                    :
                    null
                }
                {this.state.msg 
                ?
                <div className="errorBox">{this.state.msg}</div>
                : 
                null}
                <form onSubmit={this.customSubmit} method="post">
                    <label>
                        Title Of The Notification
                        <input value={this.state.title} onChange={this.handleValueChange} placeholder="Enter The Title" name="title" id="" />
                    </label>
                    <label>
                        Message 
                        <input value={this.state.message} onChange={this.handleValueChange} placeholder="Enter The Message" name="message" id="" />
                    </label>
                    <label>
                        <div className="Addspace"></div>
                        Send To Who
                        <select value={this.state.to} onChange={this.handleValueChange} name="to" id="">
                            <option value="">Select To Who</option>
                            <option value="all">All</option>
                            {
                                this.state.allUsers.map((val, idx) => {
                                    return <option key={idx} value={val.email}>{val.name} ({val.email})</option>
                                })
                            }
                        </select>
                    </label>
                    <button className="btn btn-primary">Create Coupon</button>
                    </form>
                </Card>
                {
                    this.state.load ? 
                <div className="overlay-box">
                    <div className="loader-box">
                        <div class="loading">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                : null
                }
            </div>
        );
    }
}

export default OrdersPage;