'use strict'
import { newElement } from "./newElement";

const mainContentDiv = document.getElementById('main-content-div');

const div = document.createElement("div");

const page = (function() {
    const body = document.getElementById('body');
    body.style.height = '100vh';

    const div1 = newElement('div');
    const div2 = newElement('div');
    const addressTitleH3 = newElement('h3', 'HIDEOUT BKK | BAR & RESTAURANT');
    const para = [];
    para[0] = newElement('p', '5th Floor @The Hub');
    para[1] = newElement('p', '466/1-39 Phahon Yotin Road,');
    para[2] = newElement('p', 'Ari, Phaya Thai,');
    para[3] = newElement('p', 'BKK, 10400');
    para[4] = newElement('p', 'Phone: (+66)85 085 1568');
    para[5] = newElement('p', 'Email: hideout.ari@gmail.com');
    para[6] = newElement('a', 'Facebook: Hideout Ari', '', 'find-us-fb-link');
    para[7] = newElement('button', 'Get Directions', '', 'directions-btn');
    
    // const fbLink = newElement('a', para[7], '', 'find-us-fb-link');
    // fbLink.href = 'https://web.facebook.com/profile.php?id=61553971927398';
    // para[7] = fbLink;

    for (let i = 0; i < 4; i++) {
        div1.appendChild(para[i]);
    }
    for (let i = 4; i < 8; i++) {
        div2.appendChild(para[i]);
    }

    
    
    const addressDiv = newElement('div', '', '', 'address');
    addressDiv.appendChild(div1);
    addressDiv.appendChild(div2);
    
    const addressContainer = newElement('div', '', '', 'address-container')
    addressContainer.appendChild(addressDiv);
    
    const div3 = newElement('div');
    div3.appendChild(addressTitleH3);
    div3.appendChild(addressContainer);
    
    const findContainerDiv = newElement('div', '',  '', 'find-container');
    findContainerDiv.appendChild(div3);

    const mapContainerDiv = newElement('div', '', '', 'map-container');
    const mapDiv = newElement('div', '', '', 'map');
    
    mapContainerDiv.appendChild(mapDiv);
    div3.appendChild(mapContainerDiv);

    

    const content = findContainerDiv;
    return { content };
})();

const findUsContent = page.content;

export { findUsContent };