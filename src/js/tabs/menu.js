export function renderMenu() {
  // Render the following menus for pizza and pasta
  const odinPizzaMenu = [
    ["Meat Lover", "fennel sausage, bacon, guanciale, tomato, mozzarella", 45],
    ["Fennel Sausage", "panna, mozzarella, red onion, scallion", 40],
    ["Pizza alla Benno", "speck, pineapple, jalapeno, tomato, mozzarella", 40],
    ["Burrata", "slow-roasted tomato, Sicilian oregano", 40],
    ["Salame", "tomato, mozzarella, Fresno chiles", 40],
    ["Funghi Misti", "fontina, taleggio, thyme, Grana Padano", 40],
    ["Aglio Olio", "mozzarella, fontina, chili, parsley", 40],
    ["Bianca fontina", "mozzarella, sottocenere, sage", 40],
  ];
  populateMenu(odinPizzaMenu, "Pizza");

  const odinPastaMenu = [
    ["Tagliatelle", "beef cheek regu", 34],
    ["Maltagilati", "duck regu", 34],
    ["Orecchilette", "fennel saugsage, Swiss chard", 33],
    ["Fonduta Ravioli", "35 years aceto balsamico tradizonale di Modena", 38],
    ["Casarecce", "guanciale, fresh toamto, Pickled Fresno chiles", 34],
  ];

  populateMenu(odinPastaMenu, "Pasta");
}

function populateMenu(menuArray, menuName) {
  const mainElement = document.querySelector("#content");

  const menuHeaderContainer = document.createElement("div");
  menuHeaderContainer.classList.add("menu-header-container");

  const menuHeader = document.createElement("h1");
  menuHeader.textContent = menuName;
  menuHeader.classList.add("menu-header");
  menuHeaderContainer.appendChild(menuHeader);

  const hr = document.createElement("hr");
  const hr2 = document.createElement("hr");
  menuHeaderContainer.appendChild(hr);
  menuHeaderContainer.appendChild(hr2);

  mainElement.appendChild(menuHeaderContainer);

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  menuArray.forEach((dish) => {
    const dishContainer = document.createElement("div");
    dishContainer.classList.add("dish-container");

    const dishName = document.createElement("p");
    dishName.textContent = dish[0];
    dishName.classList.add("dish-name");
    dishContainer.appendChild(dishName);

    const dishDescription = document.createElement("p");
    dishDescription.textContent = dish[1];
    dishDescription.classList.add("dish-description");
    dishContainer.appendChild(dishDescription);

    const dishPrice = document.createElement("p");
    dishPrice.textContent = `SGD ${dish[2]}`;
    dishPrice.classList.add("pizza-dish-price");
    dishContainer.appendChild(dishPrice);

    menuContainer.appendChild(dishContainer);
  });

  mainElement.appendChild(menuContainer);
}
