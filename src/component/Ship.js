import React, {useState} from 'react'
import AddressFrom from './Shipping/AddressFrom'
import AddressTo from './Shipping/AddressTo'
import PackageInfo from './Shipping/PackageInfo'
import Review from './Shipping/Review'



function Ship() {
    const[step, setStep]=useState(0)
    const steps = ["Ship from", "Ship to", "Package details", "Review information."]
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
            return <AddressFrom />
        } else if (step=== 1){
            return <AddressTo />
        } else if (step === 3){
            return <PackageInfo />
        } else {
            return <Review />
        }

    }

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