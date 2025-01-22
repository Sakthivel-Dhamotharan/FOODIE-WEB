import React ,{useEffect} from 'react'
import './Navbar.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


function Navbar() {
  useEffect(() => {
    AOS.init({
      duration:800
    });
  }, [])
  return (
    <div data-aos="zoom-in" className='nav'>
       <h3>Foodie</h3>
        <div className='navbar-item'>
                <ul className='navbar'>
                       <li><span class="material-symbols-outlined"></span>Home</li>
                       <li>Price</li>
                       <li>About</li>
                       <li>Contact</li>
                </ul> 
        </div>
    </div>
  )
}

export default Navbar