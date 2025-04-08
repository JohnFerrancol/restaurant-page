export function renderHome() {
  const mainElement = document.querySelector("#content");

  const title = document.createElement("h1");
  title.textContent = "Home";
  mainElement.appendChild(title);
}
