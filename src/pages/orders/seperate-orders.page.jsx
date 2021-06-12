import React from 'react';
import Card from '../../components/card/card.component'
import './orders.styles.css'
import {Link} from 'react-router-dom';

const SeperateOrderPage = () => {
    return ( 
        <div className="SeperateOrderPage">
            <Card>
            <h3>Orders Details</h3>                    
            <p>Car : <Link>Ferrari 253</Link></p>
            <p>User : <Link>Sathak Uzham</Link></p>
            <p>Email : <b>sathakhussam@gmail.com</b></p>
            <p>userPhone : <b>+971 7634564636</b></p>           
            <p>Pickup Time : <b>17:10 AM</b></p>           
            <p>Pickup Date : <b>17th June 2021</b></p>           
            <p>Drop Time : <b>17:10 AM</b></p>           
            <p>Drop Date : <b>17th June 2021</b></p>           
            <p>No of hours : <b>Null</b></p>           
            <p>Pickup Location : <b>Burj Kalifa Dubai</b></p>           
            <p>Drop Location : <b>Burj Kalifa Dubai</b></p>           
            <p>Drop Location : <b>Burj Kalifa Dubai</b></p>           
            <p>Total Cost : <b>10,100 AED</b></p>           
            <p>VAT : <b>1000 AED</b></p>           
            <p>Subtotal : <b>9800 AED</b></p>           
            <p>Resource Cost : <b>800 AED</b></p>           
            <p>Duration Cost : <b>8500 AED</b></p>           
            <p>Duration Cost : <b>8500 AED</b></p>           
            <p>Deposit Amount : <b>8500 AED</b></p>           
            <p>Method : <b>Amex</b></p>           
            <p>Resources Asked</p>
            <ul>
                <li>Additional Driver</li>
                <li>Baby Seat</li>
            </ul>
            </Card>
        </div>
     );
}

 
export default SeperateOrderPage;