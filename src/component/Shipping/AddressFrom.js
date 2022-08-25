import React from 'react'
import states from 'states-us'




function AddressFrom({setAddressFrom, addressFrom}) {
    // const initialValuesFrom = {
    //     firstNameFrom:"",
    //     lastNameFrom:"",
    //     phoneNumberFrom: "",
    //     emailFrom:"",
    //     streetFrom: "",
    //     cityFrom: '',
    //     StateFrom: "",
    //     zipFrom: 0
    // }

            


  return (
    <div >
    <form class="row">
            
            <div class="col-md-5">

              <input type="text" class="form-control"/>
              <label class="form-label">First Name</label>
            </div>
            <div class="col-md-5">
              <input type="text" class="form-control"/>

              <input type="text" class="form-control" name="firstNameFrom" value={addressFrom.firstNameFrom} onChange={(e) => setAddressFrom({...addressFrom, [e.target.name]:e.target.value})}/>
              <label class="form-label">First Name</label>
            </div>
            <div class="col-md-5">
              <input type="text" class="form-control" name="lastNameFrom" value={addressFrom.lastNameFrom} onChange={(e) => setAddressFrom({...addressFrom, [e.target.name]:e.target.value})}/>

              <label class="form-label">Last Name</label>
              <br></br>
              <br></br>
            </div>
            <div class="col-5">

              <input type="integer" class="form-control"/>

              <input type="integer" maxLength="5" class="form-control" name="phoneNumberFrom" value={addressFrom.phoneNumberFrom} onChange={(e) => setAddressFrom({...addressFrom, [e.target.name]:e.target.value})}/>

              <label class="form-label">Phone number</label>
            </div>
            <div class="row"></div>
            <div class="col-lg-5">

              <input type="email" class="form-control"/>

              <input type="email" class="form-control" name="emailFrom" value={addressFrom.emailFrom} onChange={(e) => setAddressFrom({...addressFrom, [e.target.name]:e.target.value})}/>

              <label class="form-label">Email</label>
            </div>            
          
            <div class="col-md-8">

              <input type="text" class="form-control"/>
              <label class="form-label">Street</label>              
            </div>
            <div class="col-lg-8">
              <input type="text" class="form-control"/>

              <input type="text" class="form-control" name="streetFrom"value={addressFrom.streetFrom} onChange={(e) => setAddressFrom({...addressFrom, [e.target.name]:e.target.value})}/>
              <label class="form-label">Street</label>              
            </div>
            <div class="col-lg-8">
              <input type="text" class="form-control" name="cityFrom" value={addressFrom.cityFrom} onChange={(e) => setAddressFrom({...addressFrom, [e.target.name]:e.target.value})}/>

              <label class="form-label">City</label>
            </div>
            <div class="row"></div>
            <div class="col-md-4">

              

              <select id="" class="form-select" name="StateFrom" value={addressFrom.StateFrom} onChange={(e) => setAddressFrom({...addressFrom, [e.target.name]:e.target.value})}>

                <option value=""></option>
                {states.map(state => (
                  <option value="">{state.name}</option>
                ))}
              </select>
              <label class="form-label">State</label>
            </div>
            <div class="col-md-4">

              <input maxlength="5"  class="form-control"/>

              <input maxlength="5"  class="form-control" name="zipFrom" value={addressFrom.zipFrom} onChange={(e) => setAddressFrom({...addressFrom, [e.target.name]:e.target.value})}/>

              <label class="form-label" >Zip</label>
            </div>
        </form>
        </div>
        
  )
}

export default AddressFrom