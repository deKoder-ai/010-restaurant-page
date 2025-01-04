'use strict'
import '../css/about.css';
import { newElement } from "./functions";
import hoLogo from "../img/ho-logo-sm.jpg";
import cocktail from '../img/cocktail-glass.svg';
import { About } from './Data';
import { Language } from './Language';



const page = (function() {
    const aboutContainer = newElement('article', '', '', 'about-container');
    // hideout logo
    const image = newElement('img', '', '', 'ho-logo');
    image.src = hoLogo;
    const logo = newElement('div', '', ['flex-center'], 'logo-div');
    logo.appendChild(image);
    aboutContainer.appendChild(logo);
    
    // title
    const titleText = `Where the city\'s best-kept secret is waiting to be 
        uncovered, and the good times are always on tap`;
    const title = newElement('h4', titleText, ['about'], 'about-title');
    aboutContainer.appendChild(title);

    // text
    for (let i = 0; i < About.english.length; i++) {
        const p = newElement('p', About.english[i], ['about'], `about-p${i}`);
        aboutContainer.appendChild(p);
    };

    // cocktail glass
    const cocktailGlass = newElement('img', '', '', 'cocktail-svg');
    cocktailGlass.src = cocktail;
    const cocktailDiv = newElement('div', '', ['flex-center'], 'cocktail-div');
    cocktailDiv.appendChild(cocktailGlass);
    aboutContainer.appendChild(cocktailDiv);


    const content = aboutContainer;

    return { content };
})();

const aboutContent = page.content;

export { aboutContent };