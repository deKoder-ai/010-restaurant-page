'use strict'

import { newElement } from "./newElement";

const ddMenu = newElement('div', '', ['dropdown_menu--animated'], 'dd-menu');
const header = document.getElementById('header');
header.appendChild(ddMenu);
let ddContent = [
    ['About'],
    ['Menu'],
    ['Find Us'],
    ['Events'],
    ['News'],
    ['Contact']
]
// window.addEventListener('resize', function(event) {
//     const mediaQuery = window.matchMedia('(min-width: 600px)');
//     if (mediaQuery.matches) {
//         ddContent = [
//             ['Events'],
//             ['News'],
//             ['Contact']
//         ]
//     } else {
//         ddContent = [
//             ['About'],
//             ['Menu'],
//             ['Find Us'],
//             ['Events'],
//             ['News'],
//             ['Contact']
//         ]
//     }
// });


for (let i = 0; i < ddContent.length; i++) {
    const x = newElement('button', ddContent[i], ['dd-item'], `dd-${i}-btn`);
    ddMenu.appendChild(x);
}
let toggle = false;
const openMenu = function() {
    ddMenu.style.display = 'block';
    toggle = true;
}
const closeMenu = function() {
    ddMenu.style.display = 'none';
    toggle = false;
}

export { openMenu, closeMenu, toggle };