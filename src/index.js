import "./css/reset.css";
import "./css/fonts.css";
import "./css/styles.css";

import { upperSection } from "./components/bannerSection.js";
import { joinUsSection } from "./components/section.js";
import { contactPage } from "./components/contact.js";

const clearSection = () => {
  const section2 = document.querySelector(".joinUsSection");
  const section1 = document.querySelector(".inner-section");
  if (section2) section2.remove();
  if (section1) section1.remove();
};

upperSection();
joinUsSection();

const tabEvent = () => {
  // Contact tab
  document.querySelector(".contact-us").addEventListener("click", (e) => {
    e.preventDefault();
    clearSection();
    contactPage();
  });

  // Home tab
  document.querySelector(".home-tab").addEventListener("click", (e) => {
    e.preventDefault();
    clearSection();
    upperSection();
    joinUsSection();
  });
};
tabEvent();

console.log("hi");
