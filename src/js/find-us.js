'use strict'
import '../css/find-us.css';
import { newElement } from "./newElement";
import cocktail from '../img/cocktail-glass.svg';

const page = (function() {
    const findUsPage = newElement('div', '',  ['flex-center'], 'find-page');
    const findContainerDiv = newElement('div', '',  '', 'find-container');

    // heading
    const titleContainer = newElement('div', '', ['flex-center'], 'title-container');
    const addressTitleH3 = newElement('h3', 'HIDEOUT ARI / BAR & RESTAURANT', '', 'find-us-title');
    titleContainer.appendChild(addressTitleH3);
    findContainerDiv.appendChild(titleContainer);

    // map
    const mapContainerDiv = newElement('div', '', '', 'map-container');
    const mapDiv = newElement('div', '', '', 'map');
    mapContainerDiv.appendChild(mapDiv);
    findContainerDiv.appendChild(mapContainerDiv);

    // directions button
    const directionsContainer = newElement('div', '', ['flex-center'], 'directions-container');
    const directions = newElement('button', 'GET DIRECTIONS', '', 'directions-btn');
    directionsContainer.appendChild(directions);
    findContainerDiv.appendChild(directionsContainer);

    const addressContainer = newElement('div', '', ['flex-center'], 'address-container');
    const addressLeft = newElement('div', '', '', 'address-left');
    const addressRight = newElement('div', '', '', 'address-right');
    addressContainer.appendChild(addressLeft);
    addressContainer.appendChild(addressRight);

    const para = [];
    para[0] = newElement('p', `5th Floor `);
    const hubLink = newElement('a', ' @The Hub', ['link'], 'find-us-hub-link');
    para[0].appendChild(hubLink);
    para[1] = newElement('p', '466/1-39 Phahon Yotin Road,');
    para[2] = newElement('p', 'Ari, Phaya Thai,');
    para[3] = newElement('p', 'BKK, 10400');
    para[4] = newElement('p', 'Phone: (+66)85 085 1568');
    para[5] = newElement('p', 'Email: hideout.ari@gmail.com');
    para[6] = newElement('a', 'Facebook: Hideout Ari', ['link'], 'find-us-fb-link');
    for (let i = 0; i < 4; i++) {
        addressLeft.appendChild(para[i]);
    }
    for (let i = 4; i < 7; i++) {
        addressRight.appendChild(para[i]);
    }
 
    findContainerDiv.appendChild(addressContainer);
    
    const cocktailGlassL = newElement('img', '', ['cocktail-svg'], 'cocktail-L');
    const cocktailGlassR = newElement('img', '', ['cocktail-svg'], 'cocktail-R');
    cocktailGlassL.src = cocktail;
    cocktailGlassR.src = cocktail;
    findUsPage.appendChild(cocktailGlassL);
    findUsPage.appendChild(cocktailGlassR);

    findUsPage.appendChild(findContainerDiv);
    const content = findUsPage;
    return { content };
})();

const findUsContent = page.content;

export { findUsContent };