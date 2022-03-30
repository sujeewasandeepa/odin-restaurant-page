import { content } from "./index";

export default function header () {
    renderHeaderText();
}

function renderHeaderText () {
    const header = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerText = "Colombo Chill Zone";
    h1.classList.add('heading');
    header.append(h1);
    content.append(header);
}