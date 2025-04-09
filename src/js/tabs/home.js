import aboutUsImageUrl from "../../assets/img/pizza-about.png";

export function renderHome() {
  const mainElement = document.querySelector("#content");
  mainElement.classList.add("home");

  const reserveTableSection = document.createElement("section");
  reserveTableSection.classList.add("reserve-table");

  const reserveTableHeader = document.createElement("h1");
  reserveTableHeader.textContent = "Welcome to OdinPizza";
  reserveTableHeader.classList.add("reserve-table-header");
  reserveTableSection.appendChild(reserveTableHeader);

  const reserveTableText = document.createElement("h1");
  reserveTableText.textContent =
    "Serving Authentic Italian Pizzas in the Little Red Dot";
  reserveTableText.classList.add("reserve-table-text");
  reserveTableSection.append(reserveTableText);

  const reserveTableButton = document.createElement("button");
  reserveTableButton.textContent = "Reserve Table";
  reserveTableButton.classList.add("reserve-table-button");
  reserveTableSection.append(reserveTableButton);

  mainElement.appendChild(reserveTableSection);

  const aboutUsSection = document.createElement("section");
  aboutUsSection.classList.add("about-us");

  const aboutUsContent = document.createElement("div");
  aboutUsContent.classList.add("about-us-content");
  const aboutUsSectionHeader = document.createElement("h1");
  aboutUsSectionHeader.textContent = "About Us";
  aboutUsSectionHeader.classList.add("about-us-header");
  aboutUsContent.appendChild(aboutUsSectionHeader);

  const aboutUsSectionDescription = document.createElement("p");
  aboutUsSectionDescription.textContent =
    "Here at OdinPizza, our daily goal is to create, serve and enjoy authentic Italian food. We love fresh and flavorful food. Every morning before opening the OdinPizza kitchen, we stock our shelves with market fresh ingredients, so that the food we serve you is as fresh and flavorful as can be. We welcome you to our restaurant, and wish you a hearty appetite. ";
  aboutUsSectionDescription.classList.add("about-us-description");
  aboutUsContent.appendChild(aboutUsSectionDescription);

  const learnMoreButton = document.createElement("button");
  learnMoreButton.textContent = "Learn More";
  learnMoreButton.classList.add("learn-more-button");
  aboutUsContent.appendChild(learnMoreButton);

  aboutUsSection.appendChild(aboutUsContent);

  const aboutUsImage = document.createElement("img");
  aboutUsImage.src = aboutUsImageUrl;
  aboutUsImage.alt = "About Us Image";
  aboutUsImage.classList.add("about-us-image");
  aboutUsSection.appendChild(aboutUsImage);

  mainElement.appendChild(aboutUsSection);

  const openingHoursSection = document.createElement("section");
  openingHoursSection.classList.add("opening-hours");

  const openingHoursHeader = document.createElement("h2");
  openingHoursHeader.textContent = "Opening Hours";
  openingHoursHeader.classList.add("opening-hours-header");
  openingHoursSection.appendChild(openingHoursHeader);

  const openingHoursContainer = document.createElement("div");
  openingHoursContainer.classList.add("opening-hours-container");

  const weekdayText = document.createElement("p");
  weekdayText.textContent = "Weekdays";
  weekdayText.classList.add("opening-hours-day");
  openingHoursContainer.appendChild(weekdayText);

  const weekdayOpeningHoursText = document.createElement("p");
  weekdayOpeningHoursText.textContent = "11:00 - 9:00pm";
  weekdayOpeningHoursText.classList.add("opening-hours-time");
  openingHoursContainer.appendChild(weekdayOpeningHoursText);

  const weekendText = document.createElement("p");
  weekendText.textContent = "Weekends";
  weekendText.classList.add("opening-hours-day");
  openingHoursContainer.appendChild(weekendText);

  const weekendOpeningHoursText = document.createElement("p");
  weekendOpeningHoursText.textContent = "11:00 - 10:00pm";
  weekendOpeningHoursText.classList.add("opening-hours-time");
  openingHoursContainer.appendChild(weekendOpeningHoursText);

  openingHoursSection.appendChild(openingHoursContainer);

  mainElement.appendChild(openingHoursSection);
}
