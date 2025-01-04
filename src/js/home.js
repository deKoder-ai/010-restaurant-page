'use strict'
import '../css/home.css';
import { newElement } from "./functions";
import hoLogo from "../img/ho-logo-sm.jpg";
import frame from '../img/frame-2.png';
const path = require.context('../img/ss-images/', false, /\.jpg$/);

const Home = {
    topPage: document.getElementById('page'),
    homeContainer: newElement('div', '', '', 'home-container'),
    ssContainer: newElement('div', '', '', 'ss-container'),
    frameImg: newElement('img', '', '', 'home-frame'),
    slidePaths: path.keys().map(path),
    slides: [],
    ssIndex: 0,
    leftBtn: newElement('button', '<', ['ss-btn'], 'ss-btn-L'),
    rightBtn: newElement('button', '>', ['ss-btn'], 'ss-btn-R'),
    getSlides: function() {
        for (let i = 0; i < this.slidePaths.length; i++) {
            const imgDiv = newElement('div', '', ['slides', 'fade'], 'img-div');
            const img = newElement('img');
            img.classList.add('slide');
            img.src = this.slidePaths[i];
            imgDiv.appendChild(img);
            this.slides[i] = imgDiv;
        }
    },
    displayNone: function() {
        for (let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = 'none';
        }
    },
    resetIndex: function() {
        if (this.ssIndex < 0) {
            this.ssIndex = this.slides.length - 1;
        } else if (Home.ssIndex >= this.slides.length) {
            this.ssIndex = 0;
        }
    },
    page: function() {
        this.homeContainer.appendChild(this.ssContainer);
        this.frameImg.src = frame;
        this.getSlides();
        for (const slide of this.slides) {
            this.ssContainer.appendChild(slide);
        }
        this.displayNone();
        this.slides[this.ssIndex].style.display = 'block';
        this.ssContainer.appendChild(this.frameImg);
        this.ssContainer.appendChild(this.leftBtn);
        this.ssContainer.appendChild(this.rightBtn);
        return this.homeContainer;
    }
}

// slideshow button events handler
const events = (function() {
    document.addEventListener('click', function(e) {
        const target = e.target;
        switch(target.id) {
            case 'ss-btn-L':
                Home.ssIndex -= 1;
                Home.resetIndex();
                Home.displayNone();
                Home.slides[Home.ssIndex].style.display = 'block';
                break;
            case 'ss-btn-R':
                Home.ssIndex++;
                Home.resetIndex();
                Home.displayNone();
                Home.slides[Home.ssIndex].style.display = 'block';
                break;
        }
    })
})();

// function to call for automatic slideshow
function showSlides() {
    Home.ssIndex++;
    Home.resetIndex();
    Home.displayNone();
    Home.slides[Home.ssIndex].style.display = 'block';
}

const homeContent = Home.page();
export { homeContent, showSlides };