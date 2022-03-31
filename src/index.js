import header from "./header";
import renderTabs from "./tabs";
import './style.css';

export const content = document.querySelector('#content');
export const container = document.createElement('div');
container.id = 'container';

header();
renderTabs();

content.append(container);