
import '../App';
import {Button} from './Button';
import './HeroSection.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';


import './Navbar.css'





const HeroSection = () => {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
   
   

    return (
        <div className="hero-container">
<video src="/videos/video.mp4" autoPlay loop muted />

<h1> POEMARIO DE UN CORAZÓN DESDICHADO </h1>
<p>   Escribo desde la ausencia </p>


<div className="hero-btns">

<Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
 
      Nacer <i class="fas fa-cloud-sun"/>

      <Link to="/Nacer" className="nav-links" onClick={handleClick}></Link>
   

</Button>

<Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
 
  Morir <i class="fas fa-cloud-moon"/>
  <Link to="/Morir" className="nav-links" onClick={handleClick}></Link>
</Button>


</div>

        </div>
    )
}

export default HeroSection
