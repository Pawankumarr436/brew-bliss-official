import React from 'react';
import gps from './@image/gps.png';
import clock from './@image/clock.png';
import reservation from './@image/reservation.png';
import aboutimg from './@image/aboutimage.jpg';
import '../Media/about.css';  // Adjusted path to match your directory structure
function About(){
    return(
        <section id="aboutcafe">
            <div class="aboutcafe">
                <div class="aboutchild1" >
                    <div class="about1">
                        <img class="img"src={gps} height="60px" width="60px" alt="Location"></img>
                        <h3 class="fontfamily">Locate us</h3>
                        <p class="fontfamily2">B-27, Connaught Place, New Delhi, 110001, India</p>

                    </div>
                    <div class="about1">
                    <img class="img"src={clock} height="60px" width="60px" alt="Clock"></img>
                    <h3 class="fontfamily">Open hours</h3>
                    <p class="fontfamily2">Everyday from 12:00 NOON - 1:00 AM</p>


                    </div>
                    <div class="about1">
                    <img class="img" src={reservation} height="60px" width="60px" alt="Reservation"></img>
                    <h3 class="fontfamily">Reservation</h3>
                    <p class="fontfamily2">Call us 8920823320</p>


                    </div>


                </div>
                <div class="aboutchild2" >
                    <div class="about2" id="about">
                        <img class="roundborder" id="roundborder12" src={aboutimg} height="100%" width="100%" alt="BREW BLISS IMAGE"></img>


                    </div>
                    <div class="about2" id="about2">
                       <h3 class="fontfamily">Welcome to Brew Bliss-Where Every Sip is a Moment of Bliss!</h3> <br></br>
                       <p class="fontfamily2">
                           Established in 2004, Brew Bliss has been crafting coffee experiences for two decades, serving as a go-to spot for coffee lovers. We believe that coffee is more than just a beverage—it's an experience. Located in the heart of the city, our cafe offers a cozy retreat from the daily hustle, where the rich aroma of freshly brewed coffee meets a warm and welcoming atmosphere.
                           Whether you're looking for a morning pick-me-up, a casual meet-up, or a quiet moment of relaxation, Brew Bliss offers a diverse range of artisan blends, handcrafted pastries, and a dedication to quality. With 20 years of experience, we're here to make every visit a flavorful escape.
                           Come in, sip, relax, and let Brew Bliss turn every moment into bliss!
                        </p>

                        
                    </div>


                </div>

            </div>
        </section>
    )
}
export default About