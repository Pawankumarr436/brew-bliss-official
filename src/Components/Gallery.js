import React from 'react';
import gallery from './@image/gallery.png';
import foodgallery from './@image/foodgallery.jpeg';
import drinkgallery from './@image/drinkgallery.jpeg';
import ambiencegallery from './@image/ambiencegallery.jpeg';
import '../Media/gallery.css';  // Adjusted path to match your directory structure
function Gallery(){
    return(
        <section id="gallerycafe">
            <div class="page4">
                <div class="gallery1"id="gallery1">
                    <img src={gallery} height="60px" width="60px" alt="Gallery"></img>
                <h2 class="fontfamily">OUR GALLERY</h2>
                </div>
                <div class="gallery2">
                    <div class="gallerychild">
                        <img class="galleryimage" src={foodgallery} height="100%" width="100%" alt="Food Gallery"></img>
                      
                    </div>
                    <div class="gallerychild">
                        <img class="galleryimage" src={drinkgallery} height="100%" width="100%" alt="Drink Gallery"></img>
                    </div>
                    <div class="gallerychild">
                        <img class="galleryimage" src={ambiencegallery} height="100%" width="100%" alt="Ambience Gallery"></img>
                    </div>
                    
                </div>


            </div>
        </section>

    )
}
export default Gallery