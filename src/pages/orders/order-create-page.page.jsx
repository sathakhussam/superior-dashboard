import React from 'react';
import Card from '../../components/card/card.component'

const CarNewForm = () => {
    return ( 
    <div className="CarNewForm">
        <Card>
            <form method="POST" encType="multipart/form-data">
            <h3>Create A New Order</h3>
            <input type="text" required placeholder="Car Name" />
            <input type="text" required placeholder="Car Image URL" />
            <input type="text" required placeholder="Car ID" />
            <input type="text" required placeholder="User ID" />
            <input type="text" required placeholder="User Phone" />
            <select name="Type" id="">
                <option value="true">True</option>
                <option value="false">False</option>
            </select>
            <input type="text" required placeholder="Pickup Date Ex: 10 May 2021" />
            <input type="text" required placeholder="Pickup Time Ex: 10:20 PM" />
            <input type="text" required placeholder="Drop Date Ex: 10 May 2021" />
            <input type="text" required placeholder="Drop Pickup Ex: 10 May 2021" />
            <input type="number" required placeholder="No Of Hours" />
            <input type="text" required placeholder="Pickup Location" />
            <input type="text" required placeholder="Drop Location" />
            <input type="text" required placeholder="Cost" />
            <input type="text" required placeholder="VAT" />
            <input type="text" required placeholder="Subtotal" />
            <input type="text" required placeholder="Resource Cost" />
            <input type="text" required placeholder="Duration Cost" />
            <input type="text" required placeholder="Deposit Amount" />
            <input type="text" required placeholder="Method" />
            <label class="container">
            <p>Additional Driver</p>
            <input type="checkbox"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">
            <p>Baby seat</p>
            <input type="checkbox"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">
            <p>Delivery Outside Dubai</p>
            <input type="checkbox"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">
            <p>Extra 25KM</p>
            <input type="checkbox"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">
            <p>Extra 50KM</p>
            <input type="checkbox"/>
            <span class="checkmark"></span>
            </label>
            <label class="container">
            <p>Full Insurance</p>
            <input type="checkbox"/>
            <span class="checkmark"></span>
            </label>
            <button>Create New</button>
            </form>
        </Card>
    </div> );
}
 
export default CarNewForm;