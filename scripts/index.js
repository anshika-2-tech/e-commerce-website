
let bagItem=[];
onLoad();
function onLoad(){
displayItemsOnHomePage();

let bagItemsStr =localStorage.getItem('bagItem');
bagItem = bagItemsStr ? JSON.parse(bagItemsStr):[];
displayBagIcon();
displayItemsOnHomePage();




}

function displayItemsOnHomePage(){

let itemsContainerElement = document.querySelector('.items-container');
if(!itemsContainerElement){
    return;
}
let innerHTML = '';

items.forEach(item => {
    innerHTML += `
    <div class="item-container">
         <img class="item-img" src="${item.image}" alt="item-image"  onclick="goToProductDetail('${item.id}')">
         
        <div class="rating">
            ${item.rating.stars} ⭐️ | ${item.rating.count}
        </div>

        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>

        <div class="price">
            <span class="current-price">${item.current_price}</span>
            <span class="original-price">${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>

        <button class="btn-add-bag" onclick="addToBag('${item.id}')">Add To Bag</button>
    </div>
    `;
});

itemsContainerElement.innerHTML = innerHTML;

}
function addToBag(itemId){
    
    bagItem.push(itemId);
    localStorage.setItem('bagItem', JSON.stringify(bagItem));
    displayBagIcon();


}
function displayBagIcon(){
    let bagItemCountElement=document.querySelector('.bag-item-count');
    if(bagItem.length>0){
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItem.length;
    }else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}
