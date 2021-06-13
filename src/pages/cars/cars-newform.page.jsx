import React from 'react';
import Card from '../../components/card/card.component'

const CarNewForm = () => {
    return ( 
    <div className="CarNewForm">
        <Card>
            <form method="POST" encType="multipart/form-data">
            <h3>Create A New Form</h3>
            <input type="text" required placeholder="Car Name" />
            <input type="text" required placeholder="Description" />
            <input type="text" required placeholder="KM Included" />
            <input type="text" required placeholder="Hourly Rate" />
            <input type="text" required placeholder="Per Day Rate" />
            <input type="text" required placeholder="Pre Deposit" />
            <input type="text" required placeholder="Contact Number" />
            <input type="text" required placeholder="Whatsapp Number" />
            <select name="Type" id="">
                <option value="sports">Sports</option>
                <option value="luxury">Luxury</option>
                <option value="special">Special</option>
                <option value="SUV">SUV</option>
                <option value="convertibles">Convertibles</option>
            </select>
            <select name="Type" id="">
                <option value="Ferrari">Ferrari</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Ford">Ford</option>
                <option value="Audi">Audi</option>
                <option value="Bentlay">Bentlay</option>
                <option value="Cadillac">Cadillac</option>
                <option value="Polaris">Polaris</option>
                <option value="Range Rover">Range Rover</option>
                <option value="BMW">BMW</option>
                <option value="McLaren">McLaren</option>
                <option value="Rolls Royce">Rolls Royce</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Porsche">Porsche</option>
                <option value="Lincoln">Lincoln</option>
                <option value="Maseratti">Maseratti</option>
                <option value="Corvette">Corvette</option>
            </select>
            <input type="Number" min="1" max="5" required placeholder="Ratings" />
            <input type="text" placeholder="Related Videos 1" />
            <input type="text" placeholder="Related Videos 2" />
            <input type="text" placeholder="Related Videos 3" />
            <div className="fileupload">
                <p className="styleClass" onClick={() => document.getElementById('getFile').click()}>Upload All Your Images</p>
                <input type='file' id="getFile" multiple />            
            </div>
            <button>Create New</button>
            </form>
        </Card>
    </div> );
}
 
export default CarNewForm;