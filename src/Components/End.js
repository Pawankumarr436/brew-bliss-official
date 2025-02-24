import React from 'react';
import cafelogo from './@image/cafelogo.png';
import '../Media/end.css';  // Adjusted path to match your directory structure

function End(){
    return(
        <section id="Contactuscafe">
        <div class="end">
            <div class="end1">
                <div class="end1child">
                    <h4 class="fontfamilyshadow">CONTACT US</h4><br></br>
                    <p class="fontfamilyshadow2">B-27, Connaught Place, New Delhi, 110001, India</p><br></br>
                    <p class="fontfamilyshadow2">Call-8920823320</p>
                </div>
                <div class="end1child" id="end1childd">
                    <img class="cafelogo1" src={cafelogo} height="200px" width="300px" alt="Logo"></img>
                    <h4 class="fontfamilyshadow2">Join our mailing list for updates,
                    Get news & offers events.</h4>
                    <form class="row g-3">
                        <div class="col-auto" >
                        <input type="email" class="form-control" id="inputPassword41"placeholder="Email"/>
                        </div>
                        <div class="col-auto">
                        <button type="submit" id="bookbtn" class="btn btn-primary mb-3">Send</button>
                        </div>
                    </form>
                </div>
                <div class="end1child1">
                   <h4 class="fontfamilyshadow">TIMING</h4>
                    <p class="fontfamilyshadow2">Mon – Fri: 12:00 NOON - 1:00 AM<br></br>
                    Sat - Sun: 12:00 NOON - 1:00 AM</p>
                    
                </div>
                
            </div>
            <div class="end2">
                
                <p class="pawan">Crafted with passion by Pawan</p>
                
            </div>

        </div>
        </section>
    )
}
export default End 