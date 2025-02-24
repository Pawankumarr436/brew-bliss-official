import React from'react';
import cafebanner from './@image/cafebanner.jpg';
import cafelogo from './@image/cafelogo.png';
import menu from './@image/menu.png';
import '../Media/front.css';  // Adjusted path to match your directory structure


function Front(){
    return(
      <section id="Topcafe">
      <div class="frontpage">
        <img src={cafebanner} height="100%" width="100%" alt="Cafebanner"></img>
        <div>
        <nav class="navbar navbar-expand-lg custom-navbar">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src={cafelogo} height="100%" width="200px"></img>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <img src={menu}alt="Menu" width="40" height="40"></img>
</button>
      
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" id="nav" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"id="nav" href="#aboutcafe">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="nav"href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Menu
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item"id="nav" href="#">Coffee</a></li>
            <li><a class="dropdown-item"id="nav" href="#">Tea</a></li>
            <li><a class="dropdown-item"id="nav" href="#">Desserts</a></li>
            <li><a class="dropdown-item" id="nav"href="#">Non-Coffee</a></li>
            <li><hr class="dropdown-divider"id="nav"/></li>
            <li><a class="dropdown-item" id="nav"href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav" href="#gallerycafe">Gallery</a>
        </li><li class="nav-item">
          <a class="nav-link"id="nav"href="#Reservationcafe">Reservation</a>
        </li><li class="nav-item">
          <a class="nav-link"id="nav" href="#Outletscafe">Outlets</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nav"href="#Contactuscafe">Contact Us</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button id="searchbtn" class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

        </div>
           
      </div>
      
      </section>
    )
    
    
}
export default Front