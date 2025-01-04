'use strict'
import '../css/menu.css';
import { newElement, createTable, clearHTML } from "./functions";
import { MenuItems } from './Data';


const page = (function() {
    const menuContainer = newElement('div', '',  '', 'menu-container');

    // tabs
    const tabsDiv = newElement('div', '', '' ,'tabs-div');
    const mainsBtn = newElement('button', 'Mains', ['menu-tab-btns'], 'mains-btn');
    const snacksBtn = newElement('button', 'Snacks', ['menu-tab-btns'], 'snacks-btn');
    const drinksBtn = newElement('button', 'Drinks', ['menu-tab-btns'], 'drinks-btn');
    const top = newElement('div', '', '', 'to-top-div');
    const topBtn = newElement('button', 'Top', '', 'to-top-btn');
    top.appendChild(topBtn);
    tabsDiv.appendChild(mainsBtn);
    tabsDiv.appendChild(snacksBtn);
    tabsDiv.appendChild(drinksBtn);
    mainsBtn.style.color = 'var(--textcol';
    mainsBtn.style.backgroundColor = 'var(--red)';

    const menuItemsDiv = newElement('div', '', '', 'menu-items-div');
    let menuPageId = 0;
    mains();

    function scrollToTop() {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    
    

    const tabBtns = (function() {
        function resetTabCol() {
            mainsBtn.style.color = 'black';
            mainsBtn.style.backgroundColor = 'var(--beige)';
            snacksBtn.style.color = 'black';
            snacksBtn.style.backgroundColor = 'var(--beige)';
            drinksBtn.style.color = 'black';
            drinksBtn.style.backgroundColor = 'var(--beige)';
        }
        menuContainer.addEventListener('click', function(e) {
            const target = e.target;
            switch(target.id) {
                case 'mains-btn':
                    resetTabCol();
                    mainsBtn.style.color = 'var(--textcol';
                    mainsBtn.style.backgroundColor = 'var(--red)';
                    menuPageId = 0;
                    mains();
                    break;
                case 'snacks-btn':
                    resetTabCol();
                    snacksBtn.style.color = 'White';
                    snacksBtn.style.backgroundColor = 'var(--red)';
                    menuPageId = 1;
                    snacks();
                    break;
                case 'drinks-btn':
                    resetTabCol();
                    drinksBtn.style.color = 'White';
                    drinksBtn.style.backgroundColor = 'var(--red)';
                    menuPageId = 2;
                    drinks();
                    break;
                case 'to-top-btn':
                    scrollToTop();
            }
            return menuPageId;
        });
    })();
    menuContainer.appendChild(tabsDiv);

    
    function mains() {
        clearHTML(menuItemsDiv);
        const thai = newElement('h1', 'Thai');
        menuItemsDiv.appendChild(thai);
        const thaiTable = createTable(MenuItems.thai, 'thai-table');
        menuItemsDiv.appendChild(thaiTable);
        menuItemsDiv.appendChild(top);
    }
    function snacks() {
        clearHTML(menuItemsDiv);
        const barSnacks = newElement('h1', 'Bar Snacks');
        menuItemsDiv.appendChild(barSnacks);
        menuItemsDiv.appendChild(top);
    }
    function drinks() {
        clearHTML(menuItemsDiv);
        const cocktailsTitle = newElement('h1', 'Cocktails');
        menuItemsDiv.appendChild(cocktailsTitle);
        const cocktailsTable = createTable(MenuItems.cocktails, 'cocktails-table');
        menuItemsDiv.appendChild(cocktailsTable);

        const beerTitle = newElement('h1', 'Beer');
        menuItemsDiv.appendChild(beerTitle);
        const beerTable = createTable(MenuItems.beer, 'beer-table');
        menuItemsDiv.appendChild(beerTable);

        menuItemsDiv.appendChild(top);
        
    }


    menuContainer.appendChild(menuItemsDiv);





    const content = menuContainer;
    return { content };
})();

const menuContent = page.content;

export { menuContent };