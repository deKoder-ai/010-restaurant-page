'use strict'
import '../css/menu.css';
import { newElement } from "./newElement";
import cocktail from '../img/cocktail-glass.svg';



const page = (function() {
    const menuPage = newElement('div', '',  ['flex-center'], 'menu-page');
    const menuContainer = newElement('div', '',  '', 'menu-container');

    // tabs
    const tabsDiv = newElement('div', '', '' ,'tabs-div');
    const mainsBtn = newElement('button', 'Mains', ['menu-tab-btns'], 'mains-btn');
    const snacksBtn = newElement('button', 'Snacks', ['menu-tab-btns'], 'snacks-btn');
    const drinksBtn = newElement('button', 'Drinks', ['menu-tab-btns'], 'drinks-btn');
    tabsDiv.appendChild(mainsBtn);
    tabsDiv.appendChild(snacksBtn);
    tabsDiv.appendChild(drinksBtn);
    mainsBtn.style.color = 'var(--ff-textcol';
    mainsBtn.style.backgroundColor = 'var(--ff-red)';
    (function tabBtns() {
        function resetTabCol() {
            mainsBtn.style.color = 'black';
            mainsBtn.style.backgroundColor = 'var(--ff-beige)';
            snacksBtn.style.color = 'black';
            snacksBtn.style.backgroundColor = 'var(--ff-beige)';
            drinksBtn.style.color = 'black';
            drinksBtn.style.backgroundColor = 'var(--ff-beige)';
        }
        menuContainer.addEventListener('click', function(e) {
            const target = e.target;
            switch(target.id) {
                case 'mains-btn':
                    resetTabCol();
                    mainsBtn.style.color = 'var(--ff-textcol';
                    mainsBtn.style.backgroundColor = 'var(--ff-red)';
                    break;
                case 'snacks-btn':
                    resetTabCol();
                    snacksBtn.style.color = 'White';
                    snacksBtn.style.backgroundColor = 'var(--ff-red)';
                    break;
                case 'drinks-btn':
                    resetTabCol();
                    drinksBtn.style.color = 'White';
                    drinksBtn.style.backgroundColor = 'var(--ff-red)';
                    break;
            }
        });
    })();
    menuContainer.appendChild(tabsDiv);
    
    const menuItemsDiv = newElement('div', '', '', 'menu-items-div');
    menuContainer.appendChild(menuItemsDiv);





    const menuImgDiv = newElement('div', '', '', 'menu-img-div');


    // side glass
    const cocktailGlassL = newElement('img', '', ['cocktail-svg-2'], 'cocktail-L');
    const cocktailGlassR = newElement('img', '', ['cocktail-svg-2'], 'cocktail-R');
    cocktailGlassL.src = cocktail;
    cocktailGlassR.src = cocktail;
    menuContainer.appendChild(cocktailGlassL);
    menuContainer.appendChild(cocktailGlassR);


    menuPage.appendChild(menuContainer);

    const content = menuPage;
    return { content };
})();

const menuContent = page.content;

export { menuContent };