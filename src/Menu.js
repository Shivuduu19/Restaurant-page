function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");

  menu.appendChild(
    createMenuItem(
      "Idli",
      "made with cow ghee which makes eating IDLIS healthy and tasty "
    )
  );
  menu.appendChild(
    createMenuItem(
      "Dosa",
      "made with cow ghee which makes enjoying DOSAS healthy and tasty"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Poori",
      "made with pure cow ghee which makes eating PURIES healthy and tasty"
    )
  );
  menu.appendChild(
    createMenuItem(
      "Bonda",
      "made with pure cow ghee which makes eating BONDAM healthy and tasty"
    )
  );
  menu.appendChild(createMenuItem("vada", "made with cow ghee "));
  return menu;
}

function createMenuItem(name, description) {
  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");

  const foodName = document.createElement("h2");
  foodName.textContent = name;

  const foodDescription = document.createElement("p");
  foodDescription.textContent = description;

  const foodImage = document.createElement("img");
  foodImage.src = `images/${name.toLowerCase()}.png`;
  foodImage.alt = `${name}`;

  menuItem.appendChild(foodImage);
  menuItem.appendChild(foodName);
  menuItem.appendChild(foodDescription);

  return menuItem;
}

function loadMenu() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createMenu());
}

export default loadMenu;
