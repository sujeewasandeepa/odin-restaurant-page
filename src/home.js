import { tabBody } from ".";
import destroy from "./destroyTab";

export default function renderHome (id) {
    destroy();
    const subHeading = document.createElement('h2');
    subHeading.innerText = id;
    subHeading.className = 'subHeading';
    tabBody.append(subHeading);
    const tabContent = document.createElement('div');
    const greeting = document.createElement('h3');
    const description = document.createElement('p');
    greeting.id = 'greeting';
    greeting.innerHTML = "Hello Welcome to <br> the Colombo Chill Zone!";
    description.innerHTML = "If you are looking for a chill place to hangout with your loved ones."
    + "";
    tabContent.append(greeting);
    tabContent.append(description);
    tabBody.append(tabContent);
}