import { content } from ".";

export default function renderTabs () {
    const container = document.createElement('div');
    const tabLists = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');

    home.id = 'home';
    menu.id = 'menu';
    contact.id = 'contact';
    container.id = 'container';

    tabLists.className = "tabList";

    home.className = "notSelected";
    menu.className = "notSelected";
    contact.className = "notSelected";

    home.innerText = 'home';
    menu.innerText = 'menu';
    contact.innerText = 'contact';

    tabLists.append(home, menu, contact);
    container.append(tabLists);
    content.append(container);
}