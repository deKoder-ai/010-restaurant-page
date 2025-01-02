'use strict'
import './styles.css';
import './css/slideshow.css';
import { findUsContent } from './js/find-us.js';
import { createMap } from './js/map';
// import { slideshow, showSlides} from './js/slideshow.js';
import { aboutContent } from './js/about.js';
// import { homePage, ssInterval } from './js/home.js';
import { homeContent } from './js/home.js';
import { menuContent } from './js/menu.js';
import { newElement } from './js/newElement.js';

// function to clear content
const mainContentDiv = document.getElementById('main-content');
function clearDOM() {
    mainContentDiv.innerHTML = '';
}

// load home page on page load
window.onload = function() {
    mainContentDiv.appendChild(homeContent);
};


const body = document.querySelector('body');
body.addEventListener('click', function(e) {
    const target = e.target;
    switch(target.id) {
        case 'home-btn':
            clearDOM();
            mainContentDiv.appendChild(homeContent);
            // ssInterval = setInterval(showSlides, 5000);
            break;
        case 'about-btn':
            clearDOM();
            // clearInterval(ssInterval);
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            mainContentDiv.appendChild(aboutContent);
            break;
        case 'menu-btn':
            clearDOM();
            // clearInterval(ssInterval);
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            mainContentDiv.appendChild(menuContent);
            break;
        case 'find-us-btn':
            clearDOM();
            // clearInterval(ssInterval);
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            mainContentDiv.appendChild(findUsContent);
            const mapDiv = document.getElementById('map');
            if (!mapDiv.innerHTML) {
                createMap();
            }
            break;
        case 'prev-img-btn':
            // slideshow.back;
            break;
        case 'next-img-btn':
            // slideshow.forward;
            break;
        case 'fb-btn':
            window.open('https://web.facebook.com/people/Hideout-ARI/61553971927398/', '_blank', 'noopener, noreferrer');
            break;
        case 'find-us-fb-link':
            window.open('https://web.facebook.com/people/Hideout-ARI/61553971927398/', '_blank', 'noopener, noreferrer');
            break;
        case 'find-us-hub-link':
            window.open('https://web.facebook.com/thehubphaholari/', '_blank', 'noopener, noreferrer');
            break;
        case 'directions-btn':
            window.open('https://maps.app.goo.gl/U28ZuXbwZCWrHgm99', '_blank', 'noopener, noreferrer');
            break;
        case 'dropdown-menu':
            console.log('abc');
            break;
            
    }
});






// Commit 2
//  - generate find us page html using js

// Commit 3
// Daily update

//  - Move slideshow html to home.js
//  - Style header and fix dropdown button
//  - Open home.js on initial page load
//  - Move About styling to about.css
//  - Fix about page height
//  - Clean up about.css
//  - Move colors to root variables
//  - Restyle find us page
//  - Restructured about.js to IIFE and tidied css