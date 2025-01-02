'use strict'
import '../css/home.css';
import { newElement } from "./newElement";
import hoLogo from "../img/ho-logo-sm.jpg";

const path = require.context('../img/ss-images/', false, /\.jpg$/);

const Home = {
    // load all ss images
    ssImages: path.keys().map(path),
    homeContainer: newElement('div', '', '', 'home-container'),
    ssContainer: newElement('div', '', ['slideshow-container']),
    ssElements: [],
    createSsImages: function() {
        for (let i = 0; i < this.ssImages.length; i++) {
            const imgDiv = newElement('div', '', ['slides', 'fade']);
            this.ssElements[i] = imgDiv;
            const img = newElement('img', '');
            img.src = this.ssImages[i];
            imgDiv.appendChild(img);
            this.ssContainer.appendChild(imgDiv);
        }
    },
    prev: newElement('button', '<', ['prev']),
    next: newElement('button', '>', ['next']),
    create: function() {
        this.ssContainer.appendChild(this.prev);
        this.ssContainer.appendChild(this.next);
        this.homeContainer.appendChild(this.ssContainer);
    }
}

const page = (function() {
    const homeContainer = newElement('div', '', '', 'home-container');
    const homeContent = newElement('div', '', '', 'home-content');
    homeContainer.appendChild(homeContent);

    // welcome
    const welcome = newElement('p', 'Welcome!', '', 'welcome');
    homeContent.appendChild(welcome);

    // hideout logo
    const image = newElement('img', '', ['flex-center'], 'home-ho-logo');
    image.src = hoLogo;
    const logoDiv = newElement('div', '', ['flex-center'], 'home-logo-div');
    logoDiv.appendChild(image);
    homeContent.appendChild(logoDiv);

    // slideshow
    const ssDiv = newElement('div', '', ['flex-center'], 'ss-div');
    homeContent.appendChild(ssDiv);


    Home.createSsImages();
    Home.create();
    

    const content = homeContainer;

    return { content };
})();

const homeContent = page.content;

export { homeContent };







// slideshow
const slideshow = {
    index: 0,
    next: function() {
        this.index++;
    },
    resetIndex: function() {
        if (this.index > this.slides.length - 1) {
            this.index = 0;
        } else if (this.index < 0) {
            this.index = this.slides.length - 1;
        }
    },
    slides: Home.ssElements,

    noDisplay: function() {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none";
        }
    },
    display: function() {
        this.slides[this.index].style.display = 'inline';
    },
    firstSlide: function() {
        this.slides[0].style.display = 'inline';
        this.index++;
    },
    forward: function() {
        this.noDisplay();
        this.index++;
        this.resetIndex();
        this.slides[this.index].style.display = 'inline';
    },
    back: function() {
        this.noDisplay();
        this.index -= 1;
        this.resetIndex();
        this.slides[this.index].style.display = 'inline';
    }
}

function showSlides() {
    slideshow.noDisplay();
    slideshow.display();
    slideshow.next();
    slideshow.resetIndex();
}
function firstSlide() {
    slideshow.firstSlide();
}

if (Home.ssContainer) {
    firstSlide();
}

const ssInterval = setInterval(showSlides, 5000);


// export { homePage, ssInterval };

