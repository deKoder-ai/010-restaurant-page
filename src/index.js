'use strict'
import './styles.css';
import './css/slideshow.css';
import { findUsContent } from './js/find-us.js';
import { createMap } from './js/map.js';
import { slideshow, showSlides} from './js/slideshow.js';
import { aboutContent } from './js/about.js';

const mainContentDiv = document.getElementById('main-content');
function clearDOM() {
    mainContentDiv.innerHTML = '';
}

let ssInterval = null;
window.onload = function() {
    ssInterval = setInterval(showSlides, 5000);
};
// const ssContainer = document.getElementsByClassName('slideshow-container');
// if (ssContainer) {
    
// }



const body = document.querySelector('body');
body.addEventListener('click', function(e) {
    const target = e.target;
    switch(target.id) {
        case 'home-btn':
            clearDOM();
            break;
        case 'about-btn':
            clearDOM();
            clearInterval(ssInterval);
            mainContentDiv.appendChild(aboutContent);
            break;
        case 'menu-btn':
            clearDOM();
            clearInterval(ssInterval);
            break;
        case 'find-us-btn':
            clearDOM();
            clearInterval(ssInterval);
            mainContentDiv.appendChild(findUsContent);
            const mapDiv = document.getElementById('map');
            if (!mapDiv.innerHTML) {
                createMap();
            }
            break;
        case 'prev-img-btn':
            slideshow.back;
            break;
        case 'next-img-btn':
            slideshow.forward;
            break;
        case 'fb-btn':
            window.open('https://web.facebook.com/profile.php?id=61553971927398', '_blank', 'noopener, noreferrer');
            break;
        case 'find-us-fb-link':
            window.open('https://web.facebook.com/profile.php?id=61553971927398', '_blank', 'noopener, noreferrer');
            break;
        case 'directions-btn':
            window.open('https://maps.app.goo.gl/U28ZuXbwZCWrHgm99', '_blank', 'noopener, noreferrer');
            
            
    }
});






// Commit 2
//  - generate find us page html using js
