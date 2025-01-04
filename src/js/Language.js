'use strict'
import { settings } from "./Settings";
import { clearHTML, newElement } from "./functions";
import { Addresses, About } from "./Data";

const Language = {
    current: 'English',
    switch: function() {
        const thaiBtn = document.getElementById('thai-btn');
        const ukBtn = document.getElementById('uk-btn');
        if (this.current === 'English') {
            this.current = 'Thai';
        } else {
            this.current = 'English';
        }
        if (this.current === 'English') {
            thaiBtn.style.opacity = 0.2;
            thaiBtn.style.zIndex = 50000;
            ukBtn.style.opacity = 0.8;
            ukBtn.style.zIndex = 60000;
        } else {
            thaiBtn.style.opacity = 1;
            thaiBtn.style.zIndex = 60000;
            ukBtn.style.opacity = 0.2;
            ukBtn.style.zIndex = 50000;
        }
    },


    change: function() {
        // find us page
        if (settings.currentPage === 'Find Us') {
            const adContainer = document.getElementById('address-container');
            clearHTML(adContainer);
            if (this.current === 'Thai') {
                for (const item of Addresses.thai) {
                    const line = newElement('p', item, ['address-line'], '');
                    adContainer.appendChild(line);
                }
                document.getElementById('directions-btn').innerText = 'รับทิศทาง';
            } else {
                for (const item of Addresses.english) {
                    const line = newElement('p', item, ['address-line'], '');
                    adContainer.appendChild(line);
                }
                document.getElementById('directions-btn').innerText = 'GET DIRECTIONS';
            }
        }
        // about page
        if (settings.currentPage === 'About') {
            let title = document.getElementById('about-title');
            if (this.current === 'Thai') {
                title.innerText = About.thaiTitle;
                title.style.fontSize = '4rem';
                title.style.marginTop = '70px'
                for (let i = 0; i < About.thai.length; i++) {
                    const para = document.getElementById(`about-p${i}`)
                    para.innerText = About.thai[i];
                    para.style.fontSize = '2rem';
                }
            } else {
                title.innerText = About.englishTitle;
                title.style.fontSize = '5.4rem'
                for (let i = 0; i < About.english.length; i++) {
                    const para = document.getElementById(`about-p${i}`)
                    para.innerHTML = About.english[i];
                    para.style.fontSize = '1.7rem';
                    title.style.marginTop = '35px'
                }
            }
        }





    }
}

export { Language };

