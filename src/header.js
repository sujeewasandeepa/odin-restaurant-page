import { content } from "./index";

export default function header () {
    const header = document.createElement('h1');
    header.innerText = "Hello!";
    content.append(header);
}
