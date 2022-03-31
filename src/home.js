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
    const schedule = document.createElement('p');

    greeting.id = 'greeting';
    greeting.innerHTML = "Hello Welcome to <br> the Colombo Chill Zone!";

    description.innerHTML = "If you are looking for a chill place to hangout "
    + "with your loved ones. Look no further! "
    + "We have comfy and relaxing lounges for everyone! ";
    description.className = "tabDescription";

    schedule.innerHTML = "We are open from <br>"
    + "8:00 AM - 10:00 PM <br>"
    + "Everyday!"
    schedule.className = "schedule";

    tabContent.append(greeting, description, schedule);
    tabBody.append(tabContent);
}