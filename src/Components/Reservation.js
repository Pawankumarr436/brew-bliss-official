import React from 'react';
import resbookimage from './@image/resbookimage.jpg';
import Spinner from './Spinner';
import '../Media/reservation.css';  // Adjusted path to match your directory structure
function Reservation(){
    return(
     <section id="Reservationcafe">
         <div class="resbanner">
            <h3 class="fontfamilyshadow">Reservation</h3>
            <h1 class="fontfamilyshadow">Secure your spot in the lap of luxury!</h1>
            <h4 class="fontfamilyshadow2">Reserve your table at Brew Bliss today and let us indulge you!</h4>
         </div>
         <div class="page5">
            <div class="reschild" id="reschild1">
                <h3 class="fontfamily">reservation</h3>
                <h1 class="fontfamily">Book your table now</h1>
                <p class="fontfamily2">Don't wait to indulge in the visual and culinary magic of Openhouse - book your table now and let the feast begin!</p>
            <form class="row g-3">
  <div class="col-md-6">
    
    <input type="text"  class="form-control" id="inputEmail4"placeholder="Name"/><br></br>
    <input type="email" class="form-control" id="inputPassword4"placeholder="Email"/>
 
  </div>
 
   
  
 
  <div class="col-12">
    
    <input type="text" class="form-control" id="inputAddress" placeholder="Phone"/>
  </div>
  
  <div class="col-12">
    
    <input type="text" class="form-control" id="inputAddress2" placeholder="Time"/>
  </div>
  
  <div class="col-md-6">
    
    <input type="text" class="form-control" id="inputCity"placeholder="Person"/>
  </div>
  <div class="col-md-4">
   
    <select id="inputState" class="form-select"placeholder="Date of birth">
      <option selected>Choose Outlets</option>
      <option>New Delhi</option>
      <option>Kolkata</option>
      <option>Bihar</option>
    </select>
  </div>
  
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Send me mail
      </label>
    </div>
  </div>
  <div class="col-12">
  
    <button type="submit" id="bookbtn"class="btn btn-primary"  >Book a Table</button>
    
  </div>
</form>
            </div>
            <div class="reschild">
                <img class="roundborder" id="roundborder12" src={resbookimage} height="100%" width="100%" alt="Reservation Image"></img>
            </div>
         </div>
      </section>
        
        
    )
}
export default Reservation