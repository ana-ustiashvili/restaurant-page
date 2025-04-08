import { createElement } from "./createElements.js";
const contactPage = () => {
    const sectionContainer = document.querySelector('.upper-section');

    const innerSection = createElement("section", "inner-section");
        sectionContainer.appendChild(innerSection);

    const paragraph1 = createElement('p', 'intro-p');
    const paragraph2 = createElement('p', 'big-p');
    const orderBtn = createElement('button', 'order-btn');

    paragraph1.textContent = "contact us";
    paragraph2.textContent = "123@gmail.com";
    orderBtn.textContent = "send email";

    innerSection.appendChild(paragraph1);
    innerSection.appendChild(paragraph2);
    innerSection.appendChild(orderBtn);
}

export {contactPage}