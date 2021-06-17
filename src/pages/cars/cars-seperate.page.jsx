import React, {useEffect, useState} from 'react'
import Card from '../../components/card/card.component'
import './cars.styles.css'
import Carousel from '../../components/carousel/carousel.component'
import API from '../../api/api'
import { Redirect } from 'react-router'

const images = [
    "https://images.unsplash.com/photo-1622569535114-bf7d4d57fe2d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  ];

const CarSeperate = (props) => {
    const [cars, changeCar] = useState({relatedVideos: [], images: []})
    const token = localStorage.getItem("jwt")
    const [err, changeErr] = useState("")
    useEffect(async () => {
        const carss = await (await API.get(`cars/${props.id}`, {headers: {"Authorization": `Bearer ${token}`}})).data.data
        changeCar(carss)
        console.log(carss)
    }, [])
    
    const handleDelete = async () => {
        try {
            const carss = await (await API.delete(`cars/${props.id}`, {headers: {"Authorization": `Bearer ${token}`}})).data.data
            changeErr("redirect")
        } catch (e) {
            changeErr("error")
        }
    }

    return(
        <div className="CarSeperate">
            {
                err == "error" ? 
                <div className="errorBox">Sorry! Cannot Delete the car</div>: null
            }
            {
                err == "redirect" ? 
                <Redirect to="/cars" />: null
            }
            <Card customClass="CustomCard">
                <div className="Row">
                    <div>
                        <h3>User Details</h3>                    
                        <p>Car Name : <b>{cars.name}</b></p>
                        <p>Description : {cars.description}</p>
                        <p>KM Included : <b>{cars.KMIncluded}</b></p>
                        <p>Hourly Rate : <b>{cars.hourlyRate}</b></p>
                        <p>Per Day Rate : <b>{cars.perDayRate}</b></p>
                        <p>Pre Deposit : <b>{cars.preDeposit}</b></p>
                        <p>Contact : <b>{cars.contact}</b></p>
                        <p>Whatapp Number : <b>{cars.whatsappNumber}</b></p>
                        <p>Type : <b>{cars.type}</b></p>
                        <p>Brand : <b>{cars.brand}</b></p>
                        <p>Ratings : <b>{cars.ratings}</b></p>
                        <p>Related Videos : 
                            <ul>
                                {
                                    cars.relatedVideos.map((val, idx) => {
                                        return <li key={idx}>{val}</li>
                                    })
                                }
                                
                            </ul>
                        </p>
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={handleDelete}>Delete this car</button>
                    </div>
                </div>
                <Carousel images={cars.images.length > 1 ? cars.images :images}/>
            </Card>
        </div>
    )
}

export default CarSeperate