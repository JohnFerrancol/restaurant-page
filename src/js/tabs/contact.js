export function renderContact() {
  const mainElement = document.querySelector("#content");

  const contactHeaderContainer = document.createElement("div");
  contactHeaderContainer.classList.add("contact-header-container");

  const contactHeader = document.createElement("h1");
  contactHeader.textContent = "Contact";
  contactHeader.classList.add("contact-header");
  contactHeaderContainer.appendChild(contactHeader);

  const hr = document.createElement("hr");
  const hr2 = document.createElement("hr");
  contactHeaderContainer.appendChild(hr);
  contactHeaderContainer.appendChild(hr2);

  mainElement.appendChild(contactHeaderContainer);

  const contactForm = document.createElement("form");
  contactForm.classList.add("contact-form");
  mainElement.appendChild(contactForm);

  const inputTypeArray = [
    {
      type: "text",
      id: "full-name",
      name: "full-name",
      for: "full-name",
      placeholder: "Full Name*",
    },
    {
      type: "tel",
      id: "phone",
      name: "phone",
      for: "phone",
      placeholder: "Phone*",
    },
    {
      type: "email",
      id: "email",
      name: "email",
      for: "email",
      placeholder: "Email*",
    },
    {
      type: "textarea",
      id: "message",
      name: "message",
      for: "message",
      rows: "4",
      cols: "55",
      placeholder: "Message",
    },
  ];

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");

  inputTypeArray.forEach((inputType) => {
    const inputWrapper = document.createElement("div");
    inputWrapper.classList.add("input-wrapper");

    let input;
    if (inputType.type === "textarea") {
      input = document.createElement("textarea");
    } else {
      input = document.createElement("input");
      input.type = inputType.type;
    }
    input.id = inputType.id;
    input.name = inputType.name;
    input.required = true;
    inputWrapper.appendChild(input);

    if (inputType.type !== "textarea") {
      const label = document.createElement("label");
      label.for = inputType.for;
      label.textContent = inputType.placeholder;
      inputWrapper.appendChild(label);
    } else {
      input.placeholder = "Message";
      input.rows = inputType.rows;
      input.cols = inputType.cols;
      input.pattern = ".{20,}";
      inputWrapper.append(input);
    }

    inputContainer.appendChild(inputWrapper);
  });

  contactForm.appendChild(inputContainer);

  const submitButton = document.createElement("button");
  submitButton.classList.add("form-submit-button");
  submitButton.type = "submit";
  submitButton.value = "Submit";
  submitButton.textContent = "Submit";

  contactForm.appendChild(submitButton);
}
