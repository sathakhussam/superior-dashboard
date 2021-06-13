import React from 'react'
import Card from '../../components/card/card.component'
import './users.styles.css'
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


const UsersSeperate = (props) => {
    return(
        <div className="UserSeperate">
            <Card customClass="CustomCard">
                <div className="Row">
                    <div>
                        <h3>User Details</h3>                    
                        <p>Name : <b>Sathak Uzham</b></p>
                        <p>Email : <b>sathakhussam@gmail.com</b></p>
                        <p>Phone : <b>+971 7634564636</b></p>
                        <h3>Billing Details</h3>
                        <p>First Name : <b>Sathak</b></p>
                        <p>Last Name : <b>Uzham</b></p>
                        <p>Company Name : <b>Artistic Programmer</b></p>
                        <p>Country : <b>India</b></p>
                        <p>Address : <b>17/247 South Street Kilakarai <br/> Ramanathapuram Tamilnadu</b></p>
                        <p>City : <b>Kilakarai</b></p>
                        <p>Phone : <b>+971 7634564636</b></p>
                        <p>Email : <b>sathakhussam@gmail.com</b></p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="User Photo"/>
                    </div>
                </div>
                <Carousel images={images}/>

            </Card>
        </div>
    )
}

export default UsersSeperate