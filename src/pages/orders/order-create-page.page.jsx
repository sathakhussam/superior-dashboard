import React, {useEffect, useState} from 'react';
import Card from '../../components/card/card.component'
import API from '../../api/api'

const CarNewForm = (props) => {
        const [msg, changeMsg] = useState("")
        const [infos, changeInfos] = useState({users: [{name: ""}], cars: [{name: ""}]})
        const useForms = () => {
        const [inputs, setInputs] = useState({
            carName: "",
            carImageUrl: "",
            car: "",
            userEmail: "",
            user: "",
            userPhone: "",
            bookByDays: "",
            pickUpDate: "",
            pickUpTime: "",
            dropDate: "",
            dropTime: "",
            numberOfHours: "",
            pickUpLocation: "",
            dropLocation: "",
            cost: "",
            VAT: "",
            subtotal: "",
            resourceCost: "",
            durationCost: "",
            depositAmount: "",
            method: "",
            resources: {
                additionalDriver: false,
                babySeat: false,
                deliveryOutsideDubai: false,
                extra25KM: false,
                extra50KM: false,
                fullInsurance: false,
            }
        });
        // console.log(inputs)
        const handleSubmit = async (event) => {
            try{
                if (event) {
                  event.preventDefault();
                  let myform;
                  if (Boolean(parseInt(myForm.inputs.bookByDays))) {
                    myform = {
                      "car": inputs.car,
                      "userEmail": inputs.userEmail,
                      "user": inputs.user,
                      "carName": inputs.carName,
                      "bookByDays": Boolean(parseInt(myForm.inputs.bookByDays)),
                      "dropTime": inputs.dropTime,
                      "dropDate": inputs.dropDate,
                      "method": inputs.method,
                      "dropLocation": inputs.dropLocation,
                      "pickUpLocation" : inputs.pickUpLocation,
                      "pickUpTime": inputs.pickUpTime,
                      "pickUpDate": inputs.pickUpDate,
                      "depositAmount": inputs.depositAmount,
                      "resourceCost": inputs.resourceCost,
                      "subtotal": inputs.subtotal,
                      "durationCost": inputs.durationCost,
                      "VAT": inputs.VAT,
                      "cost": inputs.cost,
                      "carImages": inputs.carImageUrl,
                      "userPhone": inputs.userPhone,
                      "resources": {
                          "Additional Driver": inputs.resources.additionalDriver,
                          "Baby seat": inputs.resources.babySeat,
                          "Outside Dubai": inputs.resources.deliveryOutsideDubai,
                          "Extra 25KM": inputs.resources.extra25KM,
                          "Extra 50KM": inputs.resources.extra50KM,
                          "Delivery Full Insurance": inputs.resources.fullInsurance,
                      }
                  }
                }
                else {
                    myform = {
                        "car": inputs.car,
                        "numberOfHours": inputs.numberOfHours,
                        "userEmail": inputs.userEmail,
                        "user": inputs.user,
                        "carName": inputs.carName,
                        "bookByDays": Boolean(parseInt(myForm.inputs.bookByDays)),
                        "method": inputs.method,
                        "dropLocation": inputs.dropLocation,
                        "pickUpLocation" : inputs.pickUpLocation,
                        "pickUpTime": inputs.pickUpTime,
                        "pickUpDate": inputs.pickUpDate,
                        "depositAmount": inputs.depositAmount,
                        "resourceCost": inputs.resourceCost,
                        "subtotal": inputs.subtotal,
                        "durationCost": inputs.durationCost,
                        "VAT": inputs.VAT,
                        "cost": inputs.cost,
                        "carImages": inputs.carImageUrl,
                        "userPhone": inputs.userPhone,
                        "resources": {
                            "Additional Driver": inputs.resources.additionalDriver,
                            "Baby seat": inputs.resources.babySeat,
                            "Outside Dubai": inputs.resources.deliveryOutsideDubai,
                            "Extra 25KM": inputs.resources.extra25KM,
                            "Extra 50KM": inputs.resources.extra50KM,
                            "Delivery Full Insurance": inputs.resources.fullInsurance,
                        }
                    }
                }
                  const token = localStorage.getItem("jwt")
                  console.log(myform)
                  const res = await (await API.post("orders/", myform, {headers: {"Authorization": `Bearer ${token}`}}))    
                  props.history.push("/orders")
                }
            } catch(e) {
                changeMsg(e.response.data.message)
            }
        }
        const customSelectHandle = (e) => {
            const information = infos[e.target.name][e.target.value]
            if (e.target.name === "cars") {
                setInputs({
                    ...inputs,
                    carName: information.name,
                    car: information["_id"],
                    carImageUrl: information["images"][0],
                })
            } else if (e.target.name === "users") {
                setInputs({
                    ...inputs,
                    user: information["_id"],
                    userPhone: information["phone"],
                    userEmail: information["email"],
                })
            }
        }
        const handleInputChange = (event) => {
        //   event.persist();
          setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
        }
        
        const insideInputChange = (e) => {
            setInputs(inputs => ({...inputs, resources: {...inputs.resources, [e.target.name]: !inputs.resources[e.target.name]}}))
        }
        return {
          handleSubmit,
          handleInputChange,
          insideInputChange,
          inputs,
          customSelectHandle
        }}

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        const token = localStorage.getItem("jwt")
        const allUsers = await (await API.get("users/", {headers: {"Authorization": `Bearer ${token}`}})).data.data
        const allCars = await (await API.get("cars/", {headers: {"Authorization": `Bearer ${token}`}})).data.data
        changeInfos({users: allUsers,cars: allCars.cars})
    }, [])
        

    const myForm = useForms()
    return ( 
    <div className="CarNewForm">
        {
            msg ?
            <div className="errorBox">{msg}</div> : null
        }
        <Card>
            <form method="POST" onSubmit={myForm.handleSubmit} encType="multipart/form-data">
            <h3>Create A New Order</h3>
            <select name="method" name="cars" onChange={myForm.customSelectHandle}>
                <option value="">Select The Car</option>
                {
                    infos.cars.map((val, idx) => {
                        return (
                            <option value={idx}>{val.name}</option>
                        )
                    })
                }
            </select>
            <select name="method" name="users" onChange={myForm.customSelectHandle}>
                <option value="">Select The User</option>
                {
                    infos.users.map((val, idx) => {
                        return (
                            <option value={idx}>{val.name} ({val.email})</option>
                        )
                    })
                }
            </select>
            <select name="bookByDays" value={myForm.inputs.bookByDays} onChange={myForm.handleInputChange} id="">
                <option value="">Select How you want to book</option>
                <option value={1}>Book by days</option>
                <option value={0}>Book by hours</option>
            </select>
            <input name="pickUpDate" value={myForm.inputs.pickUpDate} onChange={myForm.handleInputChange} type="text" required placeholder="Pickup Date Ex: 10 May 2021" />
            <input name="pickUpTime" value={myForm.inputs.pickUpTime} onChange={myForm.handleInputChange} type="text" required placeholder="Pickup Time Ex: 10:20 PM" />

            {
                Boolean(parseInt(myForm.inputs.bookByDays)) === true ?
                <div>
                    <input name="dropDate" value={myForm.inputs.dropDate} onChange={myForm.handleInputChange} type="text" required placeholder="Drop Date Ex: 10 May 2021" />
                    <input name="dropTime" value={myForm.inputs.dropTime} onChange={myForm.handleInputChange} type="text" required placeholder="Drop Time Ex: 10:20 PM" />
                </div>
                :
                <input name="numberOfHours" value={myForm.inputs.numberOfHours} onChange={myForm.handleInputChange} type="number" required placeholder="No Of Hours" />
            }
            <input name="pickUpLocation" value={myForm.inputs.pickUpLocation} onChange={myForm.handleInputChange} type="text" required placeholder="Pickup Location" />
            <input name="dropLocation" value={myForm.inputs.dropLocation} onChange={myForm.handleInputChange} type="text" required placeholder="Drop Location" />
            <input name="cost" value={myForm.inputs.cost} onChange={myForm.handleInputChange} type="number" required placeholder="Cost" />
            <input name="VAT" value={myForm.inputs.VAT} onChange={myForm.handleInputChange} type="number" required placeholder="VAT" />
            <input name="subtotal" value={myForm.inputs.subtotal} onChange={myForm.handleInputChange} type="number" required placeholder="Subtotal" />
            <input name="resourceCost" value={myForm.inputs.resourceCost} onChange={myForm.handleInputChange} type="number" required placeholder="Resource Cost" />
            <input name="durationCost" value={myForm.inputs.durationCost} onChange={myForm.handleInputChange} type="number" required placeholder="Duration Cost" />
            <input name="depositAmount" value={myForm.inputs.depositAmount} onChange={myForm.handleInputChange} type="number" required placeholder="Deposit Amount" />
            <select name="method" value={myForm.inputs.method} onChange={myForm.handleInputChange} id="">
                <option value="">Select Paymenth Method</option>
                <option value="amex">Amex</option>
                <option value="apple">Apple pay</option>
                <option value="cards">Card</option>
            </select>
            <label class="container">
            <p>Additional Driver</p>
            <input type="checkbox" name="additionalDriver" value={myForm.inputs.resources.additionalDriver} onClick={myForm.insideInputChange}/>
            <span class="checkmark"></span>
            </label>
            <label class="container">
            <p>Baby seat</p>
            <input type="checkbox" name="babySeat" value="true" onClick={myForm.insideInputChange}/>
            <span class="checkmark"></span>
            </label>
            <label class="container">
            <p>Delivery Outside Dubai</p>
            <input type="checkbox" name="deliveryOutsideDubai" value="true" onClick={myForm.insideInputChange}/>
            <span class="checkmark"></span>
            </label>
            <label class="container">
            <p>Extra 25KM</p>
            <input type="checkbox" name="extra25KM" value="true" onClick={myForm.insideInputChange}/>
            <span class="checkmark"></span>
            </label>
            <label class="container">
            <p>Extra 50KM</p>
            <input type="checkbox" name="extra50KM" value="true" onClick={myForm.insideInputChange}/>
            <span class="checkmark"></span>
            </label>
            <label class="container">
            <p>Full Insurance</p>
            <input type="checkbox" name="fullInsurance" value="true" onClick={myForm.insideInputChange}/>
            <span class="checkmark"></span>
            </label>
            <button>Create New</button>
            </form>
        </Card>
    </div> );
}
 
export default CarNewForm;