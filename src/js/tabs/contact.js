export function renderContact() {
  const mainElement = document.querySelector("#content");

  const contactHeader = document.createElement("h1");
  contactHeader.textContent = "Contact";
  contactHeader.style.textAlign = "center";

  mainElement.appendChild(contactHeader);
}
