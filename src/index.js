import header from "./header";
import renderTabs from "./tabs";
import './style.css';
import renderHome from "./home";
import renderMenu from "./menu";
import renderContact from "./contact";
import destroy from "./destroyTab";

export const content = document.querySelector('#content');
export const container = document.createElement('div');
export const tabBody = document.createElement('div');
container.id = 'container';
tabBody.className = 'tabBody';

header();
renderTabs();

const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const contact = document.querySelector('#contact');

// Event listeners for tabs
home.addEventListener('click', function() {
    renderHome(home.id);
})
menu.addEventListener('click', function() {
    renderMenu(menu.id);
})
contact.addEventListener('click', function() {
    renderContact(contact.id);
})

container.append(tabBody);
content.append(container);