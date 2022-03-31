import { tabBody } from ".";

export default function renderHome (id) {
    const subHeading = document.createElement('h2');
    subHeading.innerText = id;
    tabBody.append(subHeading);
}