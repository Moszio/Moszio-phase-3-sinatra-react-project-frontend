import React, {useState} from 'react'
import AddressFrom from './Shipping/AddressFrom'
import AddressTo from './Shipping/AddressTo'
import PackageInfo from './Shipping/PackageInfo'
import Review from './Shipping/Review'



function Ship() {
    const[step, setStep]=useState(0)
    const steps = ["Where are you shipping from?", "Where are you shipping to?", "Package details", "Review information"]
    const handlePrevious =()=>{
        if (step > 0){
            setStep(step-1)  
        }  
    }

    const handleNext =()=>{
        if (step <= steps.length -1 ){
            setStep(step+1)
        }
    }
    const returnStep =() =>{
        if (step === 0){
            return <AddressFrom setAddressFrom={setAddressFrom} addressFrom={addressFrom}/>
        } else if (step=== 1){
            return <AddressTo setAddressTo={setAddressTo} addressTo={addressTo}/>
        } else if (step === 2){
            return <PackageInfo setBox={setBox} box={box} />
        } else {
            return <Review box={box} addressFrom={addressFrom} addressTo={addressTo} />
        }
    }

    const initialValuesFrom = {
        firstNameFrom:"",
        lastNameFrom:"",
        phoneNumberFrom: "",
        emailFrom:"",
        streetFrom: "",
        cityFrom: '',
        StateFrom: "",
        zipFrom: 0
    }
    const initialValuesTo = {
        firstNameTo:"",
        lastNameTo:"",
        phoneNumberTo: "",
        emailTo:"",
        streetTo: "",
        cityTo: '',
        StateTo: "",
        zipTo: 0
    }
    const initialValuesPackageDetails = {
        shippingMethod:"",
        dimensionL:"",
        dimensionW: "",
        dimensionH:"",
        weight: "",
        deliveryConfirmation: '',
        packageDeliveryConfirmation: "",
    }
    const[addressFrom, setAddressFrom]=useState(initialValuesFrom)
    const[addressTo, setAddressTo]=useState(initialValuesTo)
    const[box, setBox]=useState(initialValuesPackageDetails)

  return (
    <div className="form" style={{margin:"5%"}}>
        <div className="progressBar"></div>
        <div className="form-container">
            <div className="header">
                <h1 style={{textAlign:'Center', marginBottom:"3%"}}>{steps[step]}</h1>
                {returnStep()}
            </div>
            <div className="form"></div>
            <div className="footer" style={{display:"flex", justifyContent:"center"}}>
                <button class="btn btn-primary form-control"onClick={handlePrevious} disabled={step <= 0 } style={{width:"10%", margin:'3%'}}>Back</button>
                <button class="btn btn-primary form-control"onClick= {handleNext} disabled={step >= steps.length-1} style={{width:"10%" , margin:'3%'}}>Next</button>
                
            </div>

        </div>
    </div>
  )
}

export default Ship