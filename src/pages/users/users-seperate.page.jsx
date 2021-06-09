import React from 'react'
import Card from '../../components/card/card.component'
import './users.styles.css'

const UsersSeperate = (props) => {
    return(
        <div className="UserSeperate">
            <Card customClass="CustomCard">
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
                    <img src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                </div>
            </Card>
        </div>
    )
}

export default UsersSeperate