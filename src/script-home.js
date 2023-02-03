
const createNewElement = (element, className, text=null) => {
    let newElement = document.createElement(element);
    newElement.classList.add(className);
    newElement.innerText = text;
    return newElement;
}

const appendChildren = (parent, children) => {
    children.forEach(child => {
        parent.appendChild(child);
    });
}

const createInfoHome = () => {
    let info = createNewElement('div', 'info');
    let children = [
        createNewElement('div', 'description'),
        createNewElement('div', 'img')
    ];
    // .description structure
    let descriptionContent = [
    createNewElement('h2', 'h2', 'Bla bla coffee'),
        createNewElement('p', 'p', 'Coffee and a workspace for creative people')
    ]
    appendChildren(children[0], descriptionContent);
    // .img content
    let slider = createNewElement('div', 'slider');
    let slides = createNewElement('div', 'slides');

    let slidesContent = [];
    for (let i = 1; i < 5; i++) {
        let input = document.createElement('input');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', 'radio-btn');
        input.setAttribute('id', `radio${i}`);
        slidesContent.push(input);
    }

    for (let i = 1; i < 5; i++) {
        let slide = document.createElement('div');
        slide.classList.add('slide');
        i === 1 ? slide.classList.add('first') : false;

        let img = document.createElement('img');
        img.setAttribute('src', `./images/slide${i}${i}.jpg`);
        img.setAttribute('alt', `slide${i}`);
        slide.appendChild(img);
        slidesContent.push(slide);
    }
    
    let navigationManual = createNewElement('div', 'navigation-manual');
    let labels = [];
    for (let i = 1; i < 5; i++) {
        let label = document.createElement('label');
        label.setAttribute('for', `radio${i}`);
        label.setAttribute('class', `manual-btn btn${i}`);
        labels.push(label);
    }
    appendChildren(navigationManual, labels);
    slidesContent.push(navigationManual);

    appendChildren(slides, slidesContent);
    slider.appendChild(slides);
    children[1].appendChild(slider);
    

    appendChildren(info, children);
    return info;
}

const slideShow = () => {
    let counter = 1;

    setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);
}

export {createInfoHome, slideShow};