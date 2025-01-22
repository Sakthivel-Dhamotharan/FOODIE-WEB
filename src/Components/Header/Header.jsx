import React , { useEffect }from 'react'
import "./Header.css"
import assets from '../../images/images';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Header() {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div data-aos="fade-down" id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={assets.test2} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Welcome <span>Foodie's</span> </h5>
                            <p>"Delicious Discoveries Daily"</p>
                        </div>
                </div>
                <div class="carousel-item">
                    <img src={assets.test} class="d-block w-100" alt="..." />   
                </div>
                <div class="carousel-item">
                    <img src={assets.test3} class="d-block w-100" alt="..."/>         
                </div>
                <div class="carousel-item">
                    <img src={assets.test4} class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}
