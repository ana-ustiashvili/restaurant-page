const createElement = (el, elClass) => {
    const element = document.createElement(el);
    element.classList.add(elClass);
    return element;
}



export {createElement}



