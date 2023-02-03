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

const removeChildren = (parent, children) => {
    children.forEach(child => {
        parent.removeChild(child);
    })
}


const createHeader = () => {
    let header = createNewElement('div','header');
    let chidlren = [
        createNewElement('div', 'logo', 'Basic coffee'),
        createNewElement('div', 'home', 'Home'),
        createNewElement('div', 'menu', 'Menu'),
        createNewElement('div', 'contacts', 'Contacts')
    ];

    appendChildren(header, chidlren);
    return header;
}

const createFooter = () => {
    let footer = createNewElement('div', 'footer');
    let list = document.createElement('ul');
    let listElements = [];
    for (let i = 1; i < 4; i++) {
        let listElement = document.createElement('li');
        let icon = document.createElement('img');
        let text = document.createElement('p');
        if (i === 1) {
            icon.setAttribute('src', '../src/images/facebook.svg');
            icon.setAttribute('alt', 'fb-icon');
            text.innerText = 'facebook';
            listElement.appendChild(icon);
            listElement.appendChild(text);
            listElements.push(listElement);
        } else if (i === 2) {
            icon.setAttribute('src', '../src/images/instagram.svg');
            icon.setAttribute('alt', 'ig-icon');
            text.innerText = 'instagram';
            listElement.appendChild(icon);
            listElement.appendChild(text);
            listElements.push(listElement);  
        } else {
            icon.setAttribute('src', '../src/images/phone.svg');
            icon.setAttribute('alt', 'ph-icon');
            text.innerText = 'phone number';
            listElement.appendChild(icon);
            listElement.appendChild(text);
            listElements.push(listElement); 
        }
    }
    appendChildren(list, listElements);
    footer.appendChild(list);

    return footer;
}

export {createHeader, createFooter, appendChildren, removeChildren};