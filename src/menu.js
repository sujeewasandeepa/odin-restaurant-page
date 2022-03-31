import { tabBody } from ".";
import destroy from "./destroyTab";

export default function renderMenu (id) {
    destroy();
    const subHeading = document.createElement('h2');
    subHeading.innerText = id;
    tabBody.append(subHeading);
}