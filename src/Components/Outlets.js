import React from 'react';
import outlet from './@image/outlet.png';
import delhicafe from './@image/delhicafe.jpeg';
import biharcafe from './@image/biharcafe.jpeg';
import kolkatacafe from './@image/kolkatacafe.jpeg';
import '../Media/outlets.css';  // Adjusted path to match your directory structure
function Outlets(){
    return(
        <section id="Outletscafe">
            <div class="page6">
                <div class="outletchild">
                    <img src={outlet} height="60px" width="60px" alt="Outlet"></img>
                    <h2 class="fontfamily" >OUR OUTLETS</h2>
                </div>

                <div class="outletchild2">
                    <div class="outletchild21">
                    <img class="galleryimage" src={delhicafe} height="100%" width="100%" alt="Delhi Cafe"></img>
                  
                    
                        
                      
                    </div>
                    <div class="outletchild21">
                    <img class="galleryimage" src={biharcafe} height="100%" width="100%" alt="Bihar Cafe"></img>
                        
                    </div>
                    <div class="outletchild21">
                    <img class="galleryimage" src={kolkatacafe} height="100%" width="100%" alt="Kolkata Cafe"></img>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Outlets