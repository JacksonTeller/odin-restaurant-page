let thanksLinksList = [
    'Image by <a href="https://pixabay.com/users/engin_akyurt-3656355/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2242213">Engin Akyurt</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2242213">Pixabay</a>',
    'Image by <a href="https://pixabay.com/users/startupstockphotos-690514/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=594090">StartupStockPhotos</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=594090">Pixabay</a> ',
    'Image by <a href="https://pixabay.com/users/eliasfalla-83821/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=206142">Elias Shariff Falla Mardini</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=206142">Pixabay</a>',
    'Image by <a href="https://pixabay.com/users/averyanovphoto-12664159/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4246954">Kirill Averianov</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=4246954">Pixabay</a>',
    'Image by <a href="https://pixabay.com/users/janbaby-3005373/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1572738">Jan Alexander</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1572738">Pixabay</a>',
    'Image by <a href="https://pixabay.com/users/myriams-fotos-1627417/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2325722">Myriams-Fotos</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2325722">Pixabay</a>',
    'Image by <a href="https://pixabay.com/users/madun_digital-283126/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=393954">Madun Digital</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=393954">Pixabay</a>',
    'Image by <a href="https://pixabay.com/users/ricinator-3282802/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1713737">Ricarda Mölck</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1713737">Pixabay</a>',
    'Image by <a href="https://pixabay.com/users/ulleo-1834854/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3740926">Ulrike Leone</a> from <a href="https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=3740926">Pixabay</a>'
];

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

const createAddress = () => {
    let address = createNewElement('div', 'address');
    let children = [];
    // create address-img class
    let addressImg = createNewElement('div', 'address-img');
    let img = document.createElement('img');
    img.setAttribute('src', './images/coffee-shop.jpg');
    img.setAttribute('alt', 'coffee-shop');
    addressImg.appendChild(img);
    children.push(addressImg);
    // create address-text class
    let addressText = createNewElement('div', 'address-text', '87300, 122/22, Rua De Vilar, Porto, Portugal');
    children.push(addressText);
    
    appendChildren(address, children);
    return address;
}

const createOwner = () => {
    let owner = createNewElement('div', 'owner');
    let children = [];
    // create owner-img class
    let ownerImg = createNewElement('div','owner-img');
    let img = document.createElement('img');
    img.setAttribute('src', './images/person.png');
    img.setAttribute('alt', 'person');
    ownerImg.appendChild(img);
    children.push(ownerImg);
    // create owner-info
    let ownerInfo = createNewElement('div', 'owner-info', 'Caetano Moreira\n');
    let link = document.createElement('a');
    link.setAttribute('href', 'http://');
    link.innerText = 'coolwebsite.real/caetanomoreira';
    ownerInfo.appendChild(link);
    children.push(ownerInfo);

    appendChildren(owner, children);
    return owner;
}

const createThanks = () => {
    let thanks = createNewElement('div','thanks');
    let children = [];
    // create thanks-img class
    let thanksImg = createNewElement('div', 'thanks-img');
    let img = document.createElement('img');
    img.setAttribute('src', './images/thanks.jpg');
    img.setAttribute('alt', 'coffee-heart');
    thanksImg.appendChild(img);
    children.push(thanksImg);
    // create thanks-links class
    let thanksLinks = createNewElement('div', 'thanks-links');
    let links = [];
    for (let i = 0; i < thanksLinksList.length; i++) {
        let p = document.createElement('p');
        p.innerHTML = thanksLinksList[i];
        links.push(p);
    }
    appendChildren(thanksLinks, links);
    children.push(thanksLinks);

    appendChildren(thanks, children);
    return thanks;
}

const createInfoContacts = () => {
    let info = createNewElement('div', 'info');
    let contacts = createNewElement('div', 'contacts-page');
    let children = [
        createAddress(),
        createOwner(),
        createThanks(),
    ]

    appendChildren(contacts, children);
    info.appendChild(contacts);

    return info;
}

export {createInfoContacts};