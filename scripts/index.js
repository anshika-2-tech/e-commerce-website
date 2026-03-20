let bagItem = [];

onLoad();

function onLoad() {

  let bagItemsStr = localStorage.getItem('bagItem');
  bagItem = bagItemsStr ? JSON.parse(bagItemsStr) : [];

  displayBagIcon();


  if (typeof items !== "undefined") {
    displayItemsOnHomePage(items);
  }
}



function displayItemsOnHomePage(data) {

  let itemsContainerElement = document.querySelector('.items-container');
  if (!itemsContainerElement) return;

  let finalData = data || items; 

  let innerHTML = '';

  finalData.forEach(item => {
    innerHTML += `
      <div class="item-container">
        <img class="item-img" src="${item.image}" 
             onclick="goToProductDetail('${item.id}')">

        <div class="rating">
          ${item.rating.stars} ⭐️ | ${item.rating.count}
        </div>

        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>

        <div class="price">
          <span class="current-price">₹${item.current_price}</span>
          <span class="original-price">₹${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>

        <button class="btn-add-bag" onclick="addToBag('${item.id}')">
          Add To Bag
        </button>
      </div>
    `;
  });

  itemsContainerElement.innerHTML = innerHTML;
}



function searchProducts() {
  let input = document.getElementById("searchInput").value.toLowerCase().trim();

  let words = input.split(" "); 

  let filteredItems = items.filter(item => {

    let text = (item.item_name + " " + item.company).toLowerCase();

 
    return words.every(word => text.includes(word));
  });

  displayItemsOnHomePage(filteredItems);
}

function addToBag(itemId) {

  if (bagItem.includes(itemId)) {
    alert("Item already present in Bag ❤️");
    return;
  }

  bagItem.push(itemId);
  localStorage.setItem('bagItem', JSON.stringify(bagItem));

  displayBagIcon();
}


function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');

  if (bagItem.length > 0) {
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItem.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function logoutUser() {
  localStorage.removeItem("user");
  alert("Logged out!");

  if (window.location.pathname.includes("/pages/")) {
    window.location.href = "../index.html";
  } else {
    window.location.href = "index.html";
  }
}
