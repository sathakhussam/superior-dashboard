/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import Card from '../../components/card/card.component'
import API from '../../api/api'
import { Redirect } from 'react-router';

const CarNewForm = (props) => {
    const [load, setLoad] = useState(false);
    const [files, setFiles] = useState([]);
    const [msg, changeMsg] = useState("")
    let carss = {
        carName: "",
        description: "",
        KMIncluded: "",
        hourlyRate: "",
        perDayRate: "",
        preDeposit: "",
        contact: "",
        whatsappNumber: "",
        type: "",
        brand: "",
        ratings: "",
        relatedVideos1: "",
        relatedVideos2: "",
        relatedVideos3: "",
        published: ""
    };
    const onFileUpload = (event) => {
        event.preventDefault();
        // Get the file Id
        let id = event.target.id;
        // Create an instance of FileReader API
        // Get the actual file itself
        let file = event.target.files[0];
        // console.log(files)
        if (!files) setFiles([...files,file])

        setFiles([...files,file])
      }

    const useForms = () => {
        const [inputs, setInputs] = useState(carss);
        const handleSubmit = async (event, loginState) => {
          if (event) {
            event.preventDefault();
          }
        }
        const handleInputChange = (event) => {
          event.persist();
          setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
        }
        return {
          handleSubmit,
          handleInputChange,
          inputs,
          setInputs
        }}

        
        const myLastchance  = async (thevartopass) => {
        try {            
            let fd = new FormData();
            // console.log(files)
            fd.append("name", thevartopass.carName)
            fd.append("photos", files[0])
            fd.append("photos", files[1])
            fd.append("photos", files[2])
            fd.append("photos", files[3])
            fd.append("photos", files[4])
            fd.append("photos", files[5])
            fd.append("photos", files[6])
            fd.append("photos", files[7])
            fd.append("photos", files[8])
            fd.append("photos", files[9])
            fd.append("description", thevartopass.description)
            fd.append("KMIncluded", thevartopass.KMIncluded)
            fd.append("preDeposit", thevartopass.preDeposit)
            fd.append("hourlyRate", thevartopass.hourlyRate)
            fd.append("perDayRate", thevartopass.perDayRate)
            fd.append("contact", thevartopass.contact)
            fd.append("whatsappNumber", thevartopass.whatsappNumber)
            fd.append("type", thevartopass.type)
            fd.append("ratings", thevartopass.ratings)
            fd.append("brand", thevartopass.brand)
            fd.append("relatedVideos", thevartopass.relatedVideos1)
            fd.append("relatedVideos", thevartopass.relatedVideos2)
            fd.append("relatedVideos", thevartopass.relatedVideos3)
            fd.append("published", Boolean(parseInt(thevartopass.published)))
            
            const token = localStorage.getItem("jwt")
            const res = (await API.post(`cars/${props.id}`, fd, {headers: {"Authorization": `Bearer ${token}`,'content-type': 'multipart/form-data'}}))
            console.log(res)
            props.history.push("/cars")
        } catch (e) {
            changeMsg(e.response.data.message)
            setLoad(false)
        }
    }

    const myForm = useForms()
    const customSubmit = async (e) => {
        e.preventDefault()
        setLoad(true)
        let LastVar = {...myForm.inputs}
        LastVar["relatedVideos"] = [LastVar["relatedVideos1"],LastVar["relatedVideos2"], LastVar["relatedVideos3"]];
        LastVar["images"] = files
        myLastchance(LastVar)
    }
    const token = localStorage.getItem("jwt")
    useEffect(async () => {
        carss = await (await API.get(`cars/${props.id}`, {headers: {"Authorization": `Bearer ${token}`}})).data.data
        myForm.setInputs(() => ({
            carName: carss.name,
            description: carss.description,
            KMIncluded: carss.KMIncluded,
            hourlyRate: carss.hourlyRate,
            perDayRate: carss.perDayRate,
            preDeposit: carss.preDeposit,
            contact: carss.contact,
            whatsappNumber: carss.whatsappNumber,
            type: carss.type,
            brand: carss.brand,
            ratings: carss.ratings,
            relatedVideos1: carss.relatedVideos[0],
            relatedVideos2: carss.relatedVideos[1],
            relatedVideos3: carss.relatedVideos[2],
            published: carss.published === true ? "1" : "0" 
        }));

    }, [])
    return ( 
    <div className={`CarNewForm ${load? "noscroll": ""}`}>
            {msg 
            ?
            <div className="errorBox">{msg}</div>
            : 
            null}
        <Card>
            <form method="POST" onSubmit={customSubmit} encType="multipart/form-data">
            <h3>Create A New Form</h3>
            <input type="text" name="carName" onChange={myForm.handleInputChange} value={myForm.inputs.carName} required placeholder="Car Name" />
            <input type="text" name="description" onChange={myForm.handleInputChange} value={myForm.inputs.description} required placeholder="Description" />
            <input type="number" name="KMIncluded" onChange={myForm.handleInputChange} value={myForm.inputs.KMIncluded} required placeholder="KM Included" />
            <input type="number" name="hourlyRate" onChange={myForm.handleInputChange} value={myForm.inputs.hourlyRate} required placeholder="Hourly Rate" />
            <input type="number" name="perDayRate" onChange={myForm.handleInputChange} value={myForm.inputs.perDayRate} required placeholder="Per Day Rate" />
            <input type="number" name="preDeposit" onChange={myForm.handleInputChange} value={myForm.inputs.preDeposit} required placeholder="Pre Deposit" />
            <input type="text" name="contact" onChange={myForm.handleInputChange} value={myForm.inputs.contact} required placeholder="Contact Number" />
            <input type="text" name="whatsappNumber" onChange={myForm.handleInputChange} value={myForm.inputs.whatsappNumber} required placeholder="Whatsapp Number" />
            <select name="type" value={myForm.inputs.type} onChange={myForm.handleInputChange} id="">
                <option value="">Select A Car Type</option>
                <option value="sports">Sports</option>
                <option value="luxury">Luxury</option>
                <option value="special">Special</option>
                <option value="SUV">SUV</option>
                <option value="convertibles">Convertibles</option>
            </select>
            <select name="brand" value={myForm.inputs.brand} onChange={myForm.handleInputChange} id="">
                <option value="">Select A Brand</option>
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
                <option value="Mercedes">Mercedes</option>
                <option value="Corvette">Corvette</option>
            </select>
            <input type="Number" name="ratings" onChange={myForm.handleInputChange} value={myForm.inputs.ratings} min="1" max="5" required placeholder="Ratings" />
            <input type="text" name="relatedVideos1" onChange={myForm.handleInputChange} value={myForm.inputs.relatedVideos1} placeholder="Related Videos 1" />
            <input type="text" name="relatedVideos2" onChange={myForm.handleInputChange} value={myForm.inputs.relatedVideos2} placeholder="Related Videos 2" />
            <input type="text" name="relatedVideos3" onChange={myForm.handleInputChange} value={myForm.inputs.relatedVideos3} placeholder="Related Videos 3" />
            <div className="fileupload">
                <p className="styleClass" onClick={() => document.getElementById('getFile').click()}>Upload Image 1 Your Images</p>
                <input type='file' onChange={onFileUpload} name="carName" id="getFile" />            
            </div>
            <div className="fileupload">
                <p className="styleClass" onClick={() => document.getElementById('getFile').click()}>Upload Image 2 Your Images</p>
                <input type='file' onChange={onFileUpload} name="carName" id="getFile" />            
            </div>
            <div className="fileupload">
                <p className="styleClass" onClick={() => document.getElementById('getFile').click()}>Upload Image 3 Your Images</p>
                <input type='file' onChange={onFileUpload} name="carName" id="getFile" />            
            </div>
            <div className="fileupload">
                <p className="styleClass" onClick={() => document.getElementById('getFile').click()}>Upload Image 4 Your Images</p>
                <input type='file' onChange={onFileUpload} name="carName" id="getFile" />            
            </div>
            <div className="fileupload">
                <p className="styleClass" onClick={() => document.getElementById('getFile').click()}>Upload Image 5 Your Images</p>
                <input type='file' onChange={onFileUpload} name="carName" id="getFile" />            
            </div>
            <div className="fileupload">
                <p className="styleClass" onClick={() => document.getElementById('getFile').click()}>Upload Image 6 Your Images</p>
                <input type='file' onChange={onFileUpload} name="carName" id="getFile" />            
            </div>
            <div className="fileupload">
                <p className="styleClass" onClick={() => document.getElementById('getFile').click()}>Upload Image 7 Your Images</p>
                <input type='file' onChange={onFileUpload} name="carName" id="getFile" />            
            </div>
            <div className="fileupload">
                <p className="styleClass" onClick={() => document.getElementById('getFile').click()}>Upload Image 8 Your Images</p>
                <input type='file' onChange={onFileUpload} name="carName" id="getFile" />            
            </div>
            <div className="fileupload">
                <p className="styleClass" onClick={() => document.getElementById('getFile').click()}>Upload Image 9 Your Images</p>
                <input type='file' onChange={onFileUpload} name="carName" id="getFile" />            
            </div>
            <div className="fileupload">
                <p className="styleClass" onClick={() => document.getElementById('getFile').click()}>Upload Image 10 Your Images</p>
                <input type='file' onChange={onFileUpload} name="carName" id="getFile" />            
            </div>
            <select name="published" value={myForm.inputs.published} onChange={myForm.handleInputChange} id="">
                <option value="">Do You Want To Publish</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
            </select>
            <button>Create New</button>
            </form>
        </Card>
        {
            load ? 
        <div className="overlay-box">
            <div className="loader-box">
                <div class="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        : null
        }
    </div> );
}

export default CarNewForm;