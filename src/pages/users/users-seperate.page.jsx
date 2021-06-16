import React, {useEffect, useState} from 'react'
import Card from '../../components/card/card.component'
import './users.styles.css'
import Carousel from '../../components/carousel/carousel.component'
import API from '../../api/api'

const images = [
    { url: "https://images.unsplash.com/photo-1622569535114-bf7d4d57fe2d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
 ];


const UsersSeperate = (props) => {
    const [user, changeUser] = useState({
        "type": "user",
        "imageUrl": "",
        "isAdmin": true,
        "confirmed": false,
        "resetPass": false,
        "billingDetail": {
            "firstName": "",
            "lastName": "",
            "companyName": "",
            "country": "",
            "address": "",
            "city": "",
            "phone": "",
            "email": "",
            "countryCode": "",
            "pinCode": ""
        },
        "_id": "60c347707395d6740d42eb62",
        "name": "",
        "email": "",
        "phone": ""
    })
    useEffect(async () => {
        const token = await (await API.post("users/login", {"email": "admin@marthadark.ga", "password": "helloworld123"}))
        const Users = await (await API.get(`users/find/${props.id}`, {headers: {"Authorization": `Bearer ${token.data.token}`}})).data.data
        changeUser(Users)
        console.log(user.name)
    }, [])
    
    return(
        <div className="UserSeperate">
            <Card customClass="CustomCard">
                <div className="Row">
                    <div>
                        <h3>User Details</h3>                    
                        <p>Name : <b>{user.name}</b></p>
                        <p>Email : <b>{user.email}</b></p>
                        <p>Phone : <b>{user.phone}</b></p>
                        {
                            user.billingDetail.firstName ? 
                            <div>
                                <h3>Billing Details</h3>
                                <p>First Name : <b>{user.billingDetail.firstName}</b></p>
                                <p>Last Name : <b>{user.billingDetail.lastName}</b></p>
                                <p>Company Name : <b>{user.billingDetail.companyName}</b></p>
                                <p>Country : <b>{user.billingDetail.country}</b></p>
                                <p>Address : <b>{user.billingDetail.address}</b></p>
                                <p>City : <b>{user.billingDetail.city}</b></p>
                                <p>Phone : <b>{user.billingDetail.phone}</b></p>
                                <p>Email : <b>{user.billingDetail.email}</b></p>
                            </div>
                            :
                            <p>User haven't added billing details yet</p>
                        }
                    </div>
                    <div>
                        <img src={user.imageUrl ? user.imageUrl : "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"} alt="User Photo"/>
                    </div>
                </div>
                <Carousel images={user.documents ? user.documents : images}/>

            </Card>
        </div>
    )
}

export default UsersSeperate