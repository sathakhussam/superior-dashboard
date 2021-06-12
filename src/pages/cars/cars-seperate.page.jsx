import React from 'react'
import Card from '../../components/card/card.component'
import './cars.styles.css'
import Carousel from '../../components/carousel/carousel.component'

const images = [
    { url: "https://images.unsplash.com/photo-1622569535114-bf7d4d57fe2d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { url: "https://images.unsplash.com/photo-1504740191045-63e15251e750?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { url: "https://images.unsplash.com/photo-1601688313659-a13aa022df02?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bmF0dXJlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { url: "https://images.unsplash.com/photo-1587502537745-84b86da1204f?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { url: "https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { url: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
  ];

const CarSeperate = (props) => {
    return(
        <div className="CarSeperate">
            <Card customClass="CustomCard">
                <div className="Row">
                    <div>
                        <h3>User Details</h3>                    
                        <p>Car Name : <b>Ferrari 253</b></p>
                        <p>Description : Best available car out there in the ferrari it is all about brand Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus accusantium, quibusdam incidunt error esse sit nesciunt hic cupiditate voluptate ducimus repudiandae voluptatem ab! Amet alias eligendi aperiam accusantium magni doloremque.</p>
                        <p>KM Included : <b>250KM</b></p>
                        <p>Hourly Rate : <b>50 AED</b></p>
                        <p>Per Day Rate : <b>2500 AED</b></p>
                        <p>Pre Deposit : <b>2500 AED</b></p>
                        <p>Contact : <b>+971 1234567890</b></p>
                        <p>Whatapp Number : <b>+971 1234567890</b></p>
                        <p>Whatapp Number : <b>+971 1234567890</b></p>
                        <p>Type : <b>Sports</b></p>
                        <p>Brand : <b>Ferrari</b></p>
                        <p>Ratings : <b>2.5</b></p>
                        <p>Ratings : <b>12th Jan 2021</b></p>
                        <p>Related Videos : <b>12th Jan 2021</b></p>
                    </div>
                </div>
                <Carousel images={images}/>
            </Card>
        </div>
    )
}

export default CarSeperate