import header from "./header";
import renderTabs from "./tabs";
import './style.css';
import renderHome from "./home";
import renderMenu from "./menu";
import destroy from "./destroyTab";

export const content = document.querySelector('#content');
export const container = document.createElement('div');
export const tabBody = document.createElement('div');
container.id = 'container';
tabBody.className = 'tabBody';

header();
renderTabs();
renderHome("hello from home!");
destroy();

container.append(tabBody);
content.append(container);