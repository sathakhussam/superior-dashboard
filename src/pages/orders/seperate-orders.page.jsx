import React, {useEffect, useState} from 'react';
import Card from '../../components/card/card.component'
import './orders.styles.css'
import {Link} from 'react-router-dom';
import API from '../../api/api'

const SeperateOrderPage = (props) => {
    const [order, changeOrder] = useState({resources: {}})
    
    useEffect(async () => {
        const token = localStorage.getItem("jwt")
        const orders = await (await API.get(`orders/${props.id}`, {headers: {"Authorization": `Bearer ${token}`}})).data.data
        changeOrder(orders)
        console.log(orders)
    }, [])
    return ( 
        <div className="SeperateOrderPage">
            <Card>
            <h3>Orders Details</h3>                    
            <p>Car : <Link to={`/cars/${order.car}`}>{order.carName}</Link></p>
            <p>User : <Link to={`/users/${order.user}`}>Sathak Hussam</Link></p>
            <p>carID : <b>{order.car}</b></p>           
            <p>userPhone : <b>{order.userPhone}</b></p>           
            <p>Pickup Time : <b>{order.pickUpTime}</b></p>           
            <p>Pickup Date : <b>{order.pickUpDate}</b></p>           
            <p>Drop Time : <b>{order.dropTime}</b></p>           
            <p>Drop Date : <b>{order.dropDate}</b></p>           
            <p>No of hours : <b>{order.numberOfHours}</b></p>           
            <p>Pickup Location : <b>{order.pickUpLocation}</b></p>           
            <p>Drop Location : <b>{order.dropLocation}</b></p>           
            <p>Total Cost : <b>{order.cost} AED</b></p>           
            <p>VAT : <b>{order.VAT} AED</b></p>           
            <p>Subtotal : <b>{order.subtotal} AED</b></p>           
            <p>Resource Cost : <b>{order.resourceCost} AED</b></p>           
            <p>Duration Cost : <b>{order.durationCost} AED</b></p>           
            <p>Deposit Amount : <b>{order.depositAmount} AED</b></p>           
            <p>Method : <b>Amex</b></p>           
            <p>Resources Asked</p>
            <ul>
                {
                    Object.keys(order.resources).map((val, idx) => {
                        return <li key={`Resources-${idx}`}>{val}</li>
                    })
                }
            </ul>
            </Card>
        </div>
     );
}

 
export default SeperateOrderPage;