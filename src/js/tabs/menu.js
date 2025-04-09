export function renderMenu() {
  const mainElement = document.querySelector("#content");

  const menuHeader = document.createElement("h1");
  menuHeader.textContent = "Menu";
  menuHeader.style.textAlign = "center";

  mainElement.appendChild(menuHeader);
}
