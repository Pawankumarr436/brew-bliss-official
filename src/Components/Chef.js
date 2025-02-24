import React from 'react';
import cuisine from './@image/cuisine.png';
import drink from './@image/drink.png';
import ambience from './@image/ambience.png';
import vibe from './@image/vibe.png';
import chefimage from './@image/chefimage.webp';
import '../Media/chef.css';  // Adjusted path to match your directory structure
function Chef(){
    return(
        <div class="page3">
             
            <div class="chef1" >
            
                <div class="chefchild">
                    <img src={cuisine} height="60px" width="60px" alt="img"></img>
                    <h3 class="fontfamilyshadow">Multi-Cuisine</h3>
                    <p class="fontfamilyshadow2" id="font">One bite and experience a delightful burst of flavours.</p>

                </div>
                <div class="chefchild">
                <img src={drink} height="60px" width="60px" alt="img"></img>
                    <h3 class="fontfamilyshadow">Delectable Concoctions</h3>
                    <p class="fontfamilyshadow2" id="font">Explore flavourful cocktails that are crafted to perfection.</p>

                </div>
                <div class="chefchild">
                <img src={ambience} height="60px" width="60px" alt="img"></img>
                    <h3 class="fontfamilyshadow">Rustic Ambience</h3>
                    <p class="fontfamilyshadow2" id="font">Explore Openhouse’s rustic timeless decor with modern touch.</p>

                </div>
                <div class="chefchild" id="chefchild">
                <img src={vibe} height="60px" width="60px" alt="img"></img>
                    <h3 class="fontfamilyshadow">Surreal Vibes</h3>
                    <p class="fontfamilyshadow2" id="font"> With an eclectic decor, Openhouse is all about surreal vibes.</p>

                </div>
            </div>
            <div class="chef2">
                <div id="chef1"class="chefchild2">
                    <h3 class="fontfamily">Meet Our Chef – The Mastermind Behind the Blissful Flavors</h3>
                    <p class="fontfamily2">At Brew Bliss, Chef Pawan, a culinary artisan with 15+ years of experience, crafts a menu that perfectly complements our exquisite coffee. With a passion for fresh ingredients and innovative techniques, he creates delightful pastries and savory treats, ensuring every bite matches the quality of our brews. Since 2009, Chef Pawan has redefined café cuisine, making each visit a flavorful experience.
                    </p>
                </div>
                <div class="chefchild2" id="chefchild2" i>
                    <img class="roundborder" src={chefimage} height="100%" width="100%" alt="Chef Image"></img>
                </div>



            </div>


        </div>

    )
}
export default Chef