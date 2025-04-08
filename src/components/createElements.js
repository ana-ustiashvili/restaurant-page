const createElement = (el, elClass) => {
    const element = document.createElement(el);
    element.classList.add(elClass);
    return element;
}



export {createElement}

//choose element, create child element.append to chosen element.
//create parent element, create child element. append to parent element

