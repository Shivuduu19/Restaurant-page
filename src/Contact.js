function createContact() {
  const contact = document.createElement("div");
  contact.classList.add("contact");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "📞 8919687188";

  const address = document.createElement("p");
  address.textContent =
    "🏠 Auditorium road, beside geetanjali reading hall,BN Reddy Nagar";

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
