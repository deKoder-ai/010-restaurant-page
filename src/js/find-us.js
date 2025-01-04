'use strict'
import '../css/find-us.css';
import { newElement } from "./functions";
import hoLogoSrc from '../img/ho-logo-sm.jpg';
import { Addresses } from './Data';
import { Language } from './Language';
import { clearHTML } from './functions';
import { settings } from './Settings';

const page = function() {
    settings.currentPage = 'Find Us';
    const findContainer = newElement('div', '',  '', 'find-container');
    const logo = newElement('img', '', '', 'logo');
    logo.src = hoLogoSrc;
    findContainer.appendChild(logo);

    // heading
    const titleContainer = newElement('div', '', ['flex-center'], 'title-container');
    const addressTitleH3 = newElement('h3', `HIDEOUT ARI\nBAR & RESTAURANT`, '', 'find-us-title');
    titleContainer.appendChild(addressTitleH3);
    findContainer.appendChild(titleContainer);

    // map
    const mapContainerDiv = newElement('div', '', '', 'map-container');
    const mapDiv = newElement('div', '', '', 'map');
    mapContainerDiv.appendChild(mapDiv);
    findContainer.appendChild(mapContainerDiv);

    // directions button
    const directionsContainer = newElement('div', '', ['flex-center'], 'directions-container');
    const directions = newElement('button', 'GET DIRECTIONS', '', 'directions-btn');

    directionsContainer.appendChild(directions);
    findContainer.appendChild(directionsContainer);

    const addressContainer = newElement('div', '', '', 'address-container');
    console.log(Language.current);

    if (Language.current === 'Thai') {
        for (const item of Addresses.thai) {
            const line = newElement('p', item, ['address-line'], '');
            addressContainer.appendChild(line);
        }
        // Language.getElementById('directions-btn').innerText = 'รับทิศทาง';
    } else {
        for (const item of Addresses.english) {
            const line = newElement('p', item, ['address-line'], '');
            addressContainer.appendChild(line);
        }
        // document.getElementById('directions-btn').innerText = 'GET DIRECTIONS';
    }
 
    findContainer.appendChild(addressContainer);
    
    const content = findContainer;
    return { content };
};


const findUsContent = page();

export { findUsContent };

// if (Language.current === 'Thai') {
//     for (const item of Addresses.thai) {
//         const line = newElement('p', item, ['address-line'], '');
//         addressContainer.appendChild(line);
//     }
//     // Language.getElementById('directions-btn').innerText = 'รับทิศทาง';
// } else {
//     for (const item of Addresses.english) {
//         const line = newElement('p', item, ['address-line'], '');
//         addressContainer.appendChild(line);
//     }
//     // document.getElementById('directions-btn').innerText = 'GET DIRECTIONS';
// }