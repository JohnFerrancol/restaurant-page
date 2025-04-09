import "../css/style.css";
import { renderHome } from "./tabs/home.js";
import { renderMenu } from "./tabs/menu.js";
import { renderContact } from "./tabs/contact.js";

document.addEventListener("DOMContentLoaded", () => {
  // When the document is first loaded, render the home tab first
  renderTab("home");

  // Have an event listener which listens to each link and renders the corresponding tab
  const links = document.querySelectorAll(".link > a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      // Remove the chosen link class from all links and add it to the link pressed
      links.forEach((link) => link.classList.remove("chosen-link"));
      link.classList.add("chosen-link");

      // Get the dataset attribute of the link to map it to the tab to render
      let tabToRender = link.dataset.tab;
      renderTab(tabToRender);
    });
  });
});

// Define a function to determine the render function to invoke
function renderTab(tabSelected) {
  const mainElement = document.querySelector("#content");

  // Clear the main content
  mainElement.innerHTML = "";

  // Render the tab according to the tab passed through the sargument
  switch (tabSelected) {
    case "home":
      renderHome();
      break;
    case "menu":
      renderMenu();
      break;
    case "contact":
      renderContact();
      break;
  }
}
