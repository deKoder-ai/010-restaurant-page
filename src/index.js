'use strict'
import './styles.css';
// import './css/slideshow.css';
import { findUsContent } from './js/find-us.js';
import { createMap } from './js/map';
// import { slideshow, showSlides} from './js/slideshow.js';
import { aboutContent } from './js/about.js';
// import { homePage, ssInterval } from './js/home.js';
import { homeContent , showSlides } from './js/home.js';
import { menuContent } from './js/menu.js';
import { newElement } from './js/functions.js';
// import { slideshow, showSlides } from './js/slideshow.js';
import { openMenu, closeMenu, toggle } from './js/header.js';
import { Language } from './js/Language.js';
import { clearHTML } from './js/functions.js';
import { settings } from './js/Settings.js';
import leChatNoir from "./img/le-chat-noir.png";

let ssInterval = null;

// load home page on page load
window.onload = function() {
    settings.pageContainer.appendChild(homeContent);
    settings.currentPage = 'Home';
    ssInterval = setInterval(showSlides, 5000);
    const welcome = newElement('h1', 'Welcome!', '' ,'home-welcome');
    settings.pageContainer.appendChild(welcome);
    setTimeout(function() {
        const fadeout = welcome;
        fadeout.style.opacity = 1;
        fadeout.style.transition = "opacity 5s";
        fadeout.style.opacity = 0;
    }, 5000);
};

let mapDiv = null;

const chat = newElement('img', '', '', 'chat');
chat.src = leChatNoir;
settings.pageContainer.appendChild(chat);



const body = document.querySelector('body');
body.addEventListener('click', function(e) {
    const target = e.target;
    switch(target.id) {
        case 'home-btn':
            clearHTML(settings.pageContainer);
            document.title = 'HIDEOUT | Home';
            settings.pageContainer.appendChild(homeContent);
            ssInterval = setInterval(showSlides, 5000);
            settings.currentPage = 'Home';
            break;
        case 'about-btn':
        case 'dd-0-btn':
            closeMenu();
            clearHTML(settings.pageContainer);
            document.title = 'HIDEOUT | About';
            clearInterval(ssInterval);
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            settings.pageContainer.appendChild(aboutContent);
            settings.currentPage = 'About';
            break;
        case 'menu-btn':
        case 'dd-1-btn':
            closeMenu();
            clearHTML(settings.pageContainer);
            document.title = 'HIDEOUT | Menu';
            clearInterval(ssInterval);
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            settings.pageContainer.appendChild(menuContent);
            settings.currentPage = 'Menu';
            break;
        case 'find-us-btn':
        case 'dd-2-btn':
            closeMenu();
            clearHTML(settings.pageContainer);
            document.title = 'HIDEOUT | Find Us';
            settings.currentPage = 'Find Us';
            clearInterval(ssInterval);
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            settings.pageContainer.appendChild(findUsContent.content);
            mapDiv = document.getElementById('map');
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
            if (toggle === false) {
                openMenu();
            } else {
                closeMenu();
            }
            break;
        case 'thai-btn':
        case 'uk-btn':
            Language.switch();
            Language.change();
            break;

        default:
            closeMenu();
            
    }
});

window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
        if (toggle === true) {
            closeMenu();
        }
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


// Commit 4
// Add responsive design and dropdown menu

//  - rewrite code for responsive design
//  - create code for header dropdown menu


// Commit 5
// Update

//  - Added initial class to prevent flashing objects on page load
//  - Create functions.js to hold reusable functions
//  - Refactor menu page and add tables to hold menu items
//  - Create menuItems.js to hold menu items object
//  - Add button to scroll to top of menu page
//  - Restyle Find Us address
//  - Fix footer media query bug
//  - Create button to change language
//  - Start writing logic to change page language - needs work
//  - Create settings file to store global variables
//  - Dynamically update tab title on page change
//  - Add translate function to about page
//  - Rebuild slideshow for home page
//  - Add fadeout welcome message on first load
