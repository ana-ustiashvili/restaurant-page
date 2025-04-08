import { createElement } from "./createElements.js";

const upperSection = () => {
    const sectionContainer = document.querySelector('.upper-section');

    const innerSection = createElement('section', 'inner-section');
    sectionContainer.appendChild(innerSection);

    const paragraph1 = createElement('p', 'intro-p');
    const paragraph2 = createElement('p', 'big-p');
    const orderBtn = createElement('button', 'order-btn');

    paragraph1.textContent = "We’ve got your morning covered with";
    paragraph2.textContent = "Coffee";
    orderBtn.textContent = "Order Now";

    innerSection.appendChild(paragraph1);
    innerSection.appendChild(paragraph2);
    innerSection.appendChild(orderBtn);
}

export {upperSection};