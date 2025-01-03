'use strict'
import '../css/home.css';
import { newElement } from "./newElement";
import hoLogo from "../img/ho-logo-sm.jpg";

const path = require.context('../img/ss-images/', false, /\.jpg$/);

// const Home = {
//     // load all ss images
//     ssImages: path.keys().map(path),
//     homeContainer: newElement('div', '', '', 'home-container'),
//     ssContainer: newElement('div', '', ['slideshow-container']),
//     ssElements: [],
//     createSsImages: function() {
//         for (let i = 0; i < this.ssImages.length; i++) {
//             const imgDiv = newElement('div', '', ['slides', 'fade']);
//             this.ssElements[i] = imgDiv;
//             const img = newElement('img', '');
//             img.src = this.ssImages[i];
//             imgDiv.appendChild(img);
//             this.ssContainer.appendChild(imgDiv);
//         }
//     },
//     prev: newElement('button', '<', ['prev']),
//     next: newElement('button', '>', ['next']),
//     create: function() {
//         this.ssContainer.appendChild(this.prev);
//         this.ssContainer.appendChild(this.next);
//         this.homeContainer.appendChild(this.ssContainer);
//     }
// }










// // slideshow
// const slideshow = {
//     index: 0,
//     next: function() {
//         this.index++;
//     },
//     resetIndex: function() {
//         if (this.index > this.slides.length - 1) {
//             this.index = 0;
//         } else if (this.index < 0) {
//             this.index = this.slides.length - 1;
//         }
//     },
//     slides: Home.ssElements,

//     noDisplay: function() {
//         for (let i = 0; i < this.slides.length; i++) {
//             this.slides[i].style.display = "none";
//         }
//     },
//     display: function() {
//         this.slides[this.index].style.display = 'inline';
//     },
//     firstSlide: function() {
//         this.slides[0].style.display = 'inline';
//         this.index++;
//     },
//     forward: function() {
//         this.noDisplay();
//         this.index++;
//         this.resetIndex();
//         this.slides[this.index].style.display = 'inline';
//     },
//     back: function() {
//         this.noDisplay();
//         this.index -= 1;
//         this.resetIndex();
//         this.slides[this.index].style.display = 'inline';
//     }
// }

// function showSlides() {
//     slideshow.noDisplay();
//     slideshow.display();
//     slideshow.next();
//     slideshow.resetIndex();
// }
// function firstSlide() {
//     slideshow.firstSlide();
// }

// if (Home.ssContainer) {
//     firstSlide();
// }

// const ssInterval = setInterval(showSlides, 5000);


// export { homePage, ssInterval };


const ssImages = path.keys().map(path);
const homeContainer = newElement('div', 'adasdasd', '', 'home-container');
const ssContainer = newElement('div', '', ['slideshow-container']);
let ssElements = [];
(function createSsImages() {
    for (let i = 0; i < ssImages.length; i++) {
        const imgDiv = newElement('div', '', ['slides', 'fade']);
        ssElements[i] = imgDiv;
        const img = newElement('img', '');
        img.src = ssImages[i];
        imgDiv.appendChild(img);
        ssContainer.appendChild(imgDiv);
    }
})();

homeContainer.appendChild(ssElements[0]);
const homeContent = homeContainer;

export { homeContent };