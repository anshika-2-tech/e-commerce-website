let wishItemObjects;
loadWishItemObjects();
displayWishItems();

function loadWishItemObjects(){
    
    wishItemObjects=wishItem.map(itemId =>{
        for (let i=0 ; i<items.length;i++){
              let item = items.find(i => i.id == itemId);
    return item;
    }}).filter(item => item != null);
}
function displayWishItems(){
    let containerElement = document.querySelector(`.wishlist-item`);
    let innerHTML = '';
    wishItemObjects.forEach(wishItem=> {
        innerHTML += generateItemHTML(wishItem);
    });

    containerElement.innerHTML= innerHTML;
}
function removeFromWish(itemId){
    wishItem= wishItem.filter(wishItemId => wishItemId !== itemId);
    localStorage.setItem('wishItem', JSON.stringify(wishItem));
    loadWishItemObjects();
    displayWishItems();
}
function generateItemHTML(item){
      return`
             <div class="item-container">
              <img class="item-img" src=../${item.image} alt="item-image"  onclick="goToProductDetail('${item.id}')">
            
                    <div class="rating">
                        ${item.rating.stars} ⭐️ | ${item.rating.count}    </div>

                    <div class="company-name">${item.company}</div>
                    <div class="item-name">${item.item_name}</div>

                    <div class="price">
                        <span class="current-price">${item.current_price}</span>
                        <span class="original-price">${item.original_price}</span>
                        <span class="discount">(${item.discount_percentage}% OFF)</span>
                    </div>
                     
                          <button class="btn-add-bag" onclick="addToBag('${item.id}'), removeFromWish('${item.id}')" >Add To Bag</button>
                          <button class="btn-remove-wish" onclick="removeFromWish('${item.id}')">Remove From Wishlist</button>
                     
                </div>`;}