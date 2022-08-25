import React from 'react'


function PackageInfo({setBox, box}) {
    // const initialValuesPackageDetails = {
    //     shippingMethod:"",
    //     dimensionL:"",
    //     dimensionW: "",
    //     dimensionH:"",
    //     weight: "",
    //     deliveryConfirmation: '',
    //     packageDeliveryConfirmation: "",
    // }


  return (
    <div >
    <form class="row">
            
            <div class="col-md-5">
              <select name="" id="" class="form-select" name="shippingMethod" value={box.shippingMethod} onChange={(e) => setBox({...box, [e.target.name]:e.target.value})}>
                <option value=""></option>
                <option value="">Very Slow</option>
                <option value="">Slow</option>
                <option value="">Fast</option>
                <option value="">Fast & Furious</option>
              </select>
              <label class="form-label">Shipping method</label>
            </div>
            <div class="row"></div>
            <div class="col-md-5">
              <label class="form-label">Dimension</label>

            </div>
            <div class="row"></div>
            <div class="col-md-1">
              <input type="text" class="form-control" name="dimensionL" value={box.dimensionL} onChange={(e) => setBox({...box, [e.target.name]:e.target.value})}/>
              <label class="form-label">L</label>
            </div>
            <div class="col-md-1">
              <input type="text" class="form-control" name="dimensionW" value={box.dimensionW} onChange={(e) => setBox({...box, [e.target.name]:e.target.value})}/>
              <label class="form-label">W</label>
            </div>
            <div class="col-md-1">
              <input type="text" class="form-control" name="dimensionH" value={box.dimensionH} onChange={(e) => setBox({...box, [e.target.name]:e.target.value})}/>
              <label class="form-label">H</label>
              
            </div>
            <div class="row"></div>
            <div class="col-5">
              <input type="integer" class="form-control" name="weight" value={box.weight} onChange={(e) => setBox({...box, [e.target.name]:e.target.value})}/>
              <label class="form-label">Weight</label>
            </div>
            <div class="row"></div>
            <div class="col-lg-5">
              <select name="" id="" class="form-select" name="deliveryConfirmation" value={box.deliveryConfirmation} onChange={(e) => setBox({...box, [e.target.name]:e.target.value})}>
                <option value="">Email</option>
                <option value="">SMS</option>
              </select>
              <label class="form-label">Delivery confirmation</label>
            </div>            
          
            <div class="col-md-8">
              <select name="" id="" class="form-select" name="packageDeliveryConfirmation" value={box.packageDeliveryConfirmation} onChange={(e) => setBox({...box, [e.target.name]:e.target.value})}>
                <option value="">No</option>
                <option value="">Yes</option>
              </select>
              <label class="form-label">Package Delivery Confirmation</label>            
            </div>
        </form>
        </div>

  )
}

export default PackageInfo