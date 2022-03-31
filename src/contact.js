import { tabBody } from ".";
import destroy from "./destroyTab";

export default function renderContact (id) {
    destroy();
    const subHeading = document.createElement('h2');
    subHeading.innerText = id;
    subHeading.className = 'subHeading';
    tabBody.append(subHeading);
}