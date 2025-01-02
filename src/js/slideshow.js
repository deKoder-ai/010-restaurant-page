'use strict'

const ssContainer = document.getElementsByClassName('slideshow-container');


const slideshow = {
    index: 0,
    next: function() {
        this.index++;
    },
    slides: document.getElementsByClassName("slides"),
    resetIndex: function() {
        if (this.index > this.slides.length - 1) {
            this.index = 1;
        } else if (this.index < 0) {
            this.index = this.slides.length - 1;
        }
    },
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
}
function firstSlide() {
    slideshow.firstSlide();
}

if (ssContainer) {
    firstSlide();
}


export { slideshow, showSlides}