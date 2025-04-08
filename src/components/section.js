import { createElement } from "./createElements.js";
const joinUsSection = () => {
    const container = document.querySelector('.container');

    const sectionContainer = createElement('section', 'joinUsSection');
    const heading2 = createElement('h2', 'sectionH2');
    const cardContainer = createElement('section', 'card-container');
    const paragraph1 = createElement('p', 'info-p');
    paragraph1.textContent = "We don’t just make your coffee, we make your day!"
    const createCards = () => {
        let cards = [];
        let n = 4;
        while (n > 0) {
            const createArt = createElement('article', 'infoCard');
            const heading3 = createElement('h3', 'sectionH3');
            heading3.textContent = "SUPREME COFFEE";
            createArt.appendChild(heading3)
            cards.push(createArt);
            n--;
        }
        return cards;
    }

    const cards = createCards();
    cards.forEach(card => cardContainer.appendChild(card));

    heading2.textContent = "Why are we different?";
    sectionContainer.appendChild(heading2);
    container.appendChild(sectionContainer);
    sectionContainer.appendChild(paragraph1);
    sectionContainer.appendChild(cardContainer)

}

export {joinUsSection}