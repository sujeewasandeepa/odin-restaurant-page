import { tabBody } from ".";

export default function renderMenu (id) {
    const subHeading = document.createElement('h2');
    subHeading.innerText = id;
    tabBody.append(subHeading);
}