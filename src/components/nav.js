import React from 'react';
import './styles.css'
import Logo from './logo.png'

const nav = () => {
        return(
            <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <img alt='logo' src={Logo}/>
                <a class="navbar-brand js-scroll-trigger">Footcentage</a>
                <div class="collapse navbar-collapse" >
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#games">Fixtures</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="#about">About</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default nav;