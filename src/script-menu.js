
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

const createInfoMenu = () => {
    let info = createNewElement('div', 'info');
    let menu = createNewElement('div', 'menu-page');

    let items = [];
    for (let i = 1; i < 5; i++) {
        let item = createNewElement('div',`item${i}`);
        
        let img = document.createElement('img');
        img.setAttribute('src',`../src/images/item${i}.png`);
        img.setAttribute('alt', `item${i}`);

        let descItem = createNewElement('div',`desc-item${i}`);
        if (i === 1) {
            descItem.innerText = 'Americano\n0.99$';
        }
        if (i === 2) {
            descItem.innerText = 'Latte\n0.99$';
        }
        if (i === 3) {
            descItem.innerText = 'Green tea\n0.99$';
        }
        if (i === 4) {
            descItem.innerText = 'Black tea\n0.99$';
        }
        item.appendChild(img);
        item.appendChild(descItem);
        items.push(item);
    }

    appendChildren(menu, items);
    info.appendChild(menu);

    return info;
}

export {createInfoMenu};