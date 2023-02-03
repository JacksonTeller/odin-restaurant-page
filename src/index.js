import { createHeader, createFooter, appendChildren, removeChildren } from "./script-footer-and-header";
import { createInfoHome, slideShow } from "./script-home";
import { createInfoMenu } from "./script-menu";
import { createInfoContacts } from "./script-contacts";

let content = document.querySelector('#content');

let children = [
    createHeader(),
    createInfoHome(),
    createFooter()
];

// create home page on load
window.addEventListener('load', () => {
    appendChildren(content, children);
    slideShow();
});

content.addEventListener('click', (e) => {
    // create menu page
    if(e.target.classList.contains('menu')) {
        removeChildren(content, children);
        children[1] = createInfoMenu();
        appendChildren(content, children);
    }
    // create contacts page
    if(e.target.classList.contains('contacts')) {
        removeChildren(content, children);
        children[1] = createInfoContacts();
        appendChildren(content, children);
    }
    // create home page on click
    if(e.target.classList.contains('home')) {
        removeChildren(content, children);
        children[1] = createInfoHome();
        appendChildren(content, children);
    }
});
