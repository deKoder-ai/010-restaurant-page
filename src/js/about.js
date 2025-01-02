'use strict'
import '../css/about.css';
import { newElement } from "./newElement";
import hoLogo from "../img/ho-logo-sm.jpg";
import cocktail from '../img/cocktail-glass.svg';



const page = (function() {
    // hideout logo
    const image = newElement('img', '', '', 'ho-logo');
    image.src = hoLogo;
    const logoDiv = newElement('div', '', ['flex-center'], 'logo-div');
    logoDiv.appendChild(image);
    
    // text
    const text = {
        title: 'Where the city\'s best-kept secret is waiting to be uncovered, and the good times are always on tap',
        p1: 'Step into the unassuming entrance, and discover a world of hidden delights. At Hideout Ari, we\'ve repurposed an old [insert location] to create a sophisticated oasis in the heart of the city. Think exposed brick, reclaimed wood, and vintage accents – with a dash of modern flair.',
        p2: 'By day, our bar is a quiet haven for coffee and conversation. By night, we transform into a lively music venue, featuring local acts that\'ll keep you dancing till the lights come up. With a menu that\'s always evolving, we offer everything from craft cocktails and small plates to wine and beer – and always something new to try.',
        p3: 'From our globally-inspired small plates to our expertly crafted cocktails, every detail at Hideout Ari is designed to make you feel at home. Join us for dinner, drinks, or just a night out with friends – and experience the warm, welcoming vibe that\'s making us the city\'s best-kept secret.'
    }
    const title = newElement('h4', text.title, ['about']);
    const p1 = newElement('p', text.p1, ['about']);
    const p2 = newElement('p', text.p2, ['about']);
    const p3 = newElement('p', text.p3, ['about']);
    const aboutContainer = newElement('div', '', '', 'about-container');
    aboutContainer.appendChild(logoDiv);
    aboutContainer.appendChild(title);
    aboutContainer.appendChild(p1);
    aboutContainer.appendChild(p2);
    aboutContainer.appendChild(p3);

    // cocktail glass
    const cocktailGlass = newElement('img', '', '', 'cocktail-svg');
    cocktailGlass.src = cocktail;
    const cocktailDiv = newElement('div', '', ['flex-center'], 'cocktail-div');
    cocktailDiv.appendChild(cocktailGlass);
    aboutContainer.appendChild(cocktailDiv);

    // side glass
    const cocktailGlassL = newElement('img', '', ['cocktail-svg-2'], 'cocktail-L');
    const cocktailGlassR = newElement('img', '', ['cocktail-svg-2'], 'cocktail-R');
    cocktailGlassL.src = cocktail;
    cocktailGlassR.src = cocktail;
    aboutContainer.appendChild(cocktailGlassL);
    aboutContainer.appendChild(cocktailGlassR);



    const content = aboutContainer;

    return { content };
})();

const aboutContent = page.content;

export { aboutContent };