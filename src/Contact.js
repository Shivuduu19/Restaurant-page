function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "📞 89196675348";

  const address = document.createElement("p");
  address.textContent =
    "🏠 Auditorium road, beside geetanjali reading hall,Br Nagar";

  contact.appendChild(phoneNumber);
  contact.appendChild(address);

  return contact;
}

function loadContact() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createContact());
}

export default loadContact;
