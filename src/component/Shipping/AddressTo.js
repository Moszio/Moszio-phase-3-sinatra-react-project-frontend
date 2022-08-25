import React from 'react'
import states from 'states-us'

function AddressTo() {
  return (
        <div >
    <form class="row">
            
            <div class="col-md-5">
              <input type="text" class="form-control"/>
              <label class="form-label">First Name</label>
            </div>
            <div class="col-md-5">
              <input type="text" class="form-control"/>
              <label class="form-label">Last Name</label>
              <br></br>
              <br></br>
            </div>
            <div class="col-5">
              <input type="integer" class="form-control"/>
              <label class="form-label">Phone number</label>
            </div>
            <div class="row"></div>
            <div class="col-lg-5">
              <input type="email" class="form-control"/>
              <label class="form-label">Email</label>
            </div>            
          
            <div class="col-md-8">
              <input type="text" class="form-control"/>
              <label class="form-label">Street</label>              
            </div>
            <div class="col-lg-8">
              <input type="text" class="form-control"/>
              <label class="form-label">City</label>
            </div>
            <div class="row"></div>
            <div class="col-md-4">
              <select name="" id="" class="form-select">
                <option value=""></option>
                {states.map(state => (
                  <option value="">{state.name}</option>
                ))}
              </select>
              <label class="form-label">State</label>
            </div>
            <div class="col-md-4">
              <input maxlength="5"  class="form-control"/>
              <label class="form-label" >Zip</label>
            </div>
        </form>
        </div>
  )
}

export default AddressTo