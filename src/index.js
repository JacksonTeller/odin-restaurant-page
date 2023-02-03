console.log('My restaurant page!!!')

import { createHeader, createFooter, appendChildren, removeChildren } from "./script-footer-and-header";
import { createInfoHome, slideShow } from "./script-home";
import { createInfoMenu } from "./script-menu";
import { createInfoContacts } from "./script-contacts";

let content = document.querySelector('#content');

// content.appendChild(createHeader());
// content.appendChild(createInfoHome());
// content.appendChild(createFooter());

let children = [
    createHeader(),
    createInfoHome(),
    createFooter()
];


window.addEventListener('load', () => {
    appendChildren(content, children);
    slideShow();
});

content.addEventListener('click', (e) => {
    console.log(e.target.classList);
    if(e.target.classList.contains('menu')) {
        removeChildren(content, children);
        children[1] = createInfoMenu();
        appendChildren(content, children);
    }
    if(e.target.classList.contains('contacts')) {
        removeChildren(content, children);
        children[1] = createInfoContacts();
        appendChildren(content, children);
    }
    if(e.target.classList.contains('home')) {
        removeChildren(content, children);
        children[1] = createInfoHome();
        appendChildren(content, children);
    }
});

// create a list and with eventListener change the middle element