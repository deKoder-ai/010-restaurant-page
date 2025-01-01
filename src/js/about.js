'use strict'
import { newElement } from "./newElement";

import hoLogo from "../img/ho-logo-sm.jpg";

   
const image = newElement('img', '', '', 'ho-logo');
image.src = hoLogo;
const logoDiv = newElement('div', '', ['flex-center'], 'logo-div');
logoDiv.appendChild(image);

const mainContentDiv = document.getElementById('main-content-div');

const element = newElement('div', '', '', 'about-main')
// const hoLogo = newElement('img');

const hText = 'Where the city\'s best-kept secret is waiting to be uncovered, and the good times are always on tap';
const para1Text = 'Step into the unassuming entrance, and discover a world of hidden delights. At Hideout Ari, we\'ve repurposed an old [insert location] to create a sophisticated oasis in the heart of the city. Think exposed brick, reclaimed wood, and vintage accents – with a dash of modern flair.';
const para2Text = 'By day, our bar is a quiet haven for coffee and conversation. By night, we transform into a lively music venue, featuring local acts that\'ll keep you dancing till the lights come up. With a menu that\'s always evolving, we offer everything from craft cocktails and small plates to wine and beer – and always something new to try.';
const para3Text = 'From our globally-inspired small plates to our expertly crafted cocktails, every detail at Hideout Ari is designed to make you feel at home. Join us for dinner, drinks, or just a night out with friends – and experience the warm, welcoming vibe that\'s making us the city\'s best-kept secret.';

const heading1 = newElement('h4', hText, ['about']);
const para1 = newElement('p', para1Text, ['about']);
const para2 = newElement('p', para2Text, ['about']);
const para3 = newElement('p', para3Text, ['about']);

const div1 = newElement('div', '', '', 'about-main');
div1.appendChild(logoDiv);
div1.appendChild(heading1);
div1.appendChild(para1);
div1.appendChild(para2);
div1.appendChild(para3);

import cocktail from '../img/cocktail-glass.svg';
const cocktailGlass = newElement('img', '', '', 'cocktail-svg');
cocktailGlass.src = cocktail;
const cocktailDiv = newElement('div', '', ['flex-center'], 'cocktail-div');
cocktailDiv.appendChild(cocktailGlass);
div1.appendChild(cocktailDiv);


const aboutContent = div1;

export { aboutContent };