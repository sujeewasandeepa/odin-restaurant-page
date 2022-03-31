import { tabBody } from ".";
import destroy from "./destroyTab";

export default function renderContact (id) {
    destroy();
    const subHeading = document.createElement('h2');
    const workInProgress = document.createElement('marquee');

    workInProgress.scrollAmount = 20;
    workInProgress.innerText = "<< work in progress! >>";

    subHeading.innerText = id;
    subHeading.className = 'subHeading';

    tabBody.append(subHeading, workInProgress);
}